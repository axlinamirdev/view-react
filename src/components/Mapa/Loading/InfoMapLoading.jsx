import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InfoMapLoading = () => {

    return (
        <div className="card">
            <div className="card-body pl-5 pr-5">  
                <div className="mapa-info">
                    <div className="mapa-info__imagen">
                        <Skeleton count={1} width={100} height={70}/>
                    </div>
                    <div className="mapa-info__text ml-4">
                        <Skeleton count={3} width={200} />
                    </div>
                </div>
                <Skeleton count={1} height={30}/>
            </div>
        </div>
    )
}

export default InfoMapLoading