import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FormEditLoading = () => {

    return (
       <>
        {
            Array.from([1, 2, 3]).map((item, key) => 
                <div className="row" key={key}>
                    <div className="col-6">
                        <div className="card pt-4 pb-4">
                            <div className="card-body">
                                <Skeleton count={2} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card pt-4 pb-4">
                            <div className="card-body">
                                <Skeleton count={2} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
          {
            Array.from([1, 2, 3]).map((item, key) => 
                <div className="row" key={key}>
                    <div className="col-12">
                        <div className="card pt-4 pb-4">
                            <div className="card-body">
                                <Skeleton count={2} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       </>
    )
}

export default FormEditLoading