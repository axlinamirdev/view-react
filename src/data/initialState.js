const year_initial = process.env.REACT_APP_YEAR_INITIAL

export const initialState = () => {

    const typeOrigin = [
        { title: 'Alemania' },
        { title: 'China' },
        { title: 'Corea del Sur' },
        { title: 'España' },
        { title: 'Estados Unidos' },
        { title: 'Francia' },
        { title: 'India' },
        { title: 'Inglaterra' },
        { title: 'Italia' },
        { title: 'Japón' },
        { title: 'Malasia' },
        { title: 'República Checa' },
        { title: 'Rusia' },
        { title: 'Serbia' },
        { title: 'Suecia' }
    ]

    const typeTraction = [
        { title: '4x2' },
        { title: '4x4' }
    ]

    const  typeTransmission = [
        { title: 'Automática' },
        { title: 'Mecánica' }
    ]

    const typeFuel = [
        { title: 'Bencina' },
        { title: 'Diesel' },
        { title: 'Hibrido' },
    ]

    const typePerformance = [
        { title: 'Menos de 10 Km/L' },
        { title: '10 a 15 Km/L' },
        { title: 'Más de 15 Km/L' }
    ]

    const typeSeatMove = [
        { title: '2' },
        { title: '3' }
    ]

    const typeBodyWork = [
        { title: 'Camioneta' },
        { title: 'City' },
        { title: 'Coupe' },
        { title: 'Hatchback' },
        { title: 'Sedan' },
        { title: 'Station Wagon' },
        { title: 'SUV' }
    ]

    const typeColor = [
        { title: 'Azul' },
        { title: 'Blanco' },
        { title: 'Beige' },
        { title: 'Gris' }
    ]

    const listDoor = [
        { title: 4}
    ]

    const listAirbags = [
        { title: "0"},
        { title: "1"},
        { title: "2"},
        { title: "3"},
        { title: "4"},
        { title: "5"},
        { title: "6"},
        { title: "7"},
        { title: "8"},
        { title: "9"},
        { title: "10"}
    ]

    const generateYear = () => {

        let yearSelectList = []

        const dateCurrent = new Date()
        let month = dateCurrent.getMonth() + 1
        let max = dateCurrent.getFullYear()

        if(month >= 9){
            max = dateCurrent.getFullYear() + 1
        }

        for(let i =max; i >=  Number(year_initial); i--){
            yearSelectList.push({value: i, title: i})
        }

        return yearSelectList
    }

    const listYear = generateYear()

    const storeCreated = {
        id: 1,
        sLocals: [{ local: "" }],
        brand: "",
        carAvailable: 0,
        icon_logo: "",
        front_cover: "",
        iTelephone: [{ telephone1: "", telephone2: "", telephone3: "" }],
        iEmail: [{ email1: "", email2: "", email3: "" }],
        description: "",
        cars: [],
        sCategories: [{ category: "" }]
    }

    const carCreated = {
        sPhotos: [{ photo: "", value:"", name: "Cargar imagen" }],
        brand: "",
        model: "",
        price: "",
        list_price: "",
        category: "",
        mileage: "",
        transmission: "",
        fuel: "",
        cilindrada: "",
        year: "",
        version: "",
        country: "",
        traction: "",
        performance: "",
        color: "",
        seat_amount: "",
        seller: "",
        publishedBy: "",
        door: false,
        airbags: false,
        catalytic: false,
        abs_brake: false,
        central_lock: false,
        tires: false,
        air_conditioning: false,
        electric_window_lifters: false,
        radio: false,
        alarm: false,
        power_steering: false,
        door_cant: "",
        airbags_cant: ""
    }

    const bannerDefault = [
        {
            id: 1,
            img_desktop_main: { photo: "https://movicenter-web.s3.us-east-2.amazonaws.com/graficas-promo/desktop/banner_ford_home.jpg", value:"", name: "Cargar imagen" },
            img_mobile_main: { photo: "https://movicenter-web.s3.us-east-2.amazonaws.com/graficas-promo/mobile/banner_ford_home.jpg", value:"", name: "Cargar imagen" },
            url_banner: "https://desarrollo.movicenter.cl/concesionario/ford",
            is_scheduled: false,
            date_start: "",
            date_end: "",
            img_desktop_scheduled: { photo: require("../assets/images/camara-fotografica.svg")?.default, value:"", name: "Cargar imagen" },
            img_mobile_scheduled: { photo: require("../assets/images/camara-fotografica.svg")?.default, value:"", name: "Cargar imagen" },
            type: "home-main",
            type_image_preview: { name: "", url: "" }
        },
        {
            id: 2,
            img_desktop_main: { photo: "", value:"", name: "Cargar imagen" },
            img_mobile_main: { photo: "", value:"", name: "Cargar imagen" },
            url_banner: "",
            is_scheduled: true,
            date_start: "",
            date_end: "",
            img_desktop_scheduled: { photo: "", value:"", name: "Cargar imagen" },
            img_mobile_scheduled: { photo: "", value:"", name: "Cargar imagen" },
            type: "home-main",
            type_image_preview: { name: "", url: "" }
        },
        {
            id: 3,
            img_desktop_main: { photo: "", value:"", name: "Cargar imagen" },
            img_mobile_main: { photo: "", value:"", name: "Cargar imagen" },
            url_banner: "",
            is_scheduled: false,
            date_start: "",
            date_end: "",
            img_desktop_scheduled: { photo: "", value:"", name: "Cargar imagen" },
            img_mobile_scheduled: { photo: "", value:"", name: "Cargar imagen" },
            type: "home-new",
            type_image_preview: { name: "", url: "" }
        }
    ]

    const dataAnalisty = {
        visiTotalsAccumulatedMonth: { count: 45, title: ""  },
        leadsGenerated: { count: 900, title: ""  },
        bounceRate: { count: 3, title: ""  },
        averageStay: { count: 45, title: ""  },
        pagePerSession: { count: 500, title: ""  },
        usersOnline: { count: 3, title: ""  }
    }

    const typeBanners = [
        {
            type: "home-main",
            name: "principal",
            title: "HOME"
        },
        {
            type: "home-new",
            name: "nuevos",
            title: "HOME NUEVOS"
        },
        {
            type: "home-used",
            name: "usados",
            title: "HOME USADOS"
        },
        {
            type: "result-search",
            name: "busqueda",
            title: "RESULTADOS DE BÚSQUEDA"
        },
        {
            type: "tire",
            name: "neumaticos",
            title: "NEUMATICOS"
        },
        {
            type: "servicios",
            name: "servicios",
            title: "SERVICIOS"
        },
        {
            type: "ficha-auto",
            name: "auto",
            title: "FICHA AUTO"
        }
    ]

    const listMetricsAnalytics = [
        {
            data: {
                metrics: "ga:bounceRate",
                dimensions: ""
            },
            keyMetric: "bounceRate"
        },
        {
            data: {
                metrics: "ga:users",
                dimensions: ""
            },
            keyMetric: "users"
        },
        {
            data: {
                metrics: "ga:pageviewsPerSession",
                dimensions: ""
            },
            keyMetric: "pageviewsPerSession"
        },
        {
            data: {
                metrics: "ga:sessions",
                dimensions: ""
            },
            keyMetric: "sessions"
        },
        {
            data: {
                metrics: "ga:pageviews",
                dimensions: ""
            },
            keyMetric: "pageviews"
        },
        {
            data: {
                metrics: "ga:avgSessionDuration",
                dimensions: ""
            },
            keyMetric: "avgSessionDuration"
        },
        {
            data: {
                metrics: "ga:pageviews",
                dimensions: "ga:pagePath",
                "max-results": 8,
                sort: "-ga:pageviews"
            },
            keyMetric: "mostVisitedPages"
        },
        {
            data: {
                metrics: "ga:users",
                dimensions: "ga:ChannelGrouping",
                "max-results": 8,
                sort: "-ga:users"
            },
            keyMetric: "channelGrouping"
        }
    ]

    

    return {
        typeOrigin,
        typeTraction,
        typeTransmission,
        typeFuel,
        typePerformance,
        typeSeatMove,
        listYear,
        listDoor,
        listAirbags,
        storeCreated,
        carCreated,
        typeBodyWork,
        typeColor,
        bannerDefault,
        dataAnalisty,
        listMetricsAnalytics,
        typeBanners
    }

}