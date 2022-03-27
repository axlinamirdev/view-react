import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { createStore } from "../../actions/storeAction"
import { getConfInitial } from "../../actions/configAction"
import { formatArrayEmail, formatArrayTelephone, preFormatStore } from "../../utils/toolStore"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export const useMainStore = (defaultValues, toast) => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const [ loadingForm, setLoadingForm ] = useState(false)
    const [fileNameLogo, setFileNameLogo] = useState("Cargar imagen")
    const [fileNameCover, setFileNameCover] = useState("Cargar imagen")
    const [fileNameCoverMobile, setFileNameCoverMobile] = useState("Cargar imagen")
    
    const { handleSubmit, register, control, errors, getValues } = useForm({defaultValues})

    const { fields: vLocals, append: addLocals, remove: removeLocals } = useFieldArray({ control, name: "sLocals" })
    const { fields: vCategories, append: addCategories,  remove: removeCategories } = useFieldArray({ control, name: "sCategories" })
    const { fields: vTelephone, append: addTelephone,  remove: removeTelephone } = useFieldArray({ control, name: "iTelephone" })
    const { fields: vEmail, append: addEmail,  remove: removeEmail } = useFieldArray({ control, name: "iEmail" })
    
    const onSubmit =  async (data, e) => {
        e.preventDefault()
        
        setLoadingForm(true)
  
        if(data.icon_logo_file.length===0){
            setLoadingForm(false)
            toast.error("Debe selecionar un logo", {position: toast.POSITION.TOP_RIGHT})
            return false 
        }

        if(data.icon_logo_file[0].size>122880){
            setLoadingForm(false)
            toast.error("El tamaño máximo del logo es 120KB", {position: toast.POSITION.TOP_RIGHT})
            return false
        }

        if(data.front_cover_file.length===0){
            setLoadingForm(false)
            toast.error("Debe selecionar un banner para la versión de escritorio", {position: toast.POSITION.TOP_RIGHT})
            return false 
        }

        if(data.front_cover_file[0].size> 122880){
            setLoadingForm(false)
            toast.error("El tamaño máximo del banner para la versión de escritorio es 120KB", {position: toast.POSITION.TOP_RIGHT})
            return false
        }

        if(data.front_cover_mobile_file.length===0){
            setLoadingForm(false)
            toast.error("Debe selecionar un banner para la versión móvil", {position: toast.POSITION.TOP_RIGHT})
            return false 
        }

        if(data.front_cover_mobile_file[0].size> 122880){
            setLoadingForm(false)
            toast.error("El tamaño máximo del banner para la versión móvil es 120KB", {position: toast.POSITION.TOP_RIGHT})
            return false
        }

        const body = {
            description: data.description,
            brand: data.brand,
            iEmail: data.iEmail,
            iTelephone: data.iTelephone,
            sCategories: data.sCategories,
            sLocals: data.sLocals,
            front_cover: data.front_cover_file,
            front_cover_mobile: data.front_cover_mobile_file,
            icon_logo: data.icon_logo_file
        }

        let dataFormat = preFormatStore(body)

        if(dataFormat.sCategories.filter(item => item!=="").length===0){
            setLoadingForm(false)
            toast.error("Debe seleccionar una categoría", {position: toast.POSITION.TOP_RIGHT})
            return false
        }

        if(dataFormat.sLocals.filter(item => item!=="").length===0){
            setLoadingForm(false)
            toast.error("Debe seleccionar un local", {position: toast.POSITION.TOP_RIGHT})
            return false
        }

        if(dataFormat.iTelephone.filter(item => item!=="").length===0){
            setLoadingForm(false)
            toast.error("Debe ingresar un número de teléfono", {position: toast.POSITION.TOP_RIGHT})
            return false
        }

        if(dataFormat.iEmail.filter(item => item!=="").length===0){
            setLoadingForm(false)
            toast.error("Debe ingresar un e-mail", {position: toast.POSITION.TOP_RIGHT})
            return false
        } 

        const response = await dispatch(createStore(body))
        if(response.status){
            toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
            await dispatch(getConfInitial())
            setTimeout(() => {
                setLoadingForm(false)
                const url = "/tienda/"+response.slug
                history.push(url)
              }, 1500);
        }else{
            toast.error(response.message,{position: toast.POSITION.TOP_RIGHT})
            setLoadingForm(false)
        }
        setLoadingForm(false)
    }

    const addFieldsForm = (type, status) => {

        if(type==="local"){
            addLocals({ local: "" })
        }else if(type==="category"){
            addCategories({ category: "" })
        }else if(type==="iTelephone"){
            addTelephone({ telephone1: "", telephone2: "", telephone3: "" })
        }else if(type==="iEmail"){
            addEmail({ email1: "", email2: "", email3: "" })
        }
    }

    const removeFieldsForm = (type, index, status) => {
        if(type==="local"){
            removeLocals(index)
        }else if(type==="category"){
            removeCategories(index)
        }else if(type==="iTelephone"){
            removeTelephone(index)
        }else if(type==="iEmail"){
            removeEmail(index)
        }
    }

    const onChangeSelect = (event, type) => {
        event.preventDefault()

        let data = getValues()
        const { value } = event.target
        let isExiste = "", message = "", error = false

        if(type.main==="sLocals"){
            isExiste = data[type.main].filter(item => item.local===value)
            if(isExiste.length>1){
                error = true
                message = `El local ${value} ya se encuentra seleccionado`
            }
        }else if(type.main==="sCategories"){
            isExiste = data[type.main].filter(item => Number(item.category)===Number(value))
            if(isExiste.length>1){
                error = true
                message = `La categoría ${value} ya se encuentra seleccionado`
            }
        }

        if(error){
            removeFieldsForm(type.item, (data[type.main].length-1), false)
            addFieldsForm(type.item, false)
            toast.error(message, {position: toast.POSITION.TOP_RIGHT})
            return false
        }
    }

    const onBlurInput = (event, type) => {
        event.preventDefault()
        
        let data = getValues()
        const { value } = event.target
        let message = "", error = false, listado = []
        
        if(type==="iEmail"){
            let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //eslint-disable-line
            const isValidEmail = regex.test(value)
            if(!isValidEmail){
                error = true
                message = `El formato del teléfono ${value} es inválido`
                event.target.value=""
            }else{
                listado = formatArrayEmail(data[type]).filter(item => item===value)
                if(listado.length>1){
                    event.target.value=""
                    error = true
                    message = `El e-mail ${value} lo ingreso anteriormente`
                }   
            }       
        }else if(type==="iTelephone"){
            let regex=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g; //eslint-disable-line
            const isValid = regex.test(value)
            if(!isValid){
                error = true
                message = `El formato del teléfono ${value} es inválido`
                event.target.value=""
            }else{
                listado = formatArrayTelephone(data[type]).filter(item => item===value)
                if(listado.length>1){
                    event.target.value=""
                    error = true
                    message = `El teléfono ${value} lo ingreso anteriormente`
                }
            }     
        }

        if(error){
            toast.error(message, {position: toast.POSITION.TOP_RIGHT})
            return false
        }        
    }
    

    return {
        vLocals,
        vCategories,
        addFieldsForm,
        handleSubmit,
        onSubmit,
        register,
        control,
        errors,
        removeFieldsForm,
        vTelephone,
        vEmail,
        loadingForm,
        fileNameLogo,
        setFileNameLogo,
        fileNameCover,
        setFileNameCover,
        fileNameCoverMobile,
        setFileNameCoverMobile,
        onChangeSelect,
        onBlurInput
    }
}