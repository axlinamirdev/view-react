import { useEffect, useState } from "react"
import { Controller } from "react-hook-form"
import AutoNumeric from "autonumeric"


const PanelMain = ({ register, errors, categories, control, typeTransmission, typeFuel }) => {

    const [ listPrice, setListPrice ] = useState(0)
    const [ price, setPrice ] = useState(0)

    useEffect(() => {
		setListPrice(new AutoNumeric('#list_price', {
		    allowDecimalPadding: false,
		    decimalCharacter: ",",
		    digitGroupSeparator: ".",
            integerPos: true
		}))
        setPrice(new AutoNumeric('#price', {
		    allowDecimalPadding: false,
		    decimalCharacter: ",",
		    digitGroupSeparator: ".",
            integerPos: true
		}))
	}, [])

    return (
        <>
             <div className="row mt-4">
                <div className="col">
                    <label htmlFor="brand" className="form__label">Marca <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
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
                <div className="col">
                    <label htmlFor="model" className="form__label">Modelo <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="model"
                        name="model"
                        ref={register({required: {value: true, message: 'Requerido'}})}
                    />
                    {errors.model && (
                        <span className="text-danger">
                            {errors?.model?.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="price" className="form__label">Precio financiamiento <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="$" 
                        id="price"
                        name="price"
                        ref={register({required: {value: true, message: 'Requerido'}})}
                        defaultValue={price}
                    />
                    {errors.price && (
                        <span className="text-danger">
                            {errors?.price?.message}
                        </span>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="list_price" className="form__label">Precio lista <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="$" 
                        id="list_price"
                        name="list_price"
                        ref={register({required: {value: true, message: 'Requerido'}})}
                        defaultValue={listPrice}
                    />
                    {errors.list_price && (
                        <span className="text-danger">
                            {errors?.list_price?.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="category" className="form__label">Categoría <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="category"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="category"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        categories.length>0 && 
                                        categories.map((item, key) => <option key={key} value={item.value}>{item.label}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.category && (
                        <span className="text-danger">
                            {errors?.category?.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="mileage" className="form__label">Kilometraje <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="mileage"
                        name="mileage"
                        ref={register({required: {value: true, message: 'Requerido'}})}
                    />
                    {errors.mileage && (
                        <span className="text-danger">
                            {errors?.mileage?.message}
                        </span>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="transmission" className="form__label">Transmisión <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="transmission"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="transmission"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        typeTransmission.length>0 && 
                                        typeTransmission.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.transmission && (
                        <span className="text-danger">
                            {errors?.transmission?.message}
                        </span>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="fuel" className="form__label">Combustible <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="fuel"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="fuel"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        typeFuel.length>0 && 
                                        typeFuel.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.fuel && (
                        <span className="text-danger">
                            {errors?.fuel?.message}
                        </span>
                    )}
                </div>
            </div>

        </>
    )
}

export default PanelMain