import { useState } from 'react'
import { addCarsToStore, editCarToStore, updatePictures, deletePicture } from "../../actions/carAction"
import { useDispatch } from 'react-redux'
import { useForm, useFieldArray } from "react-hook-form"
import defaultPhoto from "../../assets/images/camara-fotografica.svg"

const MEASURES_PHOTO = process.env.REACT_APP_MEASURES_CAR

export const useCar = (defaultValues, toast, handleClose, typeActionCar, picturesCar) => {
 
	const dispatch = useDispatch()
    const { handleSubmit, register, errors, control, setValue } = useForm({defaultValues})
    
    const { fields: vPhoto, append: appendCar, remove: removeCar } = useFieldArray({ control, name: "sPhotos" })

    const [ loading, setLoading ] = useState(false)

    const onSubmit =   async (data, e) => {
        try{
            e.preventDefault()
            setLoading(true)
            
            let pictures = picturesCar.map(item => item.value.includes("blob:"))

           for(let index in pictures){
                if(pictures[index].size>122880){
                    toast.error("El tamaño máximo de las imágenes es 120KB", {position: toast.POSITION.TOP_RIGHT})
                    setLoading(false)
                    return false
                }
            }      

            data.sPhotos =  picturesCar

            const body = {
                ...data, 
                price: Number(data.price.replaceAll(".", "")),
                list_price: Number(data.list_price.replaceAll(".", "")),
                sPhotos:  picturesCar
            }

            let response = ""
            if(typeActionCar==="add"){
                response = await dispatch(addCarsToStore(body))
            }else{
                response = await dispatch(editCarToStore(body, defaultValues.id))
            }

            if(response.status){
                toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
                handleClose()
            }else{
                toast.error(response.message,{position: toast.POSITION.TOP_RIGHT})
            }
            
            setLoading(false)
        }catch(error){
            setLoading(false) 
            toast.error(error.message,{position: toast.POSITION.TOP_RIGHT})
          }
    }

    const addRowPhoto = () => {
        appendCar({ photo: "", value: "", name: "Cargar imagen" })
    }

    const deleteRowPhoto = (index) => {
        dispatch(deletePicture(index))
        removeCar(index)
    }

    const onChangeFile = (event, setFile, setFileName, index) => {
     
        if (!event.target.files || event.target.files.length === 0) {
            //setFile(undefined)
            setFileName("Cargar imagen")
            return false
        }
        let reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function (e) {
            let image = new Image();
            image.src = e.target.result;
                   
            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height;
                let width = this.width;
                const measures = MEASURES_PHOTO
                let measuresNew = measures.substr(0,measures.length-2).trim().split("x")

                if(width>Number(measuresNew[0].trim())){
                    toast.error(`Las medidas de las imagen es ${measures}`, {position: toast.POSITION.TOP_RIGHT})
                    setFileName("Cargar imagen")
                    setFile(defaultPhoto)
                    return false
                }

                if(height>Number(measuresNew[1].trim())){
                    toast.error(`Las medidas de las imagen es ${measures}`, {position: toast.POSITION.TOP_RIGHT})
                    setFileName("Cargar imagen")
                    setFile(defaultPhoto)
                    return false
                }

                const data = {
                    id: vPhoto[index].id,
                    value: URL.createObjectURL(event.target.files[0]),
                    photo: event.target.files,
                    name: event.target.files[0].name
                }   
                
                let body = vPhoto
                body[index] = data
                let pictureCarUpdate = picturesCar

                if(vPhoto.length>picturesCar.length){
                    for(let index in vPhoto){
                        let vPhotoCurrent = vPhoto[index]
                        const existePhoto = picturesCar.filter(item => item.value.includes(vPhotoCurrent.value))
                        if(existePhoto.length===0){
                            pictureCarUpdate = [...pictureCarUpdate, vPhotoCurrent ]
                        }
                    }
                }else{
                    pictureCarUpdate[index] = data
                }
             
                setFile(URL.createObjectURL(event.target.files[0]))
                setFileName(event.target.files[0].name)
                setValue('vPhoto', body)
                dispatch(updatePictures(pictureCarUpdate))
                return true;
            };
        } 
    }

    const movePicture = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        dispatch(updatePictures(result))
        return result;
    }


	return {
		handleSubmit, 
        register, 
        errors,
        onSubmit,
        loading,
        addRowPhoto,
        deleteRowPhoto,
        vPhoto,
        control,
        onChangeFile,
        movePicture,
        setValue
	}
}