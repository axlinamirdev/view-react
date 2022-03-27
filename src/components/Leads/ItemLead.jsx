const ItemLead = ({ classColor, title, count, subtitle, isVisible }) => {
    return (
        <div className={`leads ${classColor}`}>
            <div className="leads__title">
                {isVisible && (<p>Leads</p>)}
                <p>{title}</p>
            </div>
            <div className="leads__count">
                <p>{count} </p>
            </div>
            <div className="leads__mount">
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default ItemLead