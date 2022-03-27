import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingTable from "../Custom/Spinner/LoadingTable"
import RowPage from "./RowPage"


const TableAcquisition = ({ listAcquisition, hasMoreAcquisition, fetchMoreDataAcquistion}) => {

    return (
        <div className="card">
            <div className="card-body p-0">
                <h1 className="card__title ml-3 mt-4">Adquisición</h1>
                <InfiniteScroll
                    dataLength={listAcquisition.length}
                    next={fetchMoreDataAcquistion}
                    hasMore={hasMoreAcquisition}
                    loader={hasMoreAcquisition && <LoadingTable />}
                >        
                    <table className="table" id="tbAcquisition">
                        <thead>
                            <tr>
                            <th scope="col">Adquisición</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listAcquisition.length>0 && (listAcquisition.map((item, key) => 
                                    <RowPage
                                        key={key}
                                        {...item}
                                    />
                                ) )
                            }   
                            { (!hasMoreAcquisition && listAcquisition.length===0) && (
                                <tr><td colSpan={3}>No hay información disponible</td></tr>
                            )}                     
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default TableAcquisition