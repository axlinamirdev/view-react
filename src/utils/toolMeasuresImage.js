import { initialState } from "../data/initialState"

export const measuresImage = {
    principal: [
        {
            desktop: { width: 1689, height: 877, title:"1.689 x 877 px" },
            mobile:  { width: 378, height: 725, title: "378 x 725 px" }
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        },
        {
            desktop: { width: 1656, height: 362, title:"1.656 x 362 px" },
            mobile:  { width: 362, height: 351, title: "362 x 351 px" } 
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 365, height: 106, title: "365 x 106 px" } 
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 365, height: 106, title: "365 x 106 px" } 
        },
        {
            desktop: { width: 1656, height: 554, title:"1.656 x 554 px" },
            mobile:  { width: 362, height: 204, title: "362 x 204 px" } 
        }
    ],
    nuevos: [
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        }
    ],
    usados: [
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        }
    ],
    servicios: [
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        }
    ],
    neumaticos: [
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        }
    ],
    busqueda: [
        { 
            desktop: { width: 1136, height: 142, title:"1.136 x 142 px" },
            mobile:  { width: 362, height: 73, title: "362 x 73 px" }        
        },
        { 
            desktop: { width: 1136, height: 142, title:"1.136 x 142 px" },
            mobile:  { width: 362, height: 73, title: "362 x 73 px" }        
        },
        { 
            desktop: { width: 1136, height: 142, title:"1.136 x 142 px" },
            mobile:  { width: 362, height: 73, title: "362 x 73 px" }        
        },
        { 
            desktop: { width: 294, height: 324, title:"294 x 324 px" },
            mobile:  { width: 294, height: 324, title: "294 x 324 px" }        
        }
    ],
    auto: [
        { 
            desktop: { width: 379, height: 109, title:"379 x 109 px" },
            mobile:  { width: 379, height: 109, title: "379 x 109 px" }        
        },
        { 
            desktop: { width: 379, height: 109, title:"379 x 109 px" },
            mobile:  { width: 379, height: 109, title: "379 x 109 px" }        
        },
        { 
            desktop: { width: 379, height: 109, title:"379 x 109 px" },
            mobile:  { width: 379, height: 109, title: "379 x 109 px" }        
        },        
        { 
            desktop: { width: 407, height: 534, title:"407 x 534 px" },
            mobile:  { width: 407, height: 534, title: "407 x 534 px" }        
        },
        {
            desktop: { width: 1656, height: 230, title:"1.656 x 230 px" },
            mobile:  { width: 362, height: 100, title: "362 x 100 px" } 
        }
    ]
}

export const previewBannerHome = {
    principal: [
        {
            type: "home-main",
            name: "principal",
            style: "banner-selected__image__0",
            url: require("../assets/images/home-main/page0.png")?.default
        },
        {
            type: "home-main",
            name: "principal",
            style: "banner-selected__image__1",
            url: require("../assets/images/home-main/page1.PNG")?.default
        },
        {
            type: "home-main",
            name: "principal",
            style: "banner-selected__image__2",
            url: require("../assets/images/home-main/page2.png")?.default
        },
        {
            type: "home-main",
            name: "principal",
            style: "banner-selected__image__3",
            url: require("../assets/images/home-main/page3.png")?.default
        },
        {
            type: "home-main",
            name: "principal",
            style: "banner-selected__image__4",
            url: require("../assets/images/home-main/page3.png")?.default
        },
        {
            type: "home-main",
            name: "principal",
            style: "banner-selected__image__5",
            url: require("../assets/images/home-main/page4.png")?.default
        },
    ],
    nuevos: [
        {
            type: "home-new",
            name: "nuevos",
            style: "banner-new__image__1",
            url: require("../assets/images/auto-nuevo/page1.png")?.default
        },
        {
            type: "home-new",
            name: "nuevos",
            style: "banner-new__image__2",
            url: require("../assets/images/auto-nuevo/page2.png")?.default
        },
        {
            type: "home-new",
            name: "nuevos",
            style: "banner-new__image__3",
            url: require("../assets/images/auto-nuevo/page3.png")?.default
        }
    ],
    usados: [
        {
            type: "home-used",
            name: "usados",
            style: "banner-used__image__1",
            url: require("../assets/images/auto-usado/page1.png")?.default
        },
        {
            type: "home-used",
            name: "usados",
            style: "banner-used__image__2",
            url: require("../assets/images/auto-usado/page2.png")?.default
        },
    ],
    neumaticos: [
        {
            type: "tire",
            name: "neumaticos",
            style: "banner-neumatico__image__1",
            url: require("../assets/images/neumaticos/page1.png")?.default
        }
    ],
    servicios: [
        {
            type: "servicios",
            name: "servicios",
            style: "banner-servicios__image__1",
            url: require("../assets/images/servicios/page1.png")?.default
        }
    ],
    busqueda: [
        {
            type: "result-search",
            name: "busqueda",
            style: "banner-result__image__1",
            url: require("../assets/images/resultado-auto/page1.png")?.default
        },
        {
            type: "result-search",
            name: "busqueda",
            style: "banner-result__image__1",
            url: require("../assets/images/resultado-auto/page1.png")?.default
        },
        {
            type: "result-search",
            name: "busqueda",
            style: "banner-result__image__1",
            url: require("../assets/images/resultado-auto/page1.png")?.default
        }
    ],
    auto: [
        {
            type: "ficha-auto",
            name: "auto",
            style: "banner-auto__image__1",
            url: require("../assets/images/ficha-auto/page1.png")?.default
        },
        {
            type: "ficha-auto",
            name: "auto",
            style: "banner-auto__image__2",
            url: require("../assets/images/ficha-auto/page2.png")?.default
        }
    ]
}

