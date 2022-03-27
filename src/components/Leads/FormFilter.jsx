import { useState } from "react"
import { Spinner } from "react-bootstrap"
import filter from "../../assets/images/filter.svg"
import DatePicker from "react-datepicker"
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css"

import { getListLeadsFilter } from "../../actions/configAction"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'


const FormFilter = ({ setHasMore,  defaultValues, hideSelect }) => {

    const { handleSubmit, control } = useForm({defaultValues})
    const { concessionaires, services } = useSelector((state) => state.config)
    const dispatch = useDispatch()
    const [ loading, setLoading ]= useState(false)

    const onSubmit =  async (data, e) => {
    	e.preventDefault()
        setLoading(loading=>!loading)
        
        let provider_id = null
        if(!data.provider_id && !hideSelect){
            provider_id = defaultValues.provider_id
        }else{
            provider_id = Number(data.provider_id.value)===0 ? null : Number(data.provider_id.value)
        }

        let category_provider_id = null
        if(!data.category_provider_id && !hideSelect){
            category_provider_id = defaultValues.category_provider_id
        }else{
            category_provider_id= Number(data.category_provider_id.value)===0 ? null : Number(data.category_provider_id.value)
        }

        const body = { ...data, provider_id, category_provider_id }
        
        const response = await dispatch(getListLeadsFilter(body, false))
        setLoading(loading=>!loading)
        setHasMore((response.listLeadsInitial.length>= response.listLeads.length) ? false : true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                { hideSelect && (
                    <>
                        <div className="form-group col-md-3">
                            <Controller
                                control={control}
                                name="provider_id"
                                render={(props) => (
                                    <Select 
                                        options={concessionaires} 
                                        onChange={(e) => props.onChange(e)}
                                        placeholder="Buscar concesionario..."
                                        id="provider_id" 
                                    />
                                )}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <Controller
                                control={control}
                                name="category_provider_id"
                                render={(props) => (
                                    <Select 
                                        options={services} 
                                        onChange={(e) => props.onChange(e)}
                                        placeholder="Servicio..."
                                        id="category_provider_id" 
                                    />
                                )}
                            />
                        </div>
                    </>
                )}
                
                <div className={hideSelect ? "form-group col-md-2 text-left text-md-right" : "form-group col-md-7 text-left text-md-right"}>
                    <label htmlFor="dateStart" className="title_filter">Filtrar por rango de fecha</label>
                </div>
                <div className="form-group col-md-2">
                    <Controller
                        control={control}
                        name="dateStart"
                        render={(props) => (
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select date"
                                onChange={(e) => props.onChange(e)}
                                selected={props.value}
                                className="form-control"
                                id="dateStart"
                                maxDate={new Date()}
                            />
                        )}
                    />
                </div>
                <div className="form-group col-md-2">
                    <Controller
                        control={control}
                        name="dateEnd"
                        render={(props) => (
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select date"
                                onChange={(e) => props.onChange(e)}
                                selected={props.value}
                                className="form-control"
                                id="dateEnd"
                                maxDate={new Date()}
                            />
                        )}
                    />
                </div>
                <div className="form-group col-md-1">
                    <button type="submit" className="btn btn-orange" disabled={loading}>
                        {loading ? (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        ) : <img src={filter} alt="Filtrar" />
                        }
                    </button>
                </div>
            </div>
           
           
            </form>
    )
}

export default FormFilter