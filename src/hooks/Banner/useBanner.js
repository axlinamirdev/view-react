import { useEffect, useState } from 'react'
import { getListBanners, selectedTabBanner, previewImageType, updateListBanner } from "../../actions/bannerAction"
import { useDispatch, useSelector } from 'react-redux'
//import { useForm } from "react-hook-form"
//import defaultPhoto from "../../assets/images/camara-fotografica.svg"

//const MEASURES_PHOTO = process.env.REACT_APP_MEASURES_CAR

export const useBanner = (typeBanner) => {
    
    const dispatch = useDispatch()
    const [ isModal, setIsModal ] = useState(false)
    const [ isBannerPreview, setIsBannerPreview ] = useState({
        status: false,
        item: {}
    })
    const [ activeKey, setActiveKey ] = useState("0")
    const [ itemBanner, setItemBanner ] = useState({})
    const { adBannerHomeMain, loadingBanner, titlePageBanner, adBannerList } = useSelector((state) => state.bannerAdmin)


    const closeModalPreview = (value, urlImage, position, banner) => {
        const valueBanner = isModal ? "" : value
        const urlBanner = isModal ? "" : urlImage

        const response = dispatch(previewImageType(valueBanner, urlBanner, position, banner))

        if(response?.type_image_preview?.url!==""){
            setItemBanner(response?.type_image_preview)
        }        
        setIsModal(isModal => !isModal)
    }

    const configInitial = async (type) => {
        if(Object.keys(adBannerList).length===0){
            await dispatch(getListBanners(type))
        }else{
            await dispatch(updateListBanner(type))
            getSelectedBanner("0")
        }
    }

    const getSelectedBanner = (tabSelected) => {
        const response = dispatch(selectedTabBanner(tabSelected))
        if(response.status){
            setActiveKey(tabSelected)
        }
    }

    const previewTypeBanner = (banner) => {

        setIsBannerPreview({
            status: true,
            item: banner
        })
    }

    const closePreviewBanner = () => {
        setIsBannerPreview({
            status: false,
            item: {}
        })
    }
    
    useEffect(()=> {
        configInitial(typeBanner)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeBanner])

	return {
		adBannerHomeMain, 
        titlePageBanner,
        closeModalPreview,
        isModal,
        getSelectedBanner,
        activeKey,
        itemBanner,
        previewTypeBanner,
        isBannerPreview,
        closePreviewBanner,
        loadingBanner
	}
}