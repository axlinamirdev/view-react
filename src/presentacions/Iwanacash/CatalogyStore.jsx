import { useState } from "react"
import Layout from "../../components/iwana-cash/Layout/Layout"
import ProductOffers from "../../components/iwana-cash/Home/ProductOffers"
import CatalogyFilter from "../../components/iwana-cash/catalogy/CatalogyFilter"
import CatalogyOrder from "../../components/iwana-cash/catalogy/CatalogyOrder"


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
			<div className="row">
				<div className="col-12 mb-5">
					<p className="offers-h3 text-center">Listado Tiendas Asociadas</p>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
					<section className="offers-featured__container">
						<ProductOffers item={[1,2,3,4]} />
					</section>
				</div>
			</div>
			</Layout>
		)}
		</>
	)
}

export default CatalogyStore
