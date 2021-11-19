import { Button } from '@mui/material'
import React from 'react'
import {useDispatch} from 'react-redux';
import { logout } from '../actions/Actions';
import {useNavigate} from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
        navigate('/');
    }
    return (
        <div>
            <h1>welcome to home</h1>
            <Button sx={{right:0}} onClick={onLogout}>press here to logout</Button>
        </div>
    )
}
