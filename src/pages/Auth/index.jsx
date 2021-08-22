import React, { useState, useEffect } from 'react'
import { ForgotDiv, Iheader, IText, LoginBody, LoginDiv, RavenLoginButton, RavenLoginForm, RavenLoginInput, RavenLogo } from './style'
import Logo from 'assets/svg/logo.svg'
import {loginUser} from './services'
import Toast from 'components/UI/Toast'
import { APP } from 'Routes/route'
import { useAuthContext } from 'context/AuthContext'

export default function Login({history}) {
    const [data, setData] = useState({email:'', password:'',})
    const [loading, setLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [description, setDescription] = useState('')
    const {user, setUser} = useAuthContext()

    function getInput(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function onLogin(e){
        e.preventDefault()
        setLoading(true)
        if(data.email.length===0 || data.password.length === 0){
            setLoading(false)
            setDescription('Empty fields')
            setShowToast(true)
            return;
        }
        loginUser(data)
            .then(res=>{
                if(res.status === 200){
                    setUser({
                        ...user,
                        isAuth: true,
                        data:{
                            ...res.data
                        }
                    })
                    setLoading(false)
                    setDescription('Access Granted')
                    setShowToast(true)
                    history.push(APP)
                    
                }
                return;
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
                setDescription('Access Denied')
                setShowToast(true)
                return
            })
    }

    useEffect(()=>{

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
                    <RavenLoginButton onClick={onLogin}>{!loading?'Login':'Loading'}</RavenLoginButton>
                </RavenLoginForm>
            </LoginDiv>
        </LoginBody>
    )
}
