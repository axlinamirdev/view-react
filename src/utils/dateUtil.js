import { format, subHours } from 'date-fns'

export const getParamsInitial = () => {
    const listMonth = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]

    const dataCurrent = new Date()
    const month = dataCurrent.getMonth() 

    const last24 = format(subHours(dataCurrent, 24), 'HH:mm')

    const hours = `${last24} hrs`

    const today = `${addZeroDate(dataCurrent.getDate())} de ${listMonth[month]}`

    const year = dataCurrent.getFullYear()

    return { month: listMonth[month], hours, today, year }
}

const addZeroDate = (date) => {
	return date >= 10 ? date : `0${date}`
}