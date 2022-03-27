const PanelOptions = ({ register, listAirbags, setValue }) => {

    const changeAirbags = (event) => {
        setValue("airbags", event.target.value>0 ? true : false)        
    }


    return (
        <>
            <div className="row modal-car__title">
                <div className="col car__title--col">
                    <p>Características especificas</p>
                </div>
            </div>
            <div className="row mt-4 mb-5">
                <div className="col">
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="airbags" name="airbags" ref={register} />
                        <label className="form-check-label" htmlFor="airbags">Airbags</label>
                        <select 
                            className="form-select" 
                            id="amount_airbags"
                            name="amount_airbags"
                            onChange={(event) => changeAirbags(event)}
                            ref={register}
                        >
                            {
                                listAirbags.length>0 && 
                                listAirbags.map((item, key) => <option key={key} value={item.title}>{item.title}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="air_conditioner" name="air_conditioner" ref={register} />
                        <label className="form-check-label" htmlFor="air_conditioner">Aire acondicionado</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="alarm" name="alarm" ref={register} />
                        <label className="form-check-label" htmlFor="alarm">Alarma</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="glassswing" name="glassswing" ref={register} />
                        <label className="form-check-label" htmlFor="glassswing">Ala de vidrio</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="central_lock" name="central_lock" ref={register} />
                        <label className="form-check-label" htmlFor="central_lock">Cierre centralizado</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="steering_wheel_controls" name="steering_wheel_controls" ref={register} />
                        <label className="form-check-label" htmlFor="steering_wheel_controls">Controles del volante</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="mobile_connectivity" name="mobile_connectivity" ref={register} />
                        <label className="form-check-label" htmlFor="mobile_connectivity">Conectividad móvil</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="electric_mirrors" name="electric_mirrors" ref={register} />
                        <label className="form-check-label" htmlFor="electric_mirrors">Espejos eléctricos</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="tires" name="tires" ref={register} />
                        <label className="form-check-label" htmlFor="tires">Llantas</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="digital_radio" name="digital_radio" ref={register} />
                        <label className="form-check-label" htmlFor="digital_radio">Radio digital</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="sunroof" name="sunroof" ref={register} />
                        <label className="form-check-label" htmlFor="sunroof">Techo corredizo</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="adjustable_steering_wheel" name="adjustable_steering_wheel" ref={register} />
                        <label className="form-check-label" htmlFor="adjustable_steering_wheel">Volante ajustable</label>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PanelOptions