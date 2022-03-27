import SelectArray from "../../SelectArray"

const PanelCategoryLocal = ({ 
    toast, control, categories, vCategories, vLocals, listLocals, addFieldsForm, removeFieldsForm,
    onChangeSelect
}) => {

    return (
        <div className="row">
                <div className="col-6">
                    <div className="card pt-4 pb-4">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="description" className="form__label">Categoría <span className="text-danger">*</span></label>
                                    <SelectArray                           
                                        control={control}
                                        nameInput={vCategories}
                                        addFieldsForm={addFieldsForm}
                                        removeFieldsForm={removeFieldsForm}
                                        type={{ main: "sCategories", item: "category"}}
                                        status={false}
                                        list={categories}
                                        onChangeSelect={onChangeSelect}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card pt-4 pb-4">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="description" className="form__label">Número Local <span className="text-danger">*</span></label>
                                <SelectArray                           
                                        control={control}
                                        nameInput={vLocals}
                                        addFieldsForm={addFieldsForm}
                                        removeFieldsForm={removeFieldsForm}
                                        type={{ main: "sLocals", item: "local"}}
                                        status={false}
                                        list={listLocals}
                                        onChangeSelect={onChangeSelect}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PanelCategoryLocal