import RowData from "./RowData"
import InfiniteScroll from 'react-infinite-scroll-component'

const TableData = ({ listLeads, handleMoreInfoClient, fetchMoreData, hasMore }) => {
    return (
            <InfiniteScroll
                dataLength={listLeads.length}
                next={()=>fetchMoreData()}
                hasMore={hasMore}
                loader={hasMore && <h4>Cargando...</h4>}
            >
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Tienda/Concesionario</th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Mi ruta</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Año</th>
                        <th scope="col">Información del Cliente</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { listLeads.length>0 ? listLeads.map((item, key) => 
                            <RowData 
                                key={key}
                                {...item}
                                handleMoreInfoClient={handleMoreInfoClient}
                            />
                        ) : <tr><td colSpan={9}>No hay información disponible</td></tr> }
                    </tbody>
                </table>
            </InfiniteScroll>
           
    )
}


export default TableData