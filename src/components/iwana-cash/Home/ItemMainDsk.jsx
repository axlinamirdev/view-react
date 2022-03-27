import home_photo from "../../../assets/images/iwana-cash/home.png"

const ItemMainDsk = () => {

	return (
		<div className="container col-store">
			<section className="primary-main">
				<h1 className="title-h2">Te devolvemos dinero</h1>
				<div className="col-store mt-5">
					<p className="subtitle-h4"><span>Cada vez que compras online</span> <span>recibirás dinero de vuelta.</span></p>
					<div className="btn-go-store">
						<a href="!#" className="btn btn-blue btn-go__store">Ir a la tienda</a>
					</div>
				</div>
			</section>
			<section className="secondary-main">
				<img src={home_photo} alt="Te devolvemos dinero" />
			</section>
		</div>
	)
}

export default ItemMainDsk