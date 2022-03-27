import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ItemLeadLoading = ({ classColor }) => {

    return (
        <div className={`leads ${classColor}`}>
            <div className="leads__title">
                <Skeleton count={2} />
            </div>
            <div className="leads__count">
                <Skeleton count={1} />
            </div>
            <div className="leads__mount">
                <Skeleton count={1} />
            </div>
        </div>
    )
}

export default ItemLeadLoading