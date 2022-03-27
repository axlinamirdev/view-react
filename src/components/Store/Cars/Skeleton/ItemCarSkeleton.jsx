import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const ItemCarSkeleton = () => {

    return (
        <div className="card card-cars pt-4 pb-4 mr-5">
            <div className="card-body pl-0 pr-0">
                <div className="car-slide">
                    <div className="car-slid__item mx-auto">
                        <Skeleton height={150} />
                    </div>
                </div>
                <div className="car-item">
                    <Skeleton count={2} />
                </div>
                <div className="car-item">
                    <Skeleton count={2} />
                </div>
                <div className="car-item car-item--none">
                    <Skeleton count={2} />
                </div>
            </div>
        </div>
    )
}

export default ItemCarSkeleton