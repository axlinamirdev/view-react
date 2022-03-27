import API from '../context/api'
import { 
	LOADING_INITIAL_BANNER,
    INITIAL_DATA_BANNER,
    CHANGE_SCHEDULED_BANNER,
    PREVIEW_IMAGE_BANNER,
    EDIT_BANNER,
    SELECTED_INDEX_BANNER,
	UPDATE_DATA_BANNER,
	CHANGE_STATUS_FORM_BANNER
} from "../types/bannerType"
import { initialState } from "../data/initialState"
import  { measuresImage, previewBannerHome, getImage, formatSendForm, 
	verifyTypeImg, formatDataRequest, compareDataBanner }  from "../utils/toolMeasuresImage"

export const requestSuccess = (type, payload) => {
    return { type, payload }
}

export const getListBanners = (typeBanner) => async (dispatch, getState) => {
	const { typeBanners } = initialState()
	
	dispatch(requestSuccess(LOADING_INITIAL_BANNER, { loadingBanner: true }))

    let payload = { 
        loadingBanner: false,
        adBannerHomeMain: [],
        adBannerList: []
    }

	try{

		let response = await API.get(`banner/getBanners`)
		const { data, isSuccessFull } = response.data

		let listBanner = {}
		let titlePageBanner = "HOME"
		data.sort(((a, b) => a.order - b.order))
		
		for(let index in data){
			const item  = data[index]
			let typeMesuare = typeBanners.find(banner => banner.type===item.type)
			
			if(!Object.keys(listBanner).includes(typeMesuare?.name)){
				listBanner[typeMesuare?.name] = []
			}
			
			listBanner[typeMesuare?.name].push({
                ...item,
                type: typeMesuare?.name,
				measures: {},
				is_scheduled: item.is_scheduled==="false" ? false : true,
				is_banner_hidden_id: item.is_banner_hidden===null ? false : item.is_banner_hidden,
				ic_desktop_main: { photo: getImage(item?.ic_desktop_main), value:"", name: "" },
				ic_mobile_main: { photo: getImage(item?.ic_mobile_main), value:"", name: "" },
				ic_desktop_scheduled: { photo: getImage(item?.ic_desktop_scheduled), value:"", name: "" },
				ic_mobile_scheduled: { photo: getImage(item?.ic_mobile_scheduled), value:"", name: "" },
				preview: "",
				isFormImgDesktop: true,
				isFormImgMobile: true,
				isFormUrl: true,
				isFormReplaceImg: true,
            })
		}
		
		for(const [key, value] of Object.entries(listBanner)){
			let count = 0
			for(let index in value){		
				const typeBannerImg = value[index].type
				
				listBanner[key][index].preview  =typeof previewBannerHome[typeBannerImg] !== "undefined" ? previewBannerHome[typeBannerImg][count] : []
				listBanner[key][index].measures =typeof measuresImage[typeBannerImg] !== "undefined" ? measuresImage[typeBannerImg][count] : []
				count++
			}
		}
		
		let bannerHomeMain = listBanner[typeBanner]
		let typeMesuare = typeBanners.find(banner => banner.name===typeBanner)
		titlePageBanner = typeMesuare?.title

        payload = { 
            loadingBanner: false,
            adBannerHomeMain: bannerHomeMain,
            adBannerList: listBanner,
            selectBanner: bannerHomeMain[0],
			titlePageBanner,
			nameTypeBanner: typeBanner
        }
		
		dispatch(requestSuccess(INITIAL_DATA_BANNER, payload))

		return { status: isSuccessFull, message: "" }
		
	}catch(error){
		dispatch(requestSuccess(INITIAL_DATA_BANNER, payload))
      	return { status: false, message: error }
    }
}

export const updateListBanner = (typeBanner) =>  async (dispatch, getState) => {
	dispatch(requestSuccess(LOADING_INITIAL_BANNER, { loadingBanner: true }))

	try{

		const { typeBanners } = initialState()

		let { adBannerList } = getState().bannerAdmin

		let bannerHomeMain = adBannerList[typeBanner]
		let typeMesuare = typeBanners.find(banner => banner.name===typeBanner)
		let titlePageBanner = typeMesuare?.title

		setTimeout(() => {
            const payload = { 
				loadingBanner: false,
				adBannerHomeMain: bannerHomeMain,
				selectBanner: bannerHomeMain[0],
				titlePageBanner,
				nameTypeBanner: typeBanner
			}
	
			dispatch(requestSuccess(UPDATE_DATA_BANNER, payload))
          }, 1500);

		

	}catch(error){
		dispatch(requestSuccess(LOADING_INITIAL_BANNER, { loadingBanner: false }))
		return { status: false, message: error }
	}
}

