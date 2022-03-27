import { useBannerUrl } from "../../hooks/Banner/useBannerUrl"
import { useDisabledForm } from "../../hooks/Banner/useDisabledForm"
import icon_save from '../../assets/images/save-white.png'
import icon_delete from '../../assets/images/delete-white.png'
import { Spinner } from "react-bootstrap"

const urlDefault = process.env.REACT_APP_URL

const FormUrlBanner = ({ banner, index, toast, status  }) => {

    const { handleSubmit, onSubmit, register, loading, changeFormFunction } = useBannerUrl(toast)
    const { changeFormStatus }   = useDisabledForm()

    return (
        <div className="row">
            <div className="col-12">
                <div className="card pt-4 pb-0">
                    <div className="card-body">
                        <div className="w-50 mb-5">
                            <label htmlFor={`type_action_banner_${index}`}  className="form__label">Funcionalidad del banner</label>
                            <select className="form-control" 
                                id={`type_action_banner_${index}`} 
                                name="action_type"
                                onChange={(event)=>changeFormFunction(event, index, banner)}
                                ref={register}
                                defaultValue={banner?.action_type}
                                disabled={status}
                            >
                                <option value="N/A">No Aplica</option>
                                <option value="url">Url</option>
                                <option value="soap">Soap</option>
                                <option value="compara">Compara</option>
                                <option value="olx">Olx</option>
                            </select>
                        </div>
                        {
                            banner.action_type==="url" && (
                                <div>
                                    <label htmlFor={`url_banner_${index}`}  className="form__label">Ruta del banner</label>
                                    
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="url_banner_default">{urlDefault}</span>
                                        </div>
                                        <input 
                                            type="text" 
                                            ref={register}
                                            className="form-control" 
                                            placeholder="Agregar Ruta del banner" 
                                            defaultValue={banner.url_banner}
                                            id={`url_banner_${index}`} 
                                            name={`url_banner`} 
                                            readOnly={status}
                                        />
                                    </div>
                                </div>
                            )
                        }
                        
                        <div className="text-right mt-4">
                            {
                                status ? (
                                    <button 
                                        type="button" 
                                        className="btn btn-orange btn-edit__banner"
                                        onClick={()=>changeFormStatus(banner.id, "url_banner", false)}
                                    >Editar</button>
                                ) : (
                                    <>
                                        <button 
                                            type="button" 
                                            className="btn btn-orange mr-3 btn-wid" 
                                            onClick={handleSubmit(data=>onSubmit(data, banner.url_banner))}
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
                                            onClick={()=>changeFormStatus(banner.id, "url_banner", true)}
                                        >
                                                <img src={icon_delete} alt="Cancelar" /> Cancelar
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default FormUrlBanner