import { formatMonto } from "./formatNumber"

export const compareDataDashboard = (dataCurrent, dataLast) => {

    let avgSessionDuration = { 
        value: parseFloat(dataCurrent.analytics.avgSessionDuration.value), 
        title: "", 
        display: formatHMS(dataCurrent.analytics.avgSessionDuration.value)
     }

    let bounceRate = { 
        value: parseFloat(dataCurrent.analytics.bounceRate.value), 
        title: "",
        display: `${parseFloat(dataCurrent.analytics.bounceRate.value).toFixed(2)} %`
    }

    let pageviewsPerSession = { 
        value: parseFloat(dataCurrent.analytics.pageviewsPerSession.value), 
        title: "",
        display: parseFloat(dataCurrent.analytics.pageviewsPerSession.value).toFixed(2)
    }

    let pageviews = { 
        value: parseFloat(dataCurrent.analytics.pageviews.value), 
        title: "",
        display: formatMonto(dataCurrent.analytics.pageviews.value)
    }

    let users = { 
        value: parseFloat(dataCurrent.analytics.users.value), 
        title: "",
        display: formatMonto(dataCurrent.analytics.users.value) 
    }

    let sessions = { 
        value: parseFloat(dataCurrent.analytics.sessions.value), 
        title: "",
        display: formatMonto(dataCurrent.analytics.sessions.value) 
    }

    let leads = { 
        value: dataCurrent.leads.total, 
        title: "",
        display: formatMonto(dataCurrent.leads.total) 
    }

    let sumTotal = dataCurrent.analytics.channelGrouping.result.reduce((contador, item) => contador+Math.floor(item[1]), 0)
    
    let listAcquisitionAll =  tableFormat(dataCurrent.analytics.channelGrouping.result, sumTotal, {}, mouthName(dataCurrent.analytics.textStartDate), mouthName(dataCurrent.analytics.textEndDate))

    let listPages = tableFormat(dataCurrent.analytics.mostVisitedPages.result, pageviews.value, {}, mouthName(dataCurrent.analytics.textStartDate), mouthName(dataCurrent.analytics.textEndDate))

    let dataLeads = formatTableLeads(dataCurrent.leads)
    dataLeads=  tableFormat(dataLeads, 0, {}, dataCurrent.analytics.textStartDate, dataCurrent.analytics.textEndDate)


    if(Object.keys(dataLast).length===2){
        let totalAvgSession = ((avgSessionDuration.value / parseFloat(dataLast.analytics.avgSessionDuration.value)) -1 ) * 100
        avgSessionDuration = { 
            value: totalAvgSession,
            title: `${formatHMS(avgSessionDuration.value)} frente a ${formatHMS(dataLast.analytics.avgSessionDuration.value)}`,
            display: `${parseFloat(totalAvgSession).toFixed(2)} %`
        }

        let totalbounceRate = ((bounceRate.value / parseFloat(dataLast.analytics.bounceRate.value)) -1 ) * 100
        bounceRate = { 
            value: totalbounceRate,
            title:`${parseFloat(bounceRate.value).toFixed(2)} frente a ${parseFloat(dataLast.analytics.bounceRate.value).toFixed(2)}`,
            display: `${parseFloat(totalbounceRate).toFixed(2)} %`
        }

        let totalPageviewsPerSession = ((pageviewsPerSession.value / parseFloat(dataLast.analytics.pageviewsPerSession.value)) -1 ) * 100
        pageviewsPerSession = { 
            value: totalPageviewsPerSession,
            title: `${parseFloat(pageviewsPerSession.value).toFixed(2)} frente a ${parseFloat(dataLast.analytics.pageviewsPerSession.value).toFixed(2)}`,
            display: `${parseFloat(totalPageviewsPerSession).toFixed(2)} %`
        }

        let totalPageViews = ((pageviews.value / parseFloat(dataLast.analytics.pageviews.value)) -1 ) * 100
        pageviews = { 
            value: totalPageViews,
            title: `${formatMonto(pageviews.value)} frente a ${formatMonto(dataLast.analytics.pageviews.value)}`,
            display: `${parseFloat(totalPageViews).toFixed(2)} %`
        }

        let totalSessions = ((sessions.value / parseFloat(dataLast.analytics.sessions.value)) -1 ) * 100
        sessions = { 
            value: totalSessions,
            title:  `${formatMonto(sessions.value)} frente a ${formatMonto(dataLast.analytics.sessions.value)}`,
            display: `${parseFloat(totalSessions).toFixed(2)} %`
        }

        let totalUsers = ((users.value / parseFloat(dataLast.analytics.users.value)) -1 ) * 100
        users = { 
            value: totalUsers,
            title: `${formatMonto(users.value)} frente a ${formatMonto(dataLast.analytics.users.value)}`,
            display: `${parseFloat(totalUsers).toFixed(2)} %`
        }

        let totalLeads = ((leads.value / parseFloat(dataLast.leads.total)) -1 ) * 100
        leads = { 
            value: totalLeads, 
            title: `${formatMonto(leads.value)} frente a ${formatMonto(dataLast.leads.total)}`,
            display: `${parseFloat(totalLeads).toFixed(2)} %`
        }

        sumTotal = dataLast.analytics.channelGrouping.result.reduce((contador, item) => contador+Math.floor(item[1]), 0)
        listAcquisitionAll =  tableFormat(dataLast.analytics.channelGrouping.result, sumTotal, listAcquisitionAll, mouthName(dataLast.analytics.textStartDate), mouthName(dataLast.analytics.textEndDate))

        //listPages = tableFormat(dataLast.analytics.mostVisitedPages.result, dataLast.analytics.pageviews.value, listPages, mouthName(dataLast.analytics.textStartDate), mouthName(dataLast.analytics.textEndDate))

        let dataLeadsLast = formatTableLeads(dataLast.leads)
        dataLeads=  tableFormat(dataLeadsLast, 0, dataLeads, dataLast.analytics.textStartDate, dataLast.analytics.textEndDate)
    } 

    return {
        avgSessionDuration,
        bounceRate,
        pageviewsPerSession,
        pageviews,
        users,
        sessions,
        listAcquisitionAll,
        listPages,
        leads,
        dataLeads
    }
            
}

