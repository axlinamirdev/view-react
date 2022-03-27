import React, { useState, useEffect  } from "react"
import defaultPhoto from "../../../assets/images/camara-fotografica.svg"
import defaultIconSortable from "../../../assets/images/sortable-icon.png"

const ItemPictureTest = ({ register, name, item, onChangeFile, index }) => {

    
    const [ file, setFile ] = useState(item.value)
    const [fileName, setFileName] = useState("")

   useEffect(() => {
        if(item.value !==null && item.value!==""){
            const url = item.photo.length>0 && item.value.includes("blob:") ? URL.createObjectURL(item.photo[0]) : item.value
            setFile(url)
        }else{
            setFile(defaultPhoto)
        }
        setFileName(item.name)
        return () => URL.revokeObjectURL(file)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className="icon-sortable">
                <img src={defaultIconSortable} alt="Icono Sortable"  />
            </div>
            <div className={`ml-2 ${typeof file!=="undefined" && typeof file==="string"  && file.includes("camara-fotografica") ? "form-default" : "form-picture"}`}>
                <img src={file} alt="Logo Default"  />
            </div>
            <div className="w-100">
                <div className="custom-file">
                    <input
                        type="hidden"
                        id={`${name}.value`}
                        name={`${name}.value`}
                        ref={register}
                        defaultValue={file}
                    />
                     <input
                        type="hidden"
                        id={`${name}.name`}
                        name={`${name}.name`}
                        ref={register}
                        defaultValue={fileName}
                    />
                    <input 
                        type="file" 
                        //className="custom-file-input" 
                        placeholder="Cargar imagen"
                        id={`${name}.photo`}
                        name={`${name}.photo`}
                        onChange={(e) => onChangeFile(e, setFile, setFileName, index)}
                        ref={register}
                    />
                    <label className="custom-file-label" htmlFor={`${name}.photo`}>{fileName}</label>
                   
                </div>
                <small id="file_logo-help" className="form-text text-muted">
                * Imagen no debe de pesar más de 120 KB
                </small>
            </div>
        </>
    )
}

export const ItemPicture = React.memo(ItemPictureTest)