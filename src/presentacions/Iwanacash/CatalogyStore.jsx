import { useState } from "react"
import Layout from "../../components/iwana-cash/Layout/Layout"
import ProductOffers from "../../components/iwana-cash/Home/ProductOffers"
import CatalogyFilter from "../../components/iwana-cash/catalogy/CatalogyFilter"
import CatalogyOrder from "../../components/iwana-cash/catalogy/CatalogyOrder"

const listOptions1 = [ "Viajes", "Infantil", "Licores", "Moda y accesorios", "Grandes tiendas", "Mascotas" ]
const listOptions2 = [ "Pymes y emprendedores", "Electrónica y computación", "Games", "Casa y decoración", "Hoteles", "Deportes" ]
const listOptions3 = [ "Deportes", "Asia", "Arriendo de autos", "Gastronomía", "Gastronomía", "Software" ]
const listOptions4 = [ "Vinos", "Juegos", "Servicios web", "Libros", "Regalos", "Movilidad y transporte" ]
const listOptions5 = [  "Bebidas, jugos y aguas", "Línea blanca", "Zapatos y zapatillas", "Ferreterías" ]


const CatalogyStore = () => {

	const [ options, setOptiones ] = useState({
		filter: false,
		order: false
	})

	const changeFunction = (type) => {
		console.log("type", type)
		if(type==="filter"){
			setOptiones({
				filter: true,
				order: false
			})
		}else{
			setOptiones({
				filter: false,
				order: true
			})
		}
	}

	const closeFunction = () => {
		setOptiones({
			filter: false,
			order: false
		})
	}

	return (
		<>
		{options?.filter===true && <CatalogyFilter closeFunction={closeFunction} />}
		{options?.order===true && <CatalogyOrder closeFunction={closeFunction} />}
		
		{options?.filter===false && options?.order===false && (
			<Layout>
			<div className="row">
				<div className="col-12 col-main">
					<p className="title-h1">¿Dónde comprarás hoy?</p>
					<div className="group-form">
						<input 
							type="text" 
							className="form-control form-input" 
							name="search" 
							id="search" 
							placeholder="Encuentra aquí tu tienda"
						/>
						<span></span>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<section className="catalogy-options">
						<div className="catalogy-item">
							<p className="catalogy-item__title icon-filter" onClick={()=>changeFunction("filter")}>Filtrar</p>
						</div>
						<div className="catalogy-item">
							<p className="catalogy-item__title icon-order" onClick={()=>changeFunction("order")}>Ordenar</p>
						</div>
					</section>
				</div>
			</div>

			<div className="row row-dsk-catalogy">
				<div className="col-12">
					<div className="container">
						<section className="catalogy-dsk">
							<div className="catalogy-dsk-item">
								<p className="catalogy-dsk-item__title">Filtrar Categorias</p>
							</div>
							<div>
								<div className="catalogy-dsk-item">
									<p className="catalogy-dsk-item__title">Ordenar por</p>
								</div>
								<ul className="catalogy__menu-options">
									<li className="catalogy-options__li">orden alfabético</li>
									<li className="catalogy-options__li">mayor a menor cashback</li>
									<li className="catalogy-options__li">menor a mayor cashback</li>
								</ul>
							</div>
						</section>
					</div>
				</div>
				<div className="col-12">
					<div className="container">
						<section className="catalogy-dsk__options bg-white">
							<div className="catalogy-dsk__options-item">
								{
									listOptions1.length>0 && 
									listOptions1.map((item,key) => 
										<div className="item-filter">
											<input type="checkbox" 
												name={`filter${key}`} 
												id={`filter${key}`}  
												value={item} 
												className="form-control filter-checkbox" 
											/>
											<div className="check-label">
												<label htmFor={`filter${key}`}>{item}</label>
											</div>
										</div>
									)
								}
							</div>
							<div className="catalogy-dsk__options-item">
								{
									listOptions2.length>0 && 
									listOptions2.map((item,key) => 
										<div className="item-filter">
											<input type="checkbox" 
												name={`filter${key}`} 
												id={`filter${key}`}  
												value={item} 
												className="form-control filter-checkbox" 
											/>
											<div className="check-label">
												<label htmFor={`filter${key}`}>{item}</label>
											</div>
										</div>
									)
								}
							</div>
							<div className="catalogy-dsk__options-item">
								{
									listOptions3.length>0 && 
									listOptions3.map((item,key) => 
										<div className="item-filter">
											<input type="checkbox" 
												name={`filter${key}`} 
												id={`filter${key}`}  
												value={item} 
												className="form-control filter-checkbox" 
											/>
											<div className="check-label">
												<label htmFor={`filter${key}`}>{item}</label>
											</div>
										</div>
									)
								}
							</div>
							<div className="catalogy-dsk__options-item">
								{
									listOptions4.length>0 && 
									listOptions4.map((item,key) => 
										<div className="item-filter">
											<input type="checkbox" 
												name={`filter${key}`} 
												id={`filter${key}`}  
												value={item} 
												className="form-control filter-checkbox" 
											/>
											<div className="check-label">
												<label htmFor={`filter${key}`}>{item}</label>
											</div>
										</div>
									)
								}
							</div>
							<div className="catalogy-dsk__options-item">
								{
									listOptions5.length>0 && 
									listOptions5.map((item,key) => 
										<div className="item-filter">
											<input type="checkbox" 
												name={`filter${key}`} 
												id={`filter${key}`}  
												value={item} 
												className="form-control filter-checkbox" 
											/>
											<div className="check-label">
												<label htmFor={`filter${key}`}>{item}</label>
											</div>
										</div>
									)
								}
							</div>
						</section>
					</div>
				</div>
			</div>


			<div className="row">
				<div className="col-12 mb-5">
					<div className="container">
						<p className="offers-h3 text-center">Listado Tiendas Asociadas</p>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
						<section className="offers-featured__container">
							<ProductOffers item={[1,2,3,4, 5, 6, 7]} />
						</section>
					</div>
				</div>
			</div>
			</Layout>
		)}
		</>
	)
}

export default CatalogyStore
