import React from 'react'
import { ForgotDiv, Iheader, IText, LoginBody, LoginDiv, RavenLoginButton, RavenLoginForm, RavenLoginInput, RavenLogo } from './style'
import Logo from 'assets/svg/logo.svg'

export default function Login() {
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
                    <RavenLoginInput placeholder="Email" />
                    <RavenLoginInput placeholder="password" />
                    <ForgotDiv>
                        <p>Forgot Password?</p>
                    </ForgotDiv>
                    <RavenLoginButton>Login</RavenLoginButton>
                </RavenLoginForm>
            </LoginDiv>
        </LoginBody>
    )
}
