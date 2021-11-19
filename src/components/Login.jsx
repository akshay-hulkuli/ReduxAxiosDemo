import { Button } from '@mui/material'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { login } from '../actions/Actions';
import {useNavigate} from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const loginStatus = useSelector(state => state.loginReducer)
    const onLogin = () => {
        dispatch(login());
        // if(loginStatus)
            navigate('/home')
    }

    return (
        <div>
            <h1>welcome to login page</h1>
            <Button onClick={onLogin}>Login to site</Button>
        </div>
    )
}
