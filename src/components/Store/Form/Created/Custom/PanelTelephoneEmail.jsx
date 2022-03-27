import InputArray from "../../InputArray"

const PanelTelephoneEmail = ({ register, vTelephone, addFieldsForm, removeFieldsForm, vEmail, onBlurInput }) => {

    return (
        <>
            <div className="card pt-4 pb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <label  className="form__label">Teléfono de contacto <span className="text-danger">*</span></label>
                        </div>
                    </div>
                    <InputArray
                        placeholder="+56"
                        register={register}
                        nameInput={vTelephone}
                        addFieldsForm={addFieldsForm}
                        removeFieldsForm={removeFieldsForm}
                        type={{ main: "iTelephone", item1: "telephone1", item2: "telephone2", item3: "telephone3"}}
                        status={false}		
                        onBlurInput={onBlurInput}				
                    />
                </div>
            </div>
            <div className="card pt-4 pb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <label  className="form__label">Correo recepción de leads <span className="text-danger">*</span></label>
                        </div>
                    </div>
                    <InputArray
                        placeholder="tienda@corrreo.cl"
                        register={register}
                        nameInput={vEmail}
                        addFieldsForm={addFieldsForm}
                        removeFieldsForm={removeFieldsForm}
                        type={{ main: "iEmail", item1: "email1", item2: "email2", item3: "email3"}}
                        status={false}
                        onBlurInput={onBlurInput}
                    />
                </div>
            </div>
        </>

    )
}

export default PanelTelephoneEmail