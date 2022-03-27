import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingTable from "../Custom/Spinner/LoadingTable"
import RowPage from "./RowPage"

const TablePageMoreVisited = ({ listPageMore, hasMorePage, fetchMoreDataPage }) => {

    return (
        <div className="card">
            <div className="card-body p-0">
                <h1 className="card__title ml-3 mt-4">Páginas más visitadas</h1>
                <InfiniteScroll
                    dataLength={listPageMore.length}
                    next={fetchMoreDataPage}
                    hasMore={hasMorePage}
                    loader={hasMorePage && <LoadingTable />}
                >        
                    <table className="table" id="tbMorePages">
                        <thead>
                            <tr>
                            <th scope="col">Página más visitada</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listPageMore.length>0 && (listPageMore.map((item, key) => 
                                    <RowPage
                                        key={key}
                                        {...item}
                                    />
                                ) )
                            }   
                            { (!hasMorePage && listPageMore.length===0) && (
                                <tr><td colSpan={3}>No hay información disponible</td></tr>
                            )}                     
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default TablePageMoreVisited