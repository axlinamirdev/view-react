import { useState } from "react"
import { useForm } from "react-hook-form"
import { getDataInitial, getFormatDashboard } from "../../actions/dashboardAction"
import { useDispatch } from "react-redux"
import { format, subMonths } from 'date-fns'


const date = new Date()

const defaultValues = {
    startDate:  format(new Date(date.getFullYear(), date.getMonth(), 1), 'yyyy-MM-dd'),
    endDate:  format(new Date(), 'yyyy-MM-dd')
}


export const useRangeAnalytics = () => {

    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const [ isCompareDate, setIsCompareDate ] = useState(false)
    const [ dataForm, setDataForm ] = useState({
        startDateLast: "",
        endDateLast: ""
    })
    const { handleSubmit, register, control, getValues } = useForm({defaultValues})

    const onSubmit =  async (data, e) => {
        e.preventDefault()

        setLoading(true)
        if(data.compareDate===false){
            const responseInitial = await dispatch(getDataInitial(data))
            if(responseInitial.status){
                dispatch(getFormatDashboard(responseInitial.data, []))
            }
        }else{
            let dateInitial = new Date(data.startDate)
            dateInitial = dateInitial.setMinutes(dateInitial.getMinutes() + dateInitial.getTimezoneOffset())

            let dateEnd = new Date(data.endDate)
            dateEnd = dateEnd.setMinutes(dateEnd.getMinutes() + dateEnd.getTimezoneOffset())

            const dataLast = {
                startDate: subMonths(dateInitial,1),
                endDate: subMonths(dateEnd,1)
            }
            
            const responseCurrent = await dispatch(getDataInitial(data))
            const responseLast = await dispatch(getDataInitial(dataLast))
            
            if(responseCurrent.status && responseLast.status){
                dispatch(getFormatDashboard(responseCurrent.data, responseLast.data))
            }
        }
        
        setLoading(false)
    }

    const getCompareDate = () => {
        setIsCompareDate(isCompareDate => !isCompareDate)

        getData(getValues("startDate"), getValues("endDate"))
    }

    const changeDateStart = (event) => {
        getData(event.target.value, getValues("endDate"))
    }

    const changeDateEnd = (event) => {
        getData(event.target.value, getValues("endDate"))
    }

    const getData = (startDate, endDate) => {
        let dateInitial = new Date(startDate)
        dateInitial = dateInitial.setMinutes(dateInitial.getMinutes() + dateInitial.getTimezoneOffset())
        dateInitial = subMonths(dateInitial,1)

        let dateEnd = new Date(endDate)
        dateEnd = dateEnd.setMinutes(dateEnd.getMinutes() + dateEnd.getTimezoneOffset())
        dateEnd = subMonths(dateEnd,1)

        setDataForm({
            startDateLast: format(dateInitial, 'dd/MM/yyyy'),
            endDateLast: format(dateEnd, 'dd/MM/yyyy'),
        })
    }

    return {
        handleSubmit,
        onSubmit,
        register,
        control,
        loading,
        isCompareDate,
        getCompareDate,
        dataForm,
        changeDateStart,
        changeDateEnd
    }
}