import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
//import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

export const useLogin = () => {

    //const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm()
    const [ loading, setLoading ] = useState(false)

    const onSubmit = (data) => {
        setLoading(false)

        const users = [
            {
                email: "wingsoft",
                password: "Plato.2021$"
            },
            {
                email: "movicenter-master",
                password: "$AzwL0*9Zu0i"
            },
            {
                email: "movicenter-admin",
                password: "*j#e*mjcCLkj"
            }
        ]

        const userVerified = users.find(item => item.email===data.email && item.password===data.password)
        
        if(userVerified){
            setLoading(false)
            history.push('/dashboard')
        }else{
            setLoading(false)
            toast.error("Usuario o contraseña incorrecta", {position: toast.POSITION.TOP_RIGHT})
        }
                
      }
  


    return {
        loading,
        register,
        handleSubmit,
        errors,
        onSubmit
    }
}