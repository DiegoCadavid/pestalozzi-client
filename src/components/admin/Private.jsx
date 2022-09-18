import React from 'react'
import { Navigate } from 'react-router-dom';
import isAuth from './helpers/isAuth';

const Private = ({ component: Component }) => {

    // AUTENTICACION
    const auth = isAuth(); 
    return auth ? Component : <Navigate to='/login' />
}

export default Private