export const getImage = (value) => {
    if(value==="" || value==="null" || value===null){
        return require("../assets/images/camara-fotografica.svg")?.default
    }
    return value
}

export const formatSendForm = (body, bodyLast) => {
    const { typeBanners } = initialState()
    
    const typeName = typeBanners.find(item => item.name===body.type)

    return {
        id: body.id,
        start_date: typeof body.start_date !== "undefined" ? body.start_date : "",
        end_date: typeof body.end_date !== "undefined" ? body.end_date : "",
        is_scheduled: body.is_scheduled,
        url_banner: body.url_banner,
        type: typeName?.type,
        ic_desktop_main: verifyTypeImg(body.ic_desktop_main?.photo, bodyLast?.ic_desktop_main?.photo),
        ic_mobile_main: verifyTypeImg(body.ic_mobile_main?.photo, bodyLast?.ic_mobile_main?.photo),
        ic_desktop_scheduled: verifyTypeImg(body.ic_desktop_scheduled?.photo, bodyLast?.ic_desktop_scheduled?.photo),
        ic_mobile_scheduled: verifyTypeImg(body.ic_mobile_scheduled?.photo, bodyLast?.ic_mobile_scheduled?.photo),
        action_type: typeof body.action_type !== "undefined" ? body.action_type : "",
        is_banner_hidden_id: body.is_banner_hidden_id
    }
}

export const verifyTypeImg = (file, fileLast) => {
    // eslint-disable-next-line
    if(typeof file === 'string' || typeof file === null || typeof file === 'null'){ 
        if(file.includes("camara-fotografica")){
            return ""
        }
    }else if(typeof file === 'object' && Object.keys(file).length===0){
        if(fileLast.includes("camara-fotografica")){
            return ""
        }
        return fileLast
    }

    return file
}

export const formatDataRequest = (dataCurrent, dataLast) => {
    const body = {
        isFormImgDesktop: true,
        isFormImgMobile: true,
        isFormUrl: true,
        isFormReplaceImg: true,
        id: dataLast.id,
        date_start: typeof dataCurrent.date_start === "undefined" ? "" : dataCurrent.date_start,
        date_end: typeof dataCurrent.date_end === "undefined" ? "" : dataCurrent.date_end,
        is_scheduled: dataCurrent.is_scheduled==="false" ? false : true,
        type: dataLast.type,
        url_banner: dataCurrent.url_banner,
        preview: dataLast.preview,
        measures: dataLast.measures,
        ic_desktop_main: { photo: getImage(dataCurrent?.ic_desktop_main), value:"", name: "" },
        ic_mobile_main: { photo: getImage(dataCurrent?.ic_mobile_main), value:"", name: "" },
        ic_desktop_scheduled: { photo: getImage(dataCurrent?.ic_desktop_scheduled), value:"", name: "" },
        ic_mobile_scheduled: { photo: getImage(dataCurrent?.ic_mobile_scheduled), value:"", name: "" },
        action_type: dataCurrent.action_type,
        is_banner_hidden_id: dataLast.is_banner_hidden_id
    }

    return body
}

export const compareDataBanner = (bannerCurrent, bannerLast ) => {
    if(bannerCurrent.end_date!==bannerLast.end_date){
        return true
    }else  if(bannerCurrent.ic_desktop_main!==bannerLast.ic_desktop_main?.photo){
        return true
    }else  if(bannerCurrent.ic_desktop_scheduled!==bannerLast.ic_desktop_scheduled?.photo){
        return true
    }else  if(bannerCurrent.ic_mobile_main!==bannerLast.ic_mobile_main?.photo){
        return true
    }else  if(bannerCurrent.ic_mobile_scheduled!==bannerLast.ic_mobile_scheduled?.photo){
        return true
    }else  if(bannerCurrent.start_date!==bannerLast.start_date){
        return true
    }else  if(bannerCurrent.is_scheduled!==bannerLast.is_scheduled){
        return true
    }else  if(bannerCurrent.url_banner!==bannerLast.url_banner){
        return true
    }else  if(bannerCurrent.action_type!==bannerLast.action_type){
        return true
    }else  if(bannerCurrent.is_banner_hidden_id!==bannerLast.is_banner_hidden_id){
        return true
    }

    return false
}