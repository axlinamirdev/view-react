import icon_edit from "../../../assets/images/edit.svg"
import icon_save from '../../../assets/images/save.png'
import icon_delete from '../../../assets/images/delete.png'
import { Spinner } from "react-bootstrap"

const FormButtonOptions = ({ status, disabledPanel, type, handleSubmit, onSubmit, loading, title, children }) => {

    return (
        <form> 
			<div className="card pt-4 pb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-12">
							<div className="label-edit">
								<label htmlFor="telephone" className="form__label mb-0">
                                    {title} <span className="text-danger">*</span>
								</label>
								<div>
                                    {status ? 
                                        <button 
                                            type="button" 
                                            className="btn btn-edit" 
                                            onClick={()=>disabledPanel(type, false)}
                                        >
                                                <img src={icon_edit} alt="Editar" />
                                        </button>
                                        : <>
                                            <button 
                                                type="button" 
                                                className="btn btn-edit" 
                                                onClick={handleSubmit(data => onSubmit(data, type))}
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
                                                    }
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn btn-edit" 
                                                onClick={()=>disabledPanel(type, true)}
                                            >
                                                    <img src={icon_delete} alt="Cancelar" />
                                            </button>
                                        </>
                                    }
                                </div>
							</div>
						</div>
                        <div className="col-12">
                            {children}
                        </div>
					</div>
				</div>
			</div>  
		</form>
    )
}

export default FormButtonOptions