import image_startup from "../../assets/images/iwana-cash/startup-chile.png"
import image_logotipo_brand from "../../assets/images/iwana-cash/logotipo-brand.png"
import logo_facebook from "../../assets/images/iwana-cash/cta_facebook.png" 
import logo_instagram from "../../assets/images/iwana-cash/cta_instagram.png" 
import logo_linkedin from "../../assets/images/iwana-cash/cta_linkedin.png" 
import logo_whatsapp from "../../assets/images/iwana-cash/cta_whatsapp.png" 
import logo_youtube from "../../assets/images/iwana-cash/cta_youtube.png" 
import phone from "../../assets/images/iwana-cash/iPhone.png" 
import fans1 from "../../assets/images/iwana-cash/fans/martha-comment.png" 
import icon_featured from "../../assets/images/iwana-cash/featured.png" 
import icon_dafiti from "../../assets/images/iwana-cash/brand-featured/dafiti.png" 
import group_extension from "../../assets/images/iwana-cash/group_extension.png" 
import icon_google from "../../assets/images/iwana-cash/icon-google.png" 
import zapato from "../../assets/images/iwana-cash/zapato.png" 

import Header from "../../components/iwana-cash/Layout/Header"

const Home = () => {

	return (
		<div className="container-fluid">
			<Header />
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
				<div className="col-12 col-store">
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
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<p className="clic-title">ofertas de cashback</p>
					<section className="offers">
						<p className="offers-h3">¡Ofertas imperdibles! ¡Vuelve con todo a clases!</p>
						<section className="offers-container">
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
						</section>
					</section>

					<section className="offers">
						<p className="offers-h3">¡Ofertas imperdibles! ¡Vuelve con todo a clases!</p>
						<section className="offers-container">
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
						</section>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12 mb-5">
					<div className="clic-title">
						<p className="mb-0">Gana Dinero</p>
						<p className="mb-0">en sólo 1 click</p>
					</div>
					<p className="clic-subtitle">Instala nuestra extensión para GOOGLE CHROME</p>
					<div className="clic-button">
						<img src={icon_google} alt="Icono Google Chrome" />
						<button type="button" className="btn btn-blue btn-extension">instalar extensión</button>
					</div>
					<div className="clic-background">
						<img src={group_extension} alt="Instalar extensión Google" className="clic-background__image" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 mb-5">
					<p className="featured-title">Tiendas destacadas con cashback</p>
					<p className="featured-h3">Revisa cada alianza que tenemos especialmente para ti</p>
					<section className="card-featured__container">
						<div className="card-featured__item">
							<div className="featured__item-price">
								<img src={icon_featured} alt="Price" />
								<div className="featured_price">
									<p className="featured_price-span">12%</p>
									<p className="featured_price-h4">Cashback</p>
								</div>
							</div>
							<div>
								<div className="featured__item-logo">
									<img src={icon_dafiti} alt="Dafity" className="featured__item-imagen" />
								</div>
								<p className="featured__item-title">Dafity</p>
							</div>
							<div className="featured__item-button">
								<button type="button" className="btn btn-featured btn-sm">COMPRAR </button>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card-fans__header">
						<p className="subtitle-main">¿Que dicen nuestros Iwana Fans?</p>
						<p className="card-fans__subtitle">¡Obtén hasta un 10% de devolución de dinero!</p>
					</div>
					<section className="card-fans__body">
						<div className="card-fans__container">
							<div className="card-fans__image">
								<img src={fans1} alt="Martha Robertson" />
							</div>
							<p className="card-fans__h3">Martha Robertson</p>
							<p className="card-fans__description">
								"Me gusta, es súper cómoda. La experiencia es buena, porque es plata que no tenía considerada, así que “bkn” y puedo sacarlas como un regalo de mi yo del pasado por haber comprado cosas."  
							</p>
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<p className="subtitle-main">¿Tienes una Empresa?</p>
					<p className="company-h3">Únete a Iwana Partners y deja que miles de clientes disfruten de tus productos y servicios.</p>
					<div className="company-mobile">
						<img src={phone} alt="Quiero unirme" />
						<div className="company-container">
							<div className="company-logo">
								<img src={image_logotipo_brand} alt="IWANA CASH" />
							</div>
							<button type="button" className="btn btn-blue">Quiero Unirme</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 footer">
					<section className="footer-image">
						<div className="footer-logo">
							<img src={image_logotipo_brand} alt="IWANA CASH" />
						</div>
						<div className="footer-social_media">
							<div className="social_media icon-facebook">
								<img src={logo_facebook} alt="Facebook" className="social_media__image"  />
							</div>
							<div className="social_media icon-instagram">
								<img src={logo_instagram} alt="Instagram" className="social_media__image"  />
							</div>
							<div className="social_media icon-linkedin">
								<img src={logo_instagram} alt="Linkedin" className="social_media__image"  />
							</div>
							<div className="social_media icon-whatsapp">
								<img src={logo_whatsapp} alt="Whatsapp" className="social_media__image"  />
							</div>
							<div className="social_media icon-youtube">
								<img src={logo_youtube} alt="Youtube" className="social_media__image"  />
							</div>
						</div>
					</section>
					<section className="footer-info">
						<div className="footer-info__company">
							<p className="footer-title">Compañía</p>
							<div className="footer-description">
								<ul className="footer-list footer-list--line">
									<li><a href="!#">Nosotros</a></li>
									<li><a href="!#">Nuestras Reglas</a></li>
									<li><a href="!#">Ayuda IWANACASH</a></li>
								</ul>
								<ul className="footer-list">
									<li><a href="!#">Políticas de Privacidad</a></li>
									<li><a href="!#">Términos y Condiciones</a></li>
								</ul>
							</div>
						</div>
						<div className="footer-info__options">
							<div className="footer-info__platform">
								<p className="footer-title">Plataforma</p>
								<div className="footer-description">
									<ul className="footer-list">
										<li><a href="!#">Mi Cuenta</a></li>
										<li><a href="!#">Ingresar</a></li>
										<li><a href="!#">Tiendas</a></li>
									</ul>
								</div>
							</div>
							<div className="footer-info__platform">
								<p className="footer-title">Complementos</p>
								<div className="footer-description">
									<ul className="footer-list">
										<li className="complement-chrome"><a href="!#">Instalar Extensión</a></li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section className="footer-bottom">
						<div className="footer-logo__startup">
							<img src={image_startup} alt="Startup Chile | CORFO" />
						</div>
						<p className="footer-copyright">©2022 IWANACASH Todos los derechos reservados.</p>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Home