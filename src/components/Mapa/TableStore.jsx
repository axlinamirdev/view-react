import { useEffect, useState } from 'react'
import Select from 'react-select'
import RowStore from "./RowStore"

import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingTable from "../Custom/Spinner/LoadingTable"
import descendiente from "../../assets/images/orden-descendiente.svg"


const TableStore = ({
    categories, hasMoreStore, listStore, fetchMoreData, selectedStore, 
    filterByCategories, sortBrandStore, typeSort 
}) => {

    const [ categoriesAll, setCategoriesAll ] = useState([])

    useEffect(()=> {
        let categoryPreview = [ { value: "", label: "Seleccione..."}, ...categories]
        setCategoriesAll(categoryPreview)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories.length])

    return (
        <div className="card">
            <div className="card-body p-0">
                <div className="table-container">
                    <div className="select-category">
                        <label htmlFor="description" className="form__label">Categoría en movicenter</label>
                        <Select 
                            options={categoriesAll} 
                            placeholder="Buscar categoría..."
                            id="category" 
                            name="category"
                            className="select-provider mb-4"
                            onChange={(event)=>filterByCategories(event)}
                        />
                    </div>
                    <p className="table-sort" onClick={()=>sortBrandStore()}>
                        <img src={descendiente} alt="Ordenar por" 
                            className={`mr-2 ${typeSort==="ascending_order" ? "rotate-bottom" : "rotate-top"}`} />
                        Ordenar por
                    </p>
                </div>

                <InfiniteScroll
                    dataLength={listStore.length}
                    next={fetchMoreData}
                    hasMore={hasMoreStore}
                    loader={hasMoreStore && <LoadingTable />}
                >        
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="pl-5">Tienda / Marca</th>
                                <th scope="col">N° local</th>
                                <th scope="col">Categoría</th>
                                <th scope="col" className="pr-5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listStore.length>0 && (listStore.map((item, key) => 
                                    <RowStore
                                        key={key}
                                        item={item}
                                        selectedStore={selectedStore}
                                    />
                                ) )
                            }   
                            { (!hasMoreStore && listStore.length===0) && (
                                <tr><td colSpan={4}>No hay información disponible</td></tr>
                            )}                     
                        </tbody>
                    </table>
                </InfiniteScroll>
               
            </div>
        </div>
    )
}

export default TableStore