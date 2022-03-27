import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL 

const axiosInstance = axios.create({
	validateStatus() {
		return true
	},
	withCredentials: false
})

const getHeaders = () => {
	return {
	  headers: {
		  "Content-type": "application/json"
	  }
	}
  }

  const getHeadersForm = (data) => {
	return {
	  headers: {
		'Accept': 'application/json',
		'Content-Type': `application/x-www-form-urlencoded`
	  }
	}
  }


const API = {
	get: (endPoint) => {
		return axiosInstance.get(`${baseURL}/${endPoint}`, getHeaders())
	},
	post: (endPoint, body) => {
		return axiosInstance.post(`${baseURL}/${endPoint}`, body, getHeaders())
	},
	put: (endPoint, body) => {
		return axiosInstance.put(`${baseURL}/${endPoint}`, body, getHeaders())
	},
	postFiles: (endPoint, body) => {
		return axiosInstance.post(`${baseURL}/${endPoint}`, body, getHeadersForm(body))
	},
	putFiles: (endPoint, body) => {
		return axiosInstance.put(`${baseURL}/${endPoint}`, body, getHeadersForm(body))
	},
}

export default API
