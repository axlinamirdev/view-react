import { Spinner } from "react-bootstrap"
//import { Controller } from "react-hook-form"
import { useRangeAnalytics } from "../../hooks/Dashboard/useRangeAnalytics"
import filter from "../../assets/images/filter.svg"
import "react-datepicker/dist/react-datepicker.css"

const PanelFilterRange = () => {

    
    const { handleSubmit,
        onSubmit,
        register,
        loading,
        isCompareDate,
        getCompareDate,
        dataForm,
        changeDateStart,
        changeDateEnd
    } = useRangeAnalytics()
    
    return (
        <div className="card mb-5 mt-0">
            <div className="card-body pb-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col-md-4">
                            <h4 className="title-dashboard">DASHBOARD</h4>
                        </div>
                        
                        <div className="form-group col-md-3 text-left text-md-right">
                            <label htmlFor="startDate" className="title_filter">Filtrar por rango de fecha</label>
                        </div>
                        <div className="form-group col-md-2">
                            <input 
                                type="date" 
                                className="form-control" 
                                id="startDate" 
                                name="startDate"
                                ref={register({required: {value: true, message: 'Requerido'}})}
                                onChange={(event)=>changeDateStart(event)}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <input 
                                type="date" 
                                className="form-control" 
                                id="endDate" 
                                name="endDate"
                                ref={register({required: {value: true, message: 'Requerido'}})}
                                onChange={(event)=>changeDateEnd(event)}
                                
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
                    <div className="form-row">                       
                        <div className="form-group col-md-7 text-left text-md-right">
                            <div className="form-group form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="compareDate" 
                                    name="compareDate" 
                                    ref={register} 
                                    onChange={()=>getCompareDate()}
                                />
                                <label className="form-check-label title_filter" htmlFor="compareDate">Comparar mes anterior</label>
                            </div>
                        </div>
                        {
                            isCompareDate && (
                                <>
                                    <div className="form-group col-md-2">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="startDateLast" 
                                            name="startDateLast"
                                            readOnly
                                            value={dataForm.startDateLast}
                                        />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="endDateLast" 
                                            name="endDateLast"    
                                            readOnly     
                                            value={dataForm.endDateLast}                    
                                        />
                                    </div>
                                </>
                            )
                        }
                    </div>      
                </form>
            </div>
        </div>
    )
}

export default PanelFilterRange