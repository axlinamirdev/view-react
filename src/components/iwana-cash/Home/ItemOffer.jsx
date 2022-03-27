import icon_featured from "../../../assets/images/iwana-cash/featured.png" 
import icon_dafiti from "../../../assets/images/iwana-cash/brand-featured/dafiti.png" 
import zapato from "../../../assets/images/iwana-cash/zapato.png" 

const ItemOffer = () => {

	return (
		<div className="offers-item featured-item">
			<div className="offers-price">
				<div className="offers__item-price featured__item-price">
					<img src={icon_featured} alt="Price" />
					<div className="offers_price-container">
						<p className="featured_price-span">20%</p>
						<p className="featured_price-h4">Cashback</p>
					</div>
				</div>
			</div>
			<div className="featured-logo">
				<img src={icon_dafiti} alt="Dafity" className="featured__item-imagen" />
			</div>
			<p className="featured-footer__title">Dafity</p>
			<div className="offers_buy">
				<button type="button" className="btn btn-featured btn-sm">COMPRAR </button>
			</div>
			
		</div>
	)
}

export default ItemOffer