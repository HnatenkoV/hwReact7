import React, {useContext} from 'react';
import {AuthContext} from "../providers/authProvider";



const LoginForm = () => {
    const authCtx = useContext(AuthContext);

    const doLogin = (e) => {
            e.preventDefault()
            authCtx.doLogin(e.target[0].value)
    }

    return (
        <form onSubmit={doLogin}>
            <input type="text" placeholder="username"/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;