import axios from 'axios'

// create > single Axios instance for the entire application
const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false, 
    // for authentication and configuration
    header:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCategories(){
        return apiClient.get('/categories')
    },
    getCategory(id){
        return apiClient.get('/categories/' + id)
    }
}