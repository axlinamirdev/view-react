import icon_featured from "../../../assets/images/iwana-cash/featured.png"

const ItemOffer = () => {

	return (
		<div className="store-offers__item">
			<div className="offers-price">
				<div className="offers__item-price store__price-text">
					<img src={icon_featured} alt="Price" />
					<div className="offers_price-container">
						<p className="featured_price-span">3%</p>
						<p className="featured_price-h4">Cashback</p>
					</div>
				</div>
			</div>
			<p className="store-offers__title">¡Manso Marzo! La mejor tecnología la tienes con hasta 45 off en HP</p>
			<div className="store-offers__footer">
				<p className="store-offers__price">$169.990</p>
				<button type="button" className="btn btn-blue btn-featured btn-sm">Comprar</button>
			</div>
		</div>
	)
}

export default ItemOffer