import { useState, useEffect  } from "react"
import defaultPhoto from "../../../assets/images/camara-fotografica.svg"


const PictureLoad = ({ pictureDefault, name, register, fileName, setFileName, status, measures, errors, toast }) => {
    
    const [ file, setFile ] = useState()

    const handleFile = (event, measures) => {
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

                let measuresNew = measures.substr(0,measures.length-2).trim().split("x")
                let nameFile = "Cargar imagen"
                let picFile = defaultPhoto
                if(typeof pictureDefault!=="undefined" && !pictureDefault.includes("camara-fotografica")){
                    const urlSplit = pictureDefault.split("/")
                    nameFile = urlSplit[urlSplit.length-1]
                    picFile=pictureDefault
                }

                if(width>Number(measuresNew[0].trim())){
                    toast.error(`El ancho debe ser menor a ${measuresNew[0].trim()} px`, {position: toast.POSITION.TOP_RIGHT})
                    setFileName(nameFile)
                    setFile(picFile)
                    e.target.value=null
                    return false
                }

                if(height>Number(measuresNew[1].trim())){
                    toast.error(`El alto debe ser menor a ${measuresNew[1].trim()} px`, {position: toast.POSITION.TOP_RIGHT})
                    setFileName(nameFile)
                    setFile(picFile)
                    e.target.value=null
                    return false
                }

                setFileName(event.target.files[0].name)
                setFile(URL.createObjectURL(event.target.files[0]))
                return true;
            };
        }        
    }

    useEffect(() => {
        
        setFile(pictureDefault)
        if(typeof pictureDefault!=="undefined" && !pictureDefault.includes("camara-fotografica")){
            const urlSplit = pictureDefault.split("/")
            setFileName(urlSplit[urlSplit.length-1])
        }else{
            setFileName("Cargar imagen")
        }
		return () => URL.revokeObjectURL(file)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pictureDefault, status])
   
    return (
        <>
            <div className="picture__container">
                <div className={`${typeof file!=="undefined" && typeof file==="string" && file.includes("camara-fotografica") ? "form-default" : "form-picture"}`}>
                    <img src={file}  alt="Logo Default" />
                </div>
                <div className="w-100">
                    <div className="custom-file">
                        <input 
                            type="file" 
                            className="custom-file-input" 
                            placeholder="Cargar imagen"
                            id={name}
                            name={name}
                            onChange={(e) => handleFile(e, measures)}
                            ref={register({required: {value: true, message: 'Requerido'}})}
                            disabled={status}
                        />
                        
                        <label className="custom-file-label" htmlFor={name}>{fileName}</label>
                    </div>
                    <small id="file_logo-help" className="form-text text-muted">
                    * La imagen debe pesar menos de 120 KB
                    </small>
                </div>
            </div>
            {errors[name] && (
                <span className="text-danger">
                    {errors[name].message}
                </span>
            )}
        </>
    )
}

export default PictureLoad
