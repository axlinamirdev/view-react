import { useState } from "react"

const listOptions = [
	"Orden alfabético", "Mayor a menos cashback", "Menor a mayor cashback"
];

const CatalogyOrder = ({ closeFunction }) => {

	const [ active, setActive ] = useState([])

	const changeCheck = (event) => {

		let listado = active
		const existe = listado.find(item => item===event.target.value)

		if(existe){
			listado = listado.filter(item => item!==event.target.value)
		}else{
			listado = [...listado, event.target.value]
		}
		setActive(listado)
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="catalogy-header">
						<p className="catalogy-header__title" onClick={()=>closeFunction()}>Filtrar por</p>
					</div>
					<div className="catalogy-body-order">
						{
							listOptions.length>0 && 
							listOptions.map((item,key) => 
								<div className="item-filter w-100">
									<input type="checkbox" 
										name={`filter${key}`} 
										id={`filter${key}`}  
										value={item} 
										onChange={(event)=>changeCheck(event)}
										className="form-control filter-checkbox" 
									/>
									<div className="check-label w-100">
										<label htmFor={`filter${key}`}>{item}</label>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="catalogy-footer">
					<button type="button" className="btn btn-catalogy">APLICAR 
						{ active.length>0 && <span>({active.length} filtros aplicados)</span>}
					</button>
				</div>
			</div>
		</div>
	)
}

export default CatalogyOrder