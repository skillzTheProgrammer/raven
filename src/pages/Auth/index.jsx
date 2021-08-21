import React, { useState, useEffect } from 'react'
import { ForgotDiv, Iheader, IText, LoginBody, LoginDiv, RavenLoginButton, RavenLoginForm, RavenLoginInput, RavenLogo } from './style'
import Logo from 'assets/svg/logo.svg'
import {loginUser} from './services'
import Toast from 'components/UI/Toast'
import { APP } from 'Routes/route'

export default function Login({history}) {
    const [data, setData] = useState({email:'',password:'',})
    const [showToast, setShowToast] = useState(false)
    const [description, setDescription] = useState('')

    function getInput(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function onLogin(e){
        e.preventDefault()
        if(data.email.length===0 || data.password.length === 0){
            console.log('jello')
            setDescription('Empty fields')
            setShowToast(true)
            return;
        }
        loginUser(data)
            .then(res=>{
                if(res.status === 200){
                    setDescription('Access Granted')
                    setShowToast(true)
                    return history.push(APP)
                }
                return;
            })
            .catch(err=>{
                console.log(err)
                setDescription('Access Denied')
                setShowToast(true)
                return
            })
    }

    useEffect(()=>{

        return ()=> {
            setDescription(description)
            return
        }
    })
    return (
        <LoginBody>
            <Toast description={description} showModal={showToast} setShowModal={setShowToast} />
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
