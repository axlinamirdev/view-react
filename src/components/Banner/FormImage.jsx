import CustomImage from "./Custom/CustomImage"
import { useImage } from "../../hooks/useImage"
import { useDisabledForm } from "../../hooks/Banner/useDisabledForm"
import icon_save from '../../assets/images/save-white.png'
import icon_delete from '../../assets/images/delete-white.png'
import { Spinner } from "react-bootstrap"

const FormImage = ({ item, index, closeModalPreview, banner, typeImage, measures, toast, nameImg, status }) => {

    
    const { onChangeFile, handleSubmit, register, onSubmit, loading } = useImage(toast, typeImage)  
    const { changeFormStatus }   = useDisabledForm()

    return (
        <form  encType="multipart/form-data">
            <CustomImage
                item={item} 
                index={index} 
                closeModalPreview={closeModalPreview} 
                banner={banner} 
                typeImage={typeImage}
                register={register}
                measures={measures}
                toast={toast}
                onChangeFile={onChangeFile}
                nameImg={nameImg}
                status={status}
            />
            <div className="text-right mt-0">
                {
                    status ? (
                        <button 
                            type="button" 
                            className="btn btn-orange btn-edit__banner"
                            onClick={()=>changeFormStatus(banner.id, typeImage, false)}
                        >Editar</button>
                    ) : (
                        <>
                            <button 
                                type="button" 
                                className="btn btn-orange mr-3 btn-wid" 
                                onClick={handleSubmit(data=>onSubmit(data))}
                                >
                                    {loading ? (
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    ) :  <img src={icon_save} alt="Editar"  /> 
                                    } Guardar
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-secondary btn-wid" 
                                onClick={()=>changeFormStatus(banner.id, typeImage, true)}
                            >
                                    <img src={icon_delete} alt="Cancelar" /> Cancelar
                            </button>
                        </>
                    )
                }
                
            </div>
        </form>
    )
}

export default FormImage