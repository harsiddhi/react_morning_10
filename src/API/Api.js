import React from 'react'
import axios from 'axios' 




const fetchData = (endpoint) =>
{
    return axios.get(`http://localhost:3004/${endpoint}`).then((admindata)=>{
        console.log("The data is" + JSON.stringify(admindata))
            return admindata.data
    })
}

export default 
{
    fetchData
}