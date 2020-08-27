import React from 'react'
import Button from '@material-ui/core/Button'
import {auth,provider} from "./firebase"
import {useStatevalue} from "./StateProvider"

function Login() {
    const [{user},dispatch]=useStatevalue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:"SET_USER",
                user:result.user
            })
        }).catch((err)=>{alert(err.message)})
    }
    return (
        <div className="login">
            <Button onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
