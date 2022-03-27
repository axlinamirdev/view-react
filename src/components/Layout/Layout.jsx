import React, { useState, useEffect } from "react"
import {  
	Row,
	Col,
	Navbar,
} from 'react-bootstrap'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import dashboardImg from "../../assets/images/dashboard.svg"
import mail from "../../assets/images/mail.svg"
import menu from "../../assets/images/menu.png"
import mailBlack from "../../assets/images/mail-black.svg"
import menuBlack from "../../assets/images/menu-black.png"
import logo_orange from "../../assets/images/logo-menu-top.png"
import { useSelector } from 'react-redux'

const Layout = ({ children, modulo, typeModulo, itemModulo }) => {
	
	const [ visibleMenu, setVisibleMenu ] = useState(false)
	const [ visibleMenuAdmin, setVisibleMenuAdmin ] = useState("")
	const { nameTypeBanner } = useSelector((state) => state.bannerAdmin)
	const [ nameTypeModulo, setNameTypeModulo ] = useState("")

	const hiddenMenu = () => {
		setVisibleMenuAdmin((visibleMenu && nameTypeModulo==="banner") ? "show" : "")
		setVisibleMenu(!visibleMenu)		
	}

	const showMenu = (event) => {
		event.preventDefault()
		setVisibleMenuAdmin(visibleMenuAdmin => visibleMenuAdmin==="" ? "show" : "")
	}

	useEffect(()=> {
		let visible = ""
		if((nameTypeBanner==="principal" || nameTypeBanner==="busqueda" || nameTypeBanner==="nuevos"
		|| nameTypeBanner==="usados" || nameTypeBanner==="servicios" || nameTypeBanner==="neumaticos"
		|| nameTypeBanner==="auto") && itemModulo==="banner") {
			visible="show"
		}
		setVisibleMenuAdmin(visible)
		setNameTypeModulo(itemModulo)
		 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nameTypeBanner])


	return (
	   <>
	   		<nav id="sidebar" className={`menu-left ${visibleMenu ? 'active' : ''}`}>
	   			<div className="menu-left--image">
   					<Link  to="/">
   						<img src={logo} alt="Logo" className="logo--menu" />
   					</Link>
   				</div>
	            <ul className="list-unstyled components">
	            	<li className={`${modulo==='dashboard' ? 'active' : ''} `}>
	                    <Link to="/dashboard" className="nav-item-menu">
	                        <img src={dashboardImg} alt="Dashboard" className="img-item-menu" />
	                        <span className="nav-text">Dashboard</span>
	                    </Link>
	                </li>
					<li className={`${modulo==='leads' ? 'active' : ''} `}>
	                    <Link to="/leads" className="nav-item-menu">
	                        <img src={dashboardImg} alt="Leads" className="img-item-menu" />
	                        <span className="nav-text">Leads</span>
	                    </Link>
	                </li>
	            	<li className={`${modulo==='tiendas' ? 'active' : ''} `}>
	                    <Link to="/tienda" className="nav-item-menu">
	                        <img src={dashboardImg} alt="Creador Tiendas" className="img-item-menu" />
	                        <span className="nav-text">Creador Tiendas</span>
	                    </Link>
	                </li>
					<li className={`${modulo==='mapa' ? 'active' : ''} `}>
	                    <Link to="/mapa" className="nav-item-menu">
	                        <img src={dashboardImg} alt="Mapa" className="img-item-menu" />
	                        <span className="nav-text">Mapa</span>
	                    </Link>
					</li>
					<li>
	                    <a href="!#" onClick={(event)=>showMenu(event)} className="nav-item-menu">
	                        <img src={dashboardImg} alt="Mapa" className="img-item-menu" />
	                        <p className="nav-text">Administrador publicitario</p>
	                    </a>
						<ul className={`collapse list-unstyled ${visibleMenuAdmin}`} id="homeSubmenu">
							<li className={`${nameTypeBanner==='principal' ? 'active' : ''} `}>
								<Link to="/banner/principal" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Home</span>
								</Link>
							</li>
							<li className={`${nameTypeBanner==='busqueda' ? 'active' : ''} `}>
								<Link to="/banner/busqueda" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Resultados de búsqueda</span>
								</Link>
							</li>
							<li className={`${nameTypeBanner==='auto' ? 'active' : ''} `}>
								<Link to="/banner/auto" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Página de auto</span>
								</Link>
							</li>
							<li className={`${nameTypeBanner==='nuevos' ? 'active' : ''} `}>
								<Link to="/banner/nuevos" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Home nuevos</span>
								</Link>
							</li>
							<li className={`${nameTypeBanner==='usados' ? 'active' : ''} `}>
								<Link to="/banner/usados" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Home usados</span>
								</Link>
							</li>
							<li className={`${nameTypeBanner==='servicios' ? 'active' : ''} `}>
								<Link to="/banner/servicios" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Servicios</span>
								</Link>
							</li>
							<li className={`${nameTypeBanner==='neumaticos' ? 'active' : ''} `}>
								<Link to="/banner/neumaticos" className="nav-item-menu nav-subitem-menu">
									<span className="nav-text-sub">Neumáticos</span>
								</Link>
							</li>
						</ul>
					</li>
					<li className={`${modulo==='blog' ? 'active' : ''} `}>
	                    <Link to="/blog" className="nav-item-menu">
	                        <img src={dashboardImg} alt="Blog" className="img-item-menu" />
	                        <span className="nav-text">Administrar Blog</span>
	                    </Link>
					</li>
	            </ul>
	            {/**<div className="div-copyright text-white text-center">
					<p className="mb-0">© 2021 Movicenter</p>
					<p className="mb-2">{version}</p>
				</div>**/}
	        </nav>

	        <div id="content" className={`container-fluid`}>
	        	<Row>
   					<Col xs={12} className="p-0 menu-right--title-panel">
				    	<Navbar variant="dark" className={`pt-5 pb-3 text-rigth ${typeModulo==="transparent" ? 'navbar--transparent' : 'navbar--white'}`}>
								<img src={typeModulo==="transparent" ? menu : menuBlack} 
									alt="Ocultar/Mostrar menú" 
									id="sidebarCollapse" 
									className={`${visibleMenu ? 'rotate' : ''}`} onClick={()=>hiddenMenu()}
								/>
							<div className="icon-mail">
								<img src={typeModulo==="transparent" ? mail : mailBlack } alt="Ocultar/Mostrar menú" />
							</div>
							<div>
						  		<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<div className="pr-5">
									<img src={logo_orange} alt="Logo" />
								</div>
							</div>
						</Navbar>
				    </Col>
   				</Row>
   				{children}
	        </div>
	   </>
	)
}

export default Layout
