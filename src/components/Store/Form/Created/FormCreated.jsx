import PictureLoad from "../PictureLoad"
import ModalSpinner from "../../../Custom/Modals/ModalSpinner"
import pictureDefault from "../../../../assets/images/camara-fotografica.svg"
import { Link } from "react-router-dom"
import PanelCategoryLocal from "./Custom/PanelCategoryLocal"
import PanelTelephoneEmail from "./Custom/PanelTelephoneEmail"
import { useMainStore } from '../../../../hooks/Store/useMainStore'

const MEASURES_MOBILE = process.env.REACT_APP_MEASURES_MOBILE
const MEASURES_DESKTOP = process.env.REACT_APP_MEASURES_DESKTOP
const MEASURES_ICON = process.env.REACT_APP_MEASURES_ICON

const FormCreated = ({ storeSelected, toast, categories, listLocals }) => {


     const {
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
     } = useMainStore(storeSelected, toast)
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">   
                <div className="row">
                    <div className="col-6">
                        <div className="card pt-5 pb-5">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="description" className="form__label">Tienda <span className="text-danger">*</span></label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nombre"
                                        id="brand"
                                        name="brand"
                                        ref={register({required: {value: true, message: 'Requerido'}})}
                                    />
                                    {errors.brand && (
                                        <span className="text-danger">
                                            {errors?.brand?.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card pt-4 pb-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="icon_logo_file" className="form__label">{`Logo (Tamaño ${MEASURES_ICON}) `}<span className="text-danger">*</span></label>
                                        <PictureLoad
                                            pictureDefault={storeSelected.icon_logo || pictureDefault}
                                            name="icon_logo_file"
                                            register={register}
                                            fileName={fileNameLogo}
                                            setFileName={setFileNameLogo}
                                            status={false}
                                            errors={errors}
                                            measures={MEASURES_ICON}
                                            toast={toast}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-6">
                        <div className="card pt-4 pb-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="front_cover_file" className="form__label">{`Portada de Escritorio (Tamaño ${MEASURES_DESKTOP}) `}<span className="text-danger">*</span></label>
                                        <PictureLoad
                                            pictureDefault={storeSelected.front_cover || pictureDefault}
                                            name="front_cover_file"
                                            register={register}
                                            fileName={fileNameCover}
                                            setFileName={setFileNameCover}
                                            status={false}
                                            errors={errors}
                                            measures={MEASURES_DESKTOP}
                                            toast={toast}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card pt-4 pb-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="front_cover_mobile_file" className="form__label">{`Portada Móvil (Tamaño ${MEASURES_MOBILE}) `}<span className="text-danger">*</span></label>
                                    <PictureLoad
                                        pictureDefault={storeSelected.front_cover_mobile || pictureDefault}
                                        name="front_cover_mobile_file"
                                        register={register}
                                        fileName={fileNameCoverMobile}
                                        setFileName={setFileNameCoverMobile}
                                        status={false}
                                        errors={errors}
                                        measures={MEASURES_MOBILE}
                                        toast={toast}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PanelCategoryLocal
                    toast={toast}
                    control={control}
                    categories={categories}
                    vCategories={vCategories}
                    vLocals={vLocals}
                    listLocals={listLocals}
                    addFieldsForm={addFieldsForm}
                    removeFieldsForm={removeFieldsForm}
                    onChangeSelect={onChangeSelect}
                />
                

                <PanelTelephoneEmail
                    register={register} 
                    vTelephone={vTelephone}
                    addFieldsForm={addFieldsForm}
                    removeFieldsForm={removeFieldsForm}
                    vEmail={vEmail}
                    onBlurInput={onBlurInput}
                />

                <div className="card pt-4 pb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="description" className="form__label">Descripción</label>
                                <textarea 
                                    rows="3" 
                                    cols="3"
                                    className="form-control" 
                                    placeholder="Escribe aquí"
                                    id="description"
                                    name="description"
                                    ref={register}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="row">
                <div className="col-12 col-md-6 text-left mt-5">
                        <Link to="/tienda" type="button" className="btn btn-secondary pl-5 pr-5 pt-2 pb-2">Regresar</Link>
                    </div>
                    <div className="col-12 col-md-6 text-right mt-5">
                        <button type="submit" className="btn btn-orange pl-5 pr-5 pt-2 pb-2">Crear tienda</button>
                    </div>
                </div>
            </form>
            {loadingForm && <ModalSpinner message="Espere un momento, se está procesando la información" /> }
        </>
    )
}

export default FormCreated