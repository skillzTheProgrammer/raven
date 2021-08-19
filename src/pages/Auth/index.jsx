import React, { useState } from 'react'
import { ForgotDiv, Iheader, IText, LoginBody, LoginDiv, RavenLoginButton, RavenLoginForm, RavenLoginInput, RavenLogo } from './style'
import Logo from 'assets/svg/logo.svg'
import {loginUser} from './services'

export default function Login() {
    const [data, setData] = useState({})

    function getInput(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log("dats",data)
    }

    function onLogin(e){
        e.preventDefault()
        loginUser(data)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <LoginBody>
            <LoginDiv>
                <RavenLogo src={Logo} alt='logs' />
                <Iheader>Welcome back</Iheader>
                <IText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                </IText>
                <RavenLoginForm>
                    <RavenLoginInput placeholder="Email" name='email' onChange={getInput}/>
                    <RavenLoginInput placeholder="password" name='password' onChange={getInput} />
                    <ForgotDiv>
                        <p>Forgot Password?</p>
                    </ForgotDiv>
                    <RavenLoginButton onClick={onLogin}>Login</RavenLoginButton>
                </RavenLoginForm>
            </LoginDiv>
        </LoginBody>
    )
}
