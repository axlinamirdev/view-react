import zapato from "../../../assets/images/iwana-cash/zapato.png" 
import icon_featured from "../../../assets/images/iwana-cash/featured.png" 
import icon_dafiti from "../../../assets/images/iwana-cash/brand-featured/dafiti.png" 

const ProductOffer = () => {

	return (
		<div className="offers-item">
			<div className="offers-price">
				<div className="offers__item-price">
					<img src={icon_featured} alt="Price" />
					<div className="offers_price-container">
						<p className="featured_price-span">20%</p>
						<p className="featured_price-h4">Cashback</p>
					</div>
				</div>
			</div>
			<div>
				<div className="offers-product">
					<img src={zapato} alt="Zapatos" />
				</div>
				<div className="offers-logo">
					<img src={icon_dafiti} alt="Dafity" className="featured__item-imagen" />
				</div>
				<p className="offers_porcentage">50% descuento en tienda</p>
			</div>
			<div className="offers-footer">
				<p className="offers-footer__title">Sandalia Mujer CrossGirl</p>
				<p className="offers-footer__subtitle">VANS</p>
				<div className="offers_buy">
					<p className="offers_buy__price">$31.495</p>
					<button type="button" className="btn btn-featured btn-sm">COMPRAR </button>
				</div>
				<p className="offers-url">www.dafiti.cl</p>
				<p className="offers-date-valid">Válido hasta 03-12-2023 / 00:00</p>
			</div>
			
		</div>
	)
}

export default ProductOffer