const formatHMS = (avgSessionDuration) => {
    const hours = Math.floor(avgSessionDuration / 3600);
    const minutes = Math.floor((avgSessionDuration - (hours * 3600)) / 60);
    const seconds = Math.round(avgSessionDuration - (hours * 3600) - (minutes * 60));

    const timeString = hours.toString().padStart(2, '0') + ':' + 
        minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    
        return timeString
}

export const formatDataDashoard = (dataAnalytics) => {

    const { leads  } = generateLeads(dataAnalytics)

    const tableAcquisition  = generateTableAcquisitionPage(dataAnalytics.listAcquisitionAll, false)

    const tablePages  = generateTableAcquisitionPage(dataAnalytics.listPages)
    
    const listLeads  = generateTableAcquisitionPage(dataAnalytics.dataLeads, false)

    return { leads, listLeads, tableAcquisition, tablePages }
}



const tableFormat = (data, sumTotal, list, startDate, endDate) => {

    let listAcquisitionAll = list  

    for(let index in data){

        if(!Object.keys(listAcquisitionAll).includes(data[index][0])){
            listAcquisitionAll[data[index][0]] = []
        }
        
        listAcquisitionAll[data[index][0]].push({
            title:  `${startDate} - ${endDate}`,
            count: formatMonto(data[index][1]),
            percentaje: data[index].length===3 ? data[index][2] : parseFloat((data[index][1]/sumTotal)*100).toFixed(2),
            display: data[index][1],
            colorRows: false,
            subtitle: data[index][0]
        })
    }

    return listAcquisitionAll
}


