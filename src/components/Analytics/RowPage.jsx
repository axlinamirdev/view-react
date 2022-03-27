const RowPage = ({ title, count, percentaje, colorRows }) => {

    return (
        <tr>
            <td className={colorRows ? "" : "pl-5"}>{colorRows ? <b>{title}</b> : title}</td>
            <td>{!colorRows ? count : ""}</td>
            <td>{!colorRows ? `${percentaje} %` : ""} </td>
        </tr>
    )
}

export default RowPage