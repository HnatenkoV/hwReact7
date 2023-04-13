import React, {useContext} from 'react';
import {AuthContext} from "../providers/authProvider";



const LogOut = () => {
    const authCtx = useContext(AuthContext);

    const doLogOut = (e) => {
        // console.log(e)
        authCtx.doLogOut(e)
    }
    return (
        <form onSubmit={doLogOut}>
            <button type="submit">Logout</button>
        </form>
    );
};

export default LogOut;