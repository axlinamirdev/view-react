const RowData = ({ date, hours, concessionaire, service, my_route, brand, model, year, cliente, handleMoreInfoClient }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{hours}</td>
            <td>{concessionaire}</td>
            <td>{service}</td>
            <td>{my_route}</td>
            <td>{brand}</td>
            <td>{model}</td>
            <td>{year}</td>
            <td>{cliente.name} <br/> {cliente.email}</td>
            <td className="tbLeads_btn">
                <button 
                    type="submit" 
                    className="btn btn-secondary"
                    onClick={(event)=>handleMoreInfoClient(cliente)}
                >
                    Ver más
                </button>
            </td>
        </tr>
    )
}

export default RowData