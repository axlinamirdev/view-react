import image_logotipo_brand from "../../../assets/images/iwana-cash/logotipo-brand.png"
import logo_facebook from "../../../assets/images/iwana-cash/cta_facebook.png" 
import logo_instagram from "../../../assets/images/iwana-cash/cta_instagram.png" 
import logo_linkedin from "../../../assets/images/iwana-cash/cta_linkedin.png" 
import logo_whatsapp from "../../../assets/images/iwana-cash/cta_whatsapp.png" 
import logo_youtube from "../../../assets/images/iwana-cash/cta_youtube.png"
import image_startup from "../../../assets/images/iwana-cash/startup-chile.png"

const Footer = () => {

	return (
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
							<ul className="footer-list ml-md-3">
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
			</div>
			<div className="col-12 footer-line">
				<section className="footer-bottom">
					<div className="footer-logo__startup">
						<img src={image_startup} alt="Startup Chile | CORFO" />
					</div>
					<p className="footer-copyright">©2022 IWANACASH Todos los derechos reservados.</p>
				</section>
			</div>
		</div>
	)
}

export default Footer