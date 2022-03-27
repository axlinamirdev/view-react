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

const INITIAL_STATE = {
	adBannerHomeMain: [],
    loadingBanner: false,
    adBannerList: {},
    selectedBanner: {},
    titlePageBanner: "Home",
    nameTypeBanner: "",
}

const bannerReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case LOADING_INITIAL_BANNER:
			return {
				...state,
                loadingBanner: action.payload.loadingBanner
			}
        case INITIAL_DATA_BANNER:
            return {
                ...state,
                loadingBanner: action.payload.loadingBanner,
				adBannerHomeMain: action.payload.adBannerHomeMain,
                adBannerList: action.payload.adBannerList,
                selectedBanner: action.payload.selectBanner,
                titlePageBanner: action.payload.titlePageBanner,
                nameTypeBanner: action.payload.nameTypeBanner
            }
        case UPDATE_DATA_BANNER:
            return {
                ...state,
                loadingBanner: action.payload.loadingBanner,
				adBannerHomeMain: action.payload.adBannerHomeMain,
                selectedBanner: action.payload.selectBanner,
                titlePageBanner: action.payload.titlePageBanner,
                nameTypeBanner: action.payload.nameTypeBanner
            }
        case CHANGE_SCHEDULED_BANNER:
            return {
                ...state,
                adBannerHomeMain: action.payload.adBannerHomeMain
            }
        case PREVIEW_IMAGE_BANNER:
            return {
                ...state,
                adBannerHomeMain: action.payload.adBannerHomeMain
            }
        case EDIT_BANNER:
            return {
                ...state,
                adBannerHomeMain: action.payload.listBannerSelected,
                adBannerList: action.payload.listBannerEdit,
                selectedBanner: action.payload.selectBanner
            }
        case SELECTED_INDEX_BANNER:
            return {
                ...state,
                selectedBanner: action.payload.selectBanner,
                adBannerHomeMain: action.payload.listBannerSelected
            }
        case CHANGE_STATUS_FORM_BANNER:
            return {
                ...state,
                adBannerList: action.payload.listBanner,
                adBannerHomeMain: action.payload.listBannerSelected,
                selectedBanner: action.payload.selectBanner
            }
		default: return state
	}
}

export default bannerReducer
