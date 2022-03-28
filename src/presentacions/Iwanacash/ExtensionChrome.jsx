import Layout from "../../components/iwana-cash/Layout/Layout"
import group_extension from "../../assets/images/iwana-cash/group_extension.png" 
import group_extension_dsk from "../../assets/images/iwana-cash/group_extension_dsk.png" 
import icon_google from "../../assets/images/iwana-cash/icon-google.png" 
import img_work_1 from "../../assets/images/iwana-cash/ext-work.png" 
import img_work_dsk_1 from "../../assets/images/iwana-cash/ext-work-dsk.png" 
import img_work_2 from "../../assets/images/iwana-cash/ext-landing.png" 
import img_work_3 from "../../assets/images/iwana-cash/ext-cashback.png" 
import img_work_dsk_3 from "../../assets/images/iwana-cash/ext-cashback-dsk.png"
import img_trazo from "../../assets/images/iwana-cash/trazo.png" 

const ExtensionChrome = () => {

	return (
		<Layout>
			<div className="row">
				<div className="col-12 col-main mb-5">
					<section className="store-extension_detail">
						<div className="store-header">
							<p className="title-h2 title-store mb-0">Nuestra </p>
							<p className="title-h2 title-store">Extensión</p>
							<p className="store-h4 extension-main">Instala nuestra extensión en tu navegador y comienza a ganar dinero en tus compras diarias.</p>
							<div className="clic-button clic-button__extension">
								<img src={icon_google} alt="Icono Google Chrome" />
								<button type="button" className="btn btn-blue btn-extension">instalar extensión</button>
							</div>
						</div>
						<div className="clic-background clic-background__extension">
							<img src={group_extension_dsk} alt="Instalar extensión Google" className="clic-background__image" />
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="extension-detail">
						<p className="store-h4 mt-5 mb-0">Comprando en IWANACASH obtienes retorno de dinero con tus compras diarias.</p>
						<p className="store-h4 mb-0">Te presentamos la nueva extensión de IWANACASH para Chrome.</p>
						<p className="store-h4">Fue diseñada y pensada especialmente para nuestros usuarios, para que puedan acumular cashback en cada compra que hagan en alguna de las tiendas asociadas a IWANACASH.</p>
					</div>
				</div>
			</div>
			<div className="row row-extension">
				<div className="col-12">
					<div className="container extension-panel p-extension">
						<section className="work-main pr-md-5">
							<div className="clic-title ext-clic-title mt-md-0">
								<p>Cómo funciona</p>
							</div>
							<div>
								<p className="store-h4 mt-5 mb-0">La instalación es rápida, sencilla y confiable.</p>
								<p className="extension-h4">La instalación es rápida, sencilla y confiable. En tan solo 1 minuto puedes instalar la extensión para Chrome y así podrás activar el cashback directamente en cada tienda, sin necesidad de pasar por la plataforma iwanacash.com</p>
							</div>
						</section>
						<section className="work-secondary">
							<div className="extension-image">
								<img src={img_work_dsk_1} alt="Cómo funciona" className="w-100" />
							</div>
							
						</section>
					</div>
				</div>
				<div className="col-12">
					<div className="container extension-cashback p-extension">
						<section className="work-main text-md-right pl-md-5">
							<div className="clic-title ext-clic-title mt-4">
								<p>Activa tu cashback</p>
							</div>
							<div>
								<p className="store-h4 text-md-right mt-4 mb-0">Cientos de tiendas disponibles.</p>
								<p className="extension-h4 text-md-right">La instalación es rápida, sencilla y confiable. En tan solo 1 minuto puedes instalar la extensión para Chrome y así podrás activar el cashback directamente en cada tienda, sin necesidad de pasar por la plataforma iwanacash.com</p>
							</div>
						</section>
						<section className="work-secondary">
							<div className="extension-image">
								<img src={img_work_2} alt="Activa tu cashback" className="w-100" />
							</div>
						</section>
					</div>
				</div>
				<div className="col-12 mb-5 pb-md-5">
					<section className="text-center row-extension-money p-extension">
						<div className="clic-title ext-title ext-clic-title">
							<p className="mb-0">Dinero de vuelta</p>
							<p className="pl-md-2 mb-0">en tus compras diarias</p>
						</div>
						<div>
							<p className="extension-h4 pl-5 pr-5">Cada vez que compras online recibirás dinero de vuelta.</p>
						</div>
						<div className="ext-image-money">
							<img src={img_work_dsk_3} alt="Dinero de vuelta en tus compras diarias" className="w-100" />
						</div>
						<div className="clic-button clic-button__ext">
							<img src={icon_google} alt="Icono Google Chrome" />
							<button type="button" className="btn btn-blue btn-extension">instalar extensión</button>
						</div>
					</section>
				</div>
				<div className="col-12">
					<div className="extension-detail mt-5">
						<p className="store-h4 mt-5 text-md-center mb-4">Ahora será mucho más rápido y fácil quedarte con tu cashback en cada compra! Si tienes alguna duda, puedes escribirnos a teayudamos@iwanacash.com.</p>
						<p className="store-h4 text-md-center">Al instalar la extensión, acepta los términos y condiciones adicionales del botón Cashback, que puede encontrar en los Términos & Condiciones al registrarse en IWANACASH o en la sección  "Ayuda IWANACASH".</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ExtensionChrome