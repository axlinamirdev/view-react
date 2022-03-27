import { Accordion } from "react-bootstrap"
import Layout from "../../components/Layout/Layout"
import CardAccordion from "../../components/Banner/Custom/CardAccordion"
import FormImage from "../../components/Banner/FormImage"
import ModalPreview from "../../components/Banner/ModalPreview"
import FormReplaceImage from "../../components/Banner/FormReplaceImage"
import FormUrlBanner from "../../components/Banner/FormUrlBanner"
import FormHiddenBanner from "../../components//Banner/FormHiddenBanner"
import ModalPreviewPage from "../../components/Banner/Pages/ModalPreviewPage"
import LoadingSkeletonBanner from "../../components/Banner/Skeleton/LoadingSkeletonBanner"
import { ToastContainer, toast } from 'react-toastify'
import { useParams } from "react-router-dom"

import { useBanner } from "../../hooks/Banner/useBanner"

const Home = () => {

    
    const { typeBanner } = useParams()

    const { adBannerHomeMain, itemBanner, closeModalPreview, isModal, getSelectedBanner, 
        activeKey, previewTypeBanner, isBannerPreview, closePreviewBanner, loadingBanner, titlePageBanner } = useBanner(typeBanner)

    return (
        <Layout
            titlePanel="Example"
            modulo="banner-principal"
            itemModulo="banner"
        >
            <div className="row">
                <div className="col-11  mx-auto mt-5">
                    <h1 className="mt-5 panel-title__main">BANNER PUBLICITARIO</h1>
                    <h3 className="mt-4 title-banner">{titlePageBanner}</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-11  mx-auto mt-5">
                    {
                        loadingBanner && (
                            <LoadingSkeletonBanner />
                        )
                    }
                    {
                        (!loadingBanner && adBannerHomeMain.length>0) && 
                        adBannerHomeMain.map((banner, key) => (
                            <Accordion key={key} activeKey={activeKey} onSelect={(event) => getSelectedBanner(event)} className="accordion-quote">
                                <CardAccordion title={`Banner ${(key+1)}`} index={key} activeKey={activeKey}>
                                    <div className="row">
                                        <div className="col-12 text-right">
                                            <p className="banner-link" onClick={()=>previewTypeBanner(banner)}>Ver banner</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="card pt-4">
                                                <div className="card-body">
                                                    <label htmlFor="description" className="form__label">{`Desktop (Tamaño ${banner.measures?.desktop?.title})`}</label>
                                                    <FormImage 
                                                        item={banner.ic_desktop_main} 
                                                        index={key}
                                                        closeModalPreview={closeModalPreview}
                                                        visibilityButton={true}
                                                        banner={banner}
                                                        typeImage="ic_desktop_main"
                                                        measures={banner.measures?.desktop}
                                                        toast={toast}
                                                        nameImg={{id: "picture1", name: "pictures"}}
                                                        status={banner.isFormImgDesktop}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="card pt-4">
                                                <div className="card-body">
                                                    <label htmlFor="description" className="form__label">{`Mobile (Tamaño ${banner.measures?.mobile?.title})`}</label>
                                                    <FormImage 
                                                        item={banner.ic_mobile_main} 
                                                        index={key+1}
                                                        closeModalPreview={closeModalPreview}
                                                        visibilityButton={true}
                                                        banner={banner}
                                                        typeImage="ic_mobile_main"
                                                        measures={banner.measures?.mobile}
                                                        toast={toast}
                                                        nameImg={{id: "picture2", name: "pictures"}}
                                                        status={banner.isFormImgMobile}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                    <FormHiddenBanner
                                        index={key}
                                        banner={banner}
                                        toast={toast}
                                    />

                                    {
                                        (banner?.is_banner_hidden_id===false) && (
                                            <>
                                                <FormUrlBanner
                                                    index={key}
                                                    banner={banner}
                                                    toast={toast}
                                                    status={banner.isFormUrl}
                                                /> 

                                                <FormReplaceImage
                                                        key={key}
                                                        index={key} 
                                                        banner={banner} 
                                                        closeModalPreview={closeModalPreview}
                                                        toast={toast}
                                                />  
                                            </>
                                        )
                                    }

                                </CardAccordion>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
            { isModal && <ModalPreview show={isModal} handleClose={closeModalPreview} item={itemBanner} /> }
            { isBannerPreview && <ModalPreviewPage data={isBannerPreview} handleClose={closePreviewBanner} />}        
            <ToastContainer />
        </Layout>
    )
}

export default Home