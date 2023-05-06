import React from "react";
import axios from 'axios';

const facerecog=()=>{
    
}
const login = (email, password) => {
    return(
        axios.post('https://ta-backend-faqihjota-c4luylsyka-et.a.run.app/login',{email, password})
            .then(res=>{
                return res.data;
            })
        
    )
};

const signup = (username,email, password1,password2, imageUrl) => {
    return(
        axios.post('https://ta-backend-faqihjota-c4luylsyka-et.a.run.app/sign-up',{username,email,password1,password2,imageUrl})
            .then(res=>{
                return res.data;
            })
        
    )
};



const Auth_service = {login,signup}


export default Auth_service ;