import axios from "axios";
const axiosInstance=axios.create({
    baseURL:'/api'    //the base url of our backend 
})
axiosInstance.interceptors.request.use((config)=>{
    const accessToken=sessionStorage.getItem('logintoken');
    if(accessToken){
        if(config){
            config.headers.token=accessToken; //headers.token is the  keyword and config is the name given above 
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error);
})

export default axiosInstance