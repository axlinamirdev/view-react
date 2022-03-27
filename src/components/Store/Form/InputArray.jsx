import { FaPlus, FaMinus } from 'react-icons/fa'

const InputArray = ({ placeholder, nameInput, register, removeFieldsForm, 
    addFieldsForm, type, status, onBlurInput
}) => {

    return (
        <>
            {
                nameInput.length>0 &&
                nameInput.map((item, index) => 
                    <div key={item.id} className={index===0 ? "row" : "row mt-5"}>
                        <div  className="col">
                            <input
                                type="text" 
                                className="form-control" 
                                placeholder={placeholder}
                                id={`${type.main}[${index}].${type.item1}`}
                                name={`${type.main}[${index}].${type.item1}`}
                                ref={register()}
                                readOnly={status}
                                defaultValue={item[type.item1]}
                                onBlur={(event)=>onBlurInput(event, type.main)}
                            />
                        </div>
                        <div  className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder={placeholder}
                                id={`${type.main}[${index}].${type.item2}`}
                                name={`${type.main}[${index}].${type.item2}`}
                                ref={register}
                                readOnly={status}
                                defaultValue={item[type.item2]}
                                onBlur={(event)=>onBlurInput(event, type.main)}
                            />
                        </div>
                        <div  className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder={placeholder}
                                id={`${type.main}[${index}].${type.item3}`}
                                name={`${type.main}[${index}].${type.item3}`}
                                ref={register}
                                readOnly={status}
                                defaultValue={item[type.item3]}
                                onBlur={(event)=>onBlurInput(event, type.main)}
                            />
                        </div>
                       <div className="col">
                            {index===nameInput.length-1 &&
                                    <button 
                                        type="button" 
                                        className="btn btn-orange mr-2 btn-circle-danger"
                                        onClick={()=>addFieldsForm(type.main, status)}
                                    ><FaPlus /></button>
                                }
                                {nameInput.length>1 && 
                                    <button 
                                        type="button" 
                                        className="btn btn-danger btn-circle-delete "
                                        onClick={()=>removeFieldsForm(type.main, index, status)}
                                    ><FaMinus /> </button>
                                }
                       </div>
                    </div>
                )
            }
        </>
            
    )
}

export default InputArray