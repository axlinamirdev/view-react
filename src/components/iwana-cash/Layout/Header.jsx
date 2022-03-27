import logo_mobile from "../../../assets/images/iwana-cash/logo-mobile.png";
import menu_burger from "../../../assets/images/iwana-cash/menu-burger.svg";
import image_logotipo_brand from "../../../assets/images/iwana-cash/logotipo-brand.png"
import MediaQuery from 'react-responsive'

const Header = () => {

	return (
		<div className="row">
			<div className="col-12">
				<header className="header">
					<MediaQuery maxWidth={767}>
						<div className="header-logo">
							<img src={logo_mobile} alt="IWANA CASH" />
						</div>
					</MediaQuery>
					<MediaQuery minWidth={768}>
						<div className="header-logo">
							<img src={image_logotipo_brand} alt="IWANA CASH" />
						</div>
					</MediaQuery>
					<div className="header-register">
						<button type="button" class="btn btn-outline-register">¡Registrate Hoy!</button>
					</div>
					<div className="header-menu">
						<img src={menu_burger} alt="Menu" />
					</div>
					<div className="header-menu-btn">
						<p className="text-buy">Comprar</p>
						<div className="menu-container">
							<p className="menu-item">Hola Gricel</p>
							<ul className="menu-options">
								<li className="menu-options__li"><a href="!#">Mi Cuenta</a></li>
								<li className="menu-options__li"><a href="!#">Tiendas Favoritas</a></li>
								<li className="menu-options__li"><a href="!#">Mi Cashback</a></li>
								<li className="menu-options__li"><a href="!#">Retira tu Dinero</a></li>
								<li className="menu-options__li"><a href="!#">Editar Cuenta</a></li>
								<li className="menu-options__li"><a href="!#">Ayuda</a></li>
								<li>
									<button type="button" className="btn btn-session">Cerrar Sesión</button>
								</li>
							</ul>

						</div>
					</div>
				</header>
			</div>
		</div>
	)
}

export default Header