import { Controller } from "react-hook-form"
import { FaPlus, FaMinus } from 'react-icons/fa'

const SelectArray = ({ control, list, nameInput, removeFieldsForm, addFieldsForm, type, status, onChangeSelect }) => (
    <>
        {
            nameInput.length>0 &&
            nameInput.map((inputSelect, index) => 
                <div key={inputSelect.id} className="d-flex mt-4">
                        <Controller
                            render={(props) => (
                                <select 
                                    id={`${type.main}[${index}].${type.item}`}
                                    defaultValue={inputSelect[type.item]}
                                    className="form-control"
                                    onChange={(value)=>{
                                        props.onChange(value);
                                        onChangeSelect(value, type)
                                    }}
                                    disabled={status}
                                >
                                    <option>Seleccione...</option>
                                    {
                                        list.length>0 && 
                                        list.map((item, key) => <option key={key} value={item.value}>{item.label}</option>)
                                    }
                                </select>
                            )}
                            control={control}
                            name={`${type.main}[${index}].${type.item}`}
                                                   
                        />

                    <div className="d-flex">
                        {index===nameInput.length-1 &&
                            <button 
                                type="button" 
                                className="btn btn-orange ml-2 mr-2 btn-circle-danger"
                                onClick={()=>addFieldsForm(type.item, status)}
                            ><FaPlus /></button>
                        }
                        {nameInput.length>1 && 
                            <button 
                                type="button" 
                                className="btn btn-danger ml-2 btn-circle-delete "
                                onClick={()=>removeFieldsForm(type.item, index, status)}
                            ><FaMinus /> </button>
                        }
                    </div>                            
                </div>                    
            )
        }
    </>
)

export default SelectArray