export const changeIsCheduled = (value, position, banner) => async (dispatch, getState) => {
	
	try{

        let { adBannerHomeMain } = getState().bannerAdmin

        let listBanner = adBannerHomeMain

        listBanner[position] = { ...banner, is_scheduled: value }
        
        let payload = { 
            adBannerHomeMain: listBanner
        }

		dispatch(requestSuccess(CHANGE_SCHEDULED_BANNER, payload))

		return { status: true, message: "" }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const changeActionTypeBanner = (value, position, banner) => async (dispatch, getState) => {
	
	try{
		
        let { adBannerHomeMain } = getState().bannerAdmin

        let listBanner = adBannerHomeMain

        listBanner[position] = { ...banner, action_type: value }
        
        let payload = { 
            adBannerHomeMain: listBanner
        }
        
		dispatch(requestSuccess(CHANGE_SCHEDULED_BANNER, payload))

		return { status: true, message: "" }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const previewImageType = (value, urlImage, position, banner) =>  (dispatch, getState) => {
	
	try{

        let { adBannerHomeMain } = getState().bannerAdmin

        let listBanner = adBannerHomeMain
		let type_image_preview = { name: "", url: "" }

        if(typeof position !== "undefined" && typeof banner !== "undefined"){
            listBanner = adBannerHomeMain

            type_image_preview = { name: value, url: urlImage }

            listBanner[position] = { ...banner, type_image_preview }
        }else{
            
            listBanner = adBannerHomeMain.map(item => {
                return {
                    ...item,
                    type_image_preview: { name: "", url: "" }
                }
            })
        }        

        let payload = { 
            adBannerHomeMain: listBanner
        }

		dispatch(requestSuccess(PREVIEW_IMAGE_BANNER, payload))

		return { status: true, message: "", type_image_preview }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const selectedTabBanner = (bannerIndex)  => (dispatch, getState) => {
    try{

        let { adBannerHomeMain } = getState().bannerAdmin

		const listBannerSelected = adBannerHomeMain.map(item => {
			return {
				...item,
				isFormImgDesktop: true,
				isFormImgMobile: true,
				isFormUrl: true,
				isFormReplaceImg: true
			}
		})
		
        let payload = { 
            selectBanner: bannerIndex!== null ? listBannerSelected[bannerIndex] : {},
			listBannerSelected
        }

		dispatch(requestSuccess(SELECTED_INDEX_BANNER, payload))
        
		return { status: true, message: "" }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const saveFormBanner = (body)  => async (dispatch, getState) => {
    try{

    	const { selectedBanner, adBannerList, adBannerHomeMain, nameTypeBanner } = getState().bannerAdmin
		
    	let bannerCurrent = selectedBanner
		let payload = {}
		let dataSave={}

    	const bannerSend = {
    		...bannerCurrent,
    		...body
    	}
    	
		const dataBanner= formatSendForm(bannerSend, selectedBanner)
		
		const valueCompareBanner = compareDataBanner(dataBanner, selectedBanner)
		
		if(!valueCompareBanner){
			
			payload = { 
				listBannerEdit: adBannerList[nameTypeBanner].map(banner => {
					return {
						...banner,
						isFormImgDesktop: true,
						isFormImgMobile: true,
						isFormReplaceImg: true,
						isFormUrl: true
					}
				}),
                listBannerSelected: adBannerHomeMain.map(item => {
					return {
						...item,
						isFormImgDesktop: true,
						isFormImgMobile: true,
						isFormReplaceImg: true,
						isFormUrl: true
					}
				}),
				selectBanner: selectedBanner
			}
			dispatch(requestSuccess(EDIT_BANNER, payload))

			return { status: false, message: "La actualización no fue realizada porque no hubo cambios" }
		}

		let formData = new FormData()
		formData.append('id', dataBanner.id)
		formData.append('type', dataBanner.type)
        formData.append('url_banner', dataBanner.url_banner)
		formData.append('is_scheduled', dataBanner.is_scheduled)
		formData.append('start_date', dataBanner.start_date)
		formData.append('end_date', dataBanner.end_date)
		formData.append('photos', verifyTypeImg(selectedBanner.ic_desktop_main?.photo))//Url anteriores
		formData.append('photos', verifyTypeImg(selectedBanner.ic_mobile_main?.photo))//Url anteriores
        formData.append('photos', verifyTypeImg(selectedBanner.ic_desktop_scheduled?.photo))//Url anteriores
		formData.append('photos', verifyTypeImg(selectedBanner.ic_mobile_scheduled?.photo))//Url anteriores
		
		if(typeof dataBanner.ic_desktop_main !== "string" && dataBanner.ic_desktop_main.length>0){
			formData.append('pictures', dataBanner.ic_desktop_main[0])
			formData.append('folders', "ic-desktop-main")
		}

		if(typeof dataBanner.ic_mobile_main !== "string" && dataBanner.ic_mobile_main.length>0){
			formData.append('pictures', dataBanner.ic_mobile_main[0])
			formData.append('folders', "ic-mobile-main")
		}
		if(typeof dataBanner.ic_desktop_scheduled !== "string" && dataBanner.ic_desktop_scheduled.length>0){
			formData.append('pictures', dataBanner.ic_desktop_scheduled[0])
			formData.append('folders', "ic-desktop-scheduled")
		}
        if(typeof dataBanner.ic_mobile_scheduled !== "string" && dataBanner.ic_mobile_scheduled.length>0){
			formData.append('pictures', dataBanner.ic_mobile_scheduled[0])
			formData.append('folders', "ic-mobile-scheduled")
		}

		formData.append('action_type', dataBanner.action_type)
		formData.append('is_banner_hidden', dataBanner.is_banner_hidden_id)

		let response = await API.putFiles(`banner/update`, formData)
		const { isSuccessFull, data } = response.data

		if(isSuccessFull){			
			dataSave = formatDataRequest(data, bannerSend)

			const listBannerEdit = adBannerList[nameTypeBanner].map(banner => {

				if(banner.id===dataSave.id){
					return dataSave
				}
				return banner
			})
			adBannerList[nameTypeBanner] = listBannerEdit

            const listBannerSelected = adBannerHomeMain.map(banner => {
				if(banner.id===dataSave.id){
					return dataSave
				}
				return banner
			})

			let selectBanner = dataSave

			payload = { 
				listBannerEdit: adBannerList,
                listBannerSelected,
				selectBanner
			}
			
			dispatch(requestSuccess(EDIT_BANNER, payload))
		}

		return { status: isSuccessFull, message: "Se ha editado con éxito" }
		
	}catch(error){
      	return { status: false, message: `Hubo un error al actualizar la imagen` }
    }
}

export const disabledForm = (id, type, value)  =>  (dispatch, getState) => {
	try{
		const { adBannerList, nameTypeBanner } = getState().bannerAdmin

		let typeInput = ""
		let listBanner = adBannerList
		
		if(type==="ic_desktop_main"){
			typeInput="isFormImgDesktop"
		}else if(type==="ic_mobile_main"){
			typeInput="isFormImgMobile"
		}else if(type==="url_banner"){
			typeInput="isFormUrl"
		}

		for(const [key, list] of Object.entries(listBanner)){
			const listItem = list.map(item => {
				item.isFormImgDesktop=true
				item.isFormImgMobile=true
				item.isFormUrl=true

				if(item.id===id && key===nameTypeBanner){
					item[typeInput]= value
				}
				return item
			})	
			listBanner[key] = listItem
		}
		let listBannerSelected = listBanner[nameTypeBanner]
		let selectBanner = listBanner[nameTypeBanner].find(item => item.id===id)

		const payload = { listBanner, listBannerSelected, selectBanner }
		
		dispatch(requestSuccess(CHANGE_STATUS_FORM_BANNER, payload))

	}catch(error){
		return { status: false, message: error }
	}
}

export const updateStatusScheduled = ()  => async (dispatch, getState) => {
    try{

    	const { selectedBanner } = getState().bannerAdmin
		
		const dataBanner= formatSendForm(selectedBanner)

		let formData = new FormData()
		formData.append('id', dataBanner.id)
		formData.append('type', dataBanner.type)
        formData.append('url_banner', dataBanner.url_banner)
		formData.append('is_scheduled', false)
		formData.append('start_date', "")
		formData.append('end_date', "")
		formData.append('photos', verifyTypeImg(selectedBanner.ic_desktop_main?.photo))//Url anteriores
		formData.append('photos', verifyTypeImg(selectedBanner.ic_mobile_main?.photo))//Url anteriores
        formData.append('photos', "")//Url anteriores
		formData.append('photos', "")//Url anteriores
		
		let response = await API.putFiles(`banner/update`, formData)
		const { isSuccessFull } = response.data		

		return { status: isSuccessFull, message: "Se ha editado con éxito" }
		
	}catch(error){
      	return { status: false, message: error }
    }
}