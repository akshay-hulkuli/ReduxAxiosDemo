import axios from "axios";

export const login  = () => {
    return function(dispatch) {
        const data = {
            "loginStatus": 1
        }
        return axios.post('http://localhost:8000/login/',data)
            .then(()=>{
                dispatch({
                    type:"LOGIN"
                })
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}

export const logout  = () => {
    return function(dispatch){
        const data = {
            "loginStatus": 0
        }
        return axios.post('http://localhost:8000/login/',data)
            .then(()=>{
                dispatch({
                    type:"LOGOUT"
                })
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}