const generateLeads = (dataAnalytics) => {
    
    const leads = [
        [
            {
                title: "Usuarios",
                count: dataAnalytics.users.display,
                subtitle: dataAnalytics.users.title,
                classColor: "leads--orange"
            },
            {
                title: "Leads generados",
                count: dataAnalytics.leads.display,
                subtitle: dataAnalytics.leads.title,
                classColor: "leads--grey"
            },
            {
                title: "Sesiones",
                count: dataAnalytics.sessions.display,
                subtitle: dataAnalytics.sessions.title,
                classColor: "leads--dark-grey"
            }
        ],
        [
            {
                title: "Vistas de una página",
                count: dataAnalytics.pageviews.display,
                subtitle: dataAnalytics.pageviews.title,
                classColor: "leads--orange"
            },
            {
                title: "Paginas / sesión",
                count: dataAnalytics.pageviewsPerSession.display,
                subtitle: dataAnalytics.pageviewsPerSession.title,
                classColor: "leads--grey"
            },
            {
                title: "Duración media de la sesión",
                count: dataAnalytics.avgSessionDuration.display,
                subtitle: dataAnalytics.avgSessionDuration.title,
                classColor: "leads--dark-grey"
            }
        ],
        [
            {
                title: "Porcentaje de rebote",
                count: dataAnalytics.bounceRate.display,
                subtitle: dataAnalytics.bounceRate.title,
                classColor: "leads--orange"
            }
        ]
    ]

    const listLeads = []

    return { leads, listLeads }
}

const generateTableAcquisitionPage = (data, secondRow) => {
    
    let listPages = []
    for(let [key, value] of Object.entries(data)){
        
        if(value.length===2){
            listPages.push({ title: key, colorRows: true })
            for(let index in value){
                listPages.push({...value[index]})
            }
            let total = (value[0].display!==0 && value[1].display!==0) ? value[0].display/value[1].display : 0

            listPages.push({ 
                title: "% de cambios", 
                count: "",
                percentaje: parseFloat((total-1)*100).toFixed(2),
                display: "% de cambios",
                colorRows: false,
                subtitle: "% de cambios"
            })           
        }else{
            listPages.push({ ...value[0], title: key })           
        }
    }

    return listPages
    
}


export const generateDataReport = (dataAnalytics, tableAcquisition, tablePages, listLeads) => {
    
    const listAnalytics = dataAnalytics.flat().map(item => {
        return {
            title: item.title,
            count: item.count,
            subtitle: item.subtitle
        }
    })

    const listAcquisition = generateRowEmpty("Adquisición", tableAcquisition)

    const listPages = generateRowEmpty("Página más visitada", tablePages)

    const listLeadsAll = generateRowEmpty("Leads", listLeads)

    const data = [ ...listAnalytics, ...listAcquisition, ...listPages, ...listLeadsAll ]

    return data
}

const generateRowEmpty = (title, table) => {
    const rowEmptys = [ 
        {
            title: "",
            count: "",
            subtitle: ""
        },
        {
            title: "",
            count: "",
            subtitle: ""
        },
        {
            title: title,
            count: "Cantidad",
            subtitle:  "%"
        }
    ]

    const listTable = table.map(item => {
        return {
            title: item.title,
            count: item.count,
            subtitle: item.percentaje 
        }
    })

    return [ ...rowEmptys, ...listTable ]
}

const formatTableLeads = (dataLeads) => {
    let listLeads = []
    
    for(let [key, value] of Object.entries(dataLeads)){
        if(key!=="total" && key!=="textEndDate" && key!=="textStartDate"){
            listLeads.push([key, value.amount, value.perc])
        }        
    }

    return listLeads
}

export const mouthName = (dateCurrent) => {
    const names = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"]

    const dateUpdate = dateCurrent.split("-")

    const dateResult = `${dateUpdate[0]}-${names[Number(dateUpdate[1])-1]}-${dateUpdate[2]}`

    return dateResult

}