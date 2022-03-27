import { Controller } from "react-hook-form"

const PanelDetails = ({ register, errors, listYear, typeOrigin, typeTraction, typeSeatMove, typeBodyWork, typeColor, control }) => {

    return (
        <>
            <div className="row modal-car__title">
                <div className="col car__title--col">
                    <p>Detalles del vehículo</p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="cilindrada" className="form__label">Cilindrada</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="cilindrada"
                        name="cilindrada"
                        ref={register}
                    />
                </div>
                <div className="col">
                    <label htmlFor="year" className="form__label">Año <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="year"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="year"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        listYear.length>0 && 
                                        listYear.map((item, key) => <option key={key} value={item.value}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.year && (
                        <span className="text-danger">
                            {errors?.year?.message}
                        </span>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="version" className="form__label">Versión</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="version"
                        name="version"
                        ref={register}
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="country" className="form__label">Procedencia <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="country"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="country"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        typeOrigin.length>0 && 
                                        typeOrigin.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.country && (
                        <span className="text-danger">
                            {errors?.country?.message}
                        </span>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="traction" className="form__label">Tracción <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="traction"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="traction"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        typeTraction.length>0 && 
                                        typeTraction.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.traction && (
                        <span className="text-danger">
                            {errors?.traction?.message}
                        </span>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="performance" className="form__label">Rendimiento <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="performance"
                        name="performance"
                        ref={register({required: {value: true, message: 'Requerido'}})}
                    />
                    {errors.performance && (
                        <span className="text-danger">
                            {errors?.performance?.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                    <label htmlFor="color" className="form__label">Color</label>
                    <select 
                        className="form-control" 
                        id="color"
                        name="color"
                        ref={register}
                    >
                        <option value="">Seleccione...</option>
                        {
                            typeColor.length>0 && 
                            typeColor.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                        }
                    </select>
                </div>
                <div className="col-4">
                    <label htmlFor="seat_cumshots" className="form__label">Corridas de asientos <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="seat_cumshots"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="seat_cumshots"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        typeSeatMove.length>0 && 
                                        typeSeatMove.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.seat_cumshots && (
                        <span className="text-danger">
                            {errors?.seat_cumshots?.message}
                        </span>
                    )}
                </div>
                <div className="col-4">
                    <label htmlFor="body_work" className="form__label">Carrocería <span className="text-danger">*</span></label>
                    <Controller
                            control={control}
                            name="body_work"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="body_work"
                                    className="form-control"
                                >
                                    <option value="">Seleccione...</option>
                                    {
                                        typeBodyWork.length>0 && 
                                        typeBodyWork.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                                    }
                                </select>
                            }
                    />
                    {errors.body_work && (
                        <span className="text-danger">
                            {errors?.body_work?.message}
                        </span>
                    )}
                </div>
            </div>

        </>
    )
}

export default PanelDetails