import RowPage from "./RowPage"

const TableLeads = ({ listLeadsInfo }) => {

    return (
        <div className="card">
            <div className="card-body p-0">
                <h1 className="card__title ml-3 mt-4">Leads</h1>
                <table className="table" id="tbLeads">
                    <thead>
                        <tr>
                        <th scope="col">Categoría</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listLeadsInfo.length>0 && (listLeadsInfo.map((item, key) => 
                                <RowPage
                                    key={key}
                                    {...item}
                                />
                            ) )
                        }   
                        { listLeadsInfo.length===0 && (
                            <tr><td colSpan={3}>No hay información disponible</td></tr>
                        )}                     
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableLeads