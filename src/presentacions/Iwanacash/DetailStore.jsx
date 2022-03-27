import Layout from "../../components/iwana-cash/Layout/Layout"
import banner_mobile from "../../assets/images/iwana-cash/banner-hp-mobile.png"
import banner_dsk from "../../assets/images/iwana-cash/banner-hp-dsk.png"
import hp_dsk from "../../assets/images/iwana-cash/hp-dsk.png"
import saving_intelligent_mobile from "../../assets/images/iwana-cash/ahorro-inteligente-mobile.png"
import ItemOffer from "../../components/iwana-cash/Store/ItemOffer"

const DetailStore = () => {

	return (
		<Layout>
			<div className="row">
				<div className="col-12 col-main">
					<div className="store-image w-100">
						<img src={banner_dsk} alt="Detalle tienda" />
					</div>
					<section className="store-detail">
						<div className="store-header">
							<p className="title-h2 title-store">HP</p>
							<p className="store-h4">Nuestra visión es crear tecnología que mejore la vida de todos, en todas partes: cada persona, cada organización y cada comunidad en todo el mundo.</p>
							<button type="button" className="btn btn-blue btn-store">Comprar</button>
						</div>
						<div className="store-hp__image">
							<img src={hp_dsk} alt="HP" />
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="container">
						<p className="store-agreement__title">Acuerdos para ti</p>
						<p className="store-h4 text-center">Hemos generado los siguientes beneficios para que ganes más dinero</p>
					</div>
					<div className="container">
						<section className="store-agreement__container">
							<div className="store-agreement__item">
								<p className="agreement__item-title">Categorías</p>
								<p className="agreement__item-subtitle">Todas</p>
							</div>
							<div className="store-agreement__item">
								<p className="agreement__item-title">Cashback por categorías</p>
								<p className="agreement__item-subtitle">5% cashback</p>
							</div>
							<div className="store-agreement__item b-none">
								<p className="agreement__item-title">Promedio espera Cashback</p>
								<p className="agreement__item-subtitle">2 meses</p>
							</div>
						</section>
						<div className="store-agreement__terms">
							<p className="agreement__item-title mb-4">Términos y condiciones</p>
							<div>
								<p className="agreement__terms-title">Categorías</p>
								<p className="agreement__terms-subtitle">Ropa, Accesorios celulares, Accesorios de interior y jardín, Celulares, Computadores, Tablets, Discos duros y equipamiento de Audio y Video. Otras categorías generales.</p>
								<p className="agreement__terms-title">Exclusiones</p>
								<p className="agreement__terms-subtitle">No aplica Cashback en productos usados y en las siguientes marcas, Xiaomi, Huawei, Honor, UMIDIGI, Meizu, OnePlus y Lenovo.</p>
								<p className="agreement__terms-title">Términos</p>
								<p className="agreement__terms-subtitle">$40.000 máximo de cashback por item.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="container">
						<p className="store-agreement__title">Nuestras ofertas</p>
						<section className="store-offers__container">
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
							<ItemOffer />
						</section>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="container">
						<section className="saving-container">
							<div className="saving-image">
								<img src={saving_intelligent_mobile} alt="Ahorro inteligente" />
							</div>
							<section className="pl-md-3">
								<p className="saving-text">¡Ya comenzaste tu ruta por el camino del cashback!</p>
								<p className="saving-text">Sigue así y verás volver tu dinero de forma segura y directa a tu bolsillo, porque con IWANACASH solo sumas. Sé inteligente y aprovecha todas las ofertas que hemos preparado para ti.</p>
							</section>
						</section>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default DetailStore
