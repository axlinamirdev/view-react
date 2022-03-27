import CustomImage from "./Custom/CustomImage"

import { useBannerReplace } from "../../hooks/Banner/useBannerReplace"
import { useImage } from "../../hooks/useImage"

const FormReplaceImage = ({ index, banner, closeModalPreview, toast }) => {

    const { 
        handleSubmit,
        onSubmit,
        register,
        errors,
        changeScheduled,
        loading
    } = useBannerReplace(toast)

    const { onChangeFile } = useImage(toast) 

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
             <div className="row">
                <div className="col-12 mt-5">
                    <p className="form__label">¿Quieres programar el banner?</p>
                    <section className="banner-scheduled">
                        <div className="banner-scheduled__option">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id={`is_scheduled_si_${index}`} 
                                name="is_scheduled" 
                                value={true}
                                onChange={(event) => changeScheduled(event, index, banner)}
                                ref={register}
                                defaultChecked={banner?.is_scheduled===true ? true : false}
                            />
                            <label className="form-check-label" htmlFor={`is_scheduled_si_${index}`} >Si</label>
                        </div>
                        <div className="banner-scheduled__option">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id={`is_scheduled_no_${index}`} 
                                name="is_scheduled"
                                value={false}
                                onChange={(event) => changeScheduled(event, index, banner)}
                                ref={register}
                                defaultChecked={banner?.is_scheduled===false ? true : false}
                            />
                            <label className="form-check-label" htmlFor={`is_scheduled_no_${index}`} >No</label>
                        </div>
                    </section>
                </div>
            </div>
            {
                banner.is_scheduled && (
                    <div className="row">
                        <div className="col-12">
                            <div className="card pb-4">
                                <div className="card-body">
                                    <p className="form__label">Programación</p>
                                    <label htmlFor="description" className="form__label">Selecciona fecha</label>
                                    <section className="banner-scheduled flex-column flex-md-row">
                                        <div >
                                            <div className="banner-scheduled__item mt-md-0">
                                                <label htmlFor="start_date" className="form-label_scheduled">Inicio</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control" 
                                                    id={`start_date_${index}`} 
                                                    name={`start_date`} 
                                                    ref={register({required: {value: true, message: 'Requerido'}})}
                                                    defaultValue={banner?.start_date}
                                                />
                                            </div>
                                            {errors?.start_date && (
                                                <p className="text-danger ml-6">
                                                    {errors?.start_date?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <div className="banner-scheduled__item mt-4 mt-md-0">
                                                <label htmlFor="end_date" className="form-label_scheduled">Termino</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control" 
                                                    id={`end_date_${index}`} 
                                                    name={`end_date`} 
                                                    ref={register({required: {value: true, message: 'Requerido'}})}
                                                    defaultValue={banner?.end_date}
                                                />
                                            </div>
                                            {errors?.end_date && (
                                                <span className="text-danger ml-6">
                                                    {errors?.end_date?.message}
                                                </span>
                                            )}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <p className="form__label">Banner de reemplazo al din de vigencia</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card pb-4 mt-0">
                                <div className="card-body">
                                    <label htmlFor="description" className="form__label">{`Desktop (Tamaño ${banner.measures?.desktop?.title})`}</label>
                                    <CustomImage 
                                        item={banner?.ic_desktop_scheduled}
                                        index={index}
                                        closeModalPreview={closeModalPreview}
                                        banner={banner} 
                                        typeImage="ic_desktop_scheduled"
                                        register={register}
                                        measures={banner.measures?.desktop}
                                        toast={toast}
                                        onChangeFile={onChangeFile} 
                                        indexImg={index+2}
                                        nameImg={{id: "picture3", name: `pictures[0]`}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card pb-4 mt-0">
                                <div className="card-body">
                                    <label htmlFor="description" className="form__label">{`Mobile (Tamaño ${banner.measures?.mobile?.title})`}</label>
                                    <CustomImage 
                                        item={banner?.ic_mobile_scheduled}
                                        index={index}
                                        closeModalPreview={closeModalPreview}
                                        banner={banner} 
                                        typeImage="ic_mobile_scheduled"
                                        register={register}
                                        measures={banner.measures?.mobile}
                                        toast={toast}
                                        onChangeFile={onChangeFile} 
                                        nameImg={{id: "picture4", name: `pictures[1]`}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-right mt-4">
                            <button className="btn btn-orange btn-edit__banner" disabled={loading}>
                                { loading ? "Procesando..." : "Guardar Cambios" }
                            </button>
                        </div>
                    </div>
                )
            }     
            
            
        </form>
    )
}

export default FormReplaceImage