import React, {useEffect, useState} from 'react';
import axios from "axios";


export const AuthContext = React.createContext({
    doLogin: () => {},
    doLogOut: () => {},
    token: undefined
});

const AuthProvider = (props) => {
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        if (localStorage.getItem('token')) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
    }, [token])

    const doLogin = async (user) => {
        try {
            const token = await axios.post('login', {user})
            localStorage.setItem('token', token.data.token)
            setToken(token.data.token)
        } catch (e) {
            console.log(e)
            // e.status(401).json({message: "error"})
        }

    }

    const doLogOut = async () => {
        await localStorage.removeItem('token')
        return token
    }


    const getContextValue = () => {
        return {
            doLogin,
            doLogOut,
            token
        }
    }
    return (
        <>
            <AuthContext.Provider value={getContextValue()}>
                {token ? props.children[1] : props.children[0]}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;