import Layout from "../../components/Layout/Layout"

const Home = () => {

    return (
        <Layout
            titlePanel="Example"
            modulo="blog"
            itemModulo=""
        >
            <div className="row">
                <div className="col-11  mx-auto mt-5">
                    <h1 className="mt-5 panel-title__main">Blog</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Blog" className="embed-responsive-item" src="https://api-blog.movicenter.cl/ingreso" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
           

        </Layout>
    )
}

export default Home