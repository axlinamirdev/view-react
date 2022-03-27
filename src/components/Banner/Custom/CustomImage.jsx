import React, { useState, useEffect } from "react"
//import defaultPhoto from "../../../assets/images/camara-fotografica.svg"


const CustomImage = ({ item, index, closeModalPreview, banner, typeImage, register, measures, onChangeFile, nameImg, status }) => {

    const [ file, setFile ] = useState(item.value)
    const [fileName, setFileName] = useState("")

   useEffect(() => {
        setFile(item.photo)
        
        if(typeof item.photo!=="undefined" && !item.photo.includes("camara-fotografica")){
            const urlSplit = item.photo.split("/")
            setFileName(urlSplit[urlSplit.length-1])
        }else{
            setFileName("Cargar imagen")
        }
        return () => URL.revokeObjectURL(file)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item.photo, status])

    

    return (
        <div className="picture__container mt-3">
            <div className="picture-image">
                <div className={`${typeof file!=="undefined" && typeof file==="string" && file.includes("camara-fotografica") ? "form-default" : "form-banner"}`}>
                    <img src={file} alt="Logo Default"  />
                </div>
                <p className="picture__preview" onClick={()=>closeModalPreview(typeImage, file, index, banner)}>Previsualizar</p>
            </div>
            <div className="picture__file-width">
                <div className="custom-file">
                    <input
                        type="hidden"
                        id={`${nameImg?.id}.value`}
                        name={`${nameImg?.name}.value`}
                        ref={register}
                        defaultValue={file}
                    />
                     <input
                        type="hidden"
                        id={`${nameImg?.id}.name`}
                        name={`${nameImg?.name}.name`}
                        ref={register}
                        defaultValue={fileName}
                   />
                    <input 
                        type="file" 
                        className="custom-file-input" 
                        placeholder="Cargar imagen"
                        id={`${nameImg?.id}.photo`}
                        name={`${nameImg?.name}.photo`}
                        onChange={(e) => onChangeFile(e, setFile, setFileName, typeImage, measures, banner)}
                        ref={register}
                        disabled={status}
                        accept="image/*"
                    />
                    <label className="custom-file-label" htmlFor={`${nameImg?.id}.photo`}>{fileName}</label>
                   
                </div>
                <p id="file_logo-help" className="form-text__file text-muted">
                * Imagen no debe de pesar más de 120 KB
                </p>
                
            </div>
        </div>
    )
}

export default CustomImage