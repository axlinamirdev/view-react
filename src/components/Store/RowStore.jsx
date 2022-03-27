const RowStore = ({ locals, brand, handleCloseOpen, id, handleSelectedStore, slug, status_id }) => {

    return (
        <tr>
            <td>{locals}</td>
            <td>{brand}</td>
            <td>
                <button 
                    type="submit" 
                    className="btn btn-orange mr-2 pl-4 pr-4 btn-size-table"
                    onClick={()=>handleSelectedStore(slug)}
                >
                    Editar
                </button>
                <button 
                    type="submit" 
                    className={`btn ${status_id===1 ? 'btn-secondary btn-size-table' : 'btn-primary'} mr-2 pl-4 pr-4`}
                    onClick={()=>handleCloseOpen(id, (status_id===1  ? 'pausar' : 'reanudar'), (status_id===1  ? 'pausado' : 'activado'))}
                >
                   {status_id===1  ? 'Pausar' : 'Reanudar' }
                </button>
                <button 
                    type="submit" 
                    className="btn btn-danger pl-4 pr-4 btn-size-table"
                    onClick={()=>handleCloseOpen(id, "eliminar", "eliminado")}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default RowStore