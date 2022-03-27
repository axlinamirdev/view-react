import ItemLeadLoading from "../../Store/Form/Skeleton/ItemLeadLoading"

const LoadingLeads = () => {

    return (
        <div className={`col-11 mx-auto leads__container`}>
            {
                Array.from([1, 2, 3]).map((item, key) => 
                <ItemLeadLoading
                    key={key}   
                    classColor="bg-white"                            
                />)
            }
        </div>
    )
}

export default LoadingLeads