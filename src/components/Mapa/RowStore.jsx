import { Link } from "react-router-dom"
import icon_edit from "../../assets/images/edit.png"

const RowStore = ({ item, selectedStore }) => {

    return (
        <tr>
            <td className="pl-5"><span className="store-hover" onClick={()=>selectedStore(item)}>{item.brand}</span></td>
            <td>{item.locals}</td>
            <td>{item.categoryName}</td>
            <td className="pr-5">
                <Link 
                    type="submit" 
                    className="btn btn-orange"
                    to={`/tienda/${item.slug}`}
                >
                    <img src={icon_edit} alt="Editar" />
                </Link>
            </td>
        </tr>
    )
}

export default RowStore