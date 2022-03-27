import { Link } from "react-router-dom"

const InfoMapa = ({ store, localNotAssign }) => {
    
    return (
        <>              
            {
                 store.length>0 ? store.map((item, key) => (
                    <div key={key} className="card" >
                        <div className="card-body pl-5 pr-5"> 
                            <div className="mapa-info">
                                    <div className="mapa-info__imagen">
                                        <img src={item.icon_logo} alt="Logo" />
                                    </div>
                                    <div className="mapa-info__text ml-4">
                                        <p className="mapa-info__text-title">{item.brand}</p>
                                        <p className="mapa-info__text-subtitle">Local N° {item.locals}</p>
                                        <p className="mapa-info__text-subtitle">Categoría {item.categoryName}</p>
                                    </div>
                            </div>
                            <Link 
                                type="button" 
                                className="btn btn-orange mb-2 w-100 mt-4 pt-3 pb-3"
                                to={`/tienda/${item.slug}`}
                            >
                                Editar                        
                            </Link>
                        </div>
                    </div>

                )) : (
                    <div className="card">
                        <div className="card-body pl-5 pr-5"> 
                            <p className="mapa-info__notselected mt-5 mb-5" dangerouslySetInnerHTML={{ 
                                __html: localNotAssign==="" ? 'Local no selecionado' : localNotAssign
                            }} />
                        </div>
                    </div>
                )
            }                  
        </>              
    )
}

export default InfoMapa