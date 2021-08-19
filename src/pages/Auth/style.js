import BrandColors from 'GlobalStyles/utils/colors'
import media from 'GlobalStyles/utils/media'
import styled from 'styled-components'

export const LoginBody = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${BrandColors.black};
    color: ${BrandColors.white};
    display: flex;
    justify-content: center;
`
export const LoginDiv = styled.div`
    /* border: 1px solid ${BrandColors.gold}; */
    width: 600px;
    height: 70%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    ${media.mobile`
        padding: 10px;
    `}
`

export const RavenLogo = styled.img`

`
export const Iheader = styled.h1`
    margin-top: 30px;
`

export const IText = styled.p`
    width: 60%;
    text-align: center;
    font-size: 14px;
    line-height: 180%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;
    margin-top: 15px;
    margin-bottom: 15px;

    ${media.mobile`
        width: 92%;
    `}
`

export const RavenLoginForm = styled.form`
    width: 60%;

    ${media.mobile`
        width: 92%;
    `}
`
export const RavenLoginInput = styled.input`
    padding: 13px;
    width: 100%;
    background-color: ${BrandColors.inputGrey};
    border: none;
    margin-top: 20px;
    color: ${BrandColors.white};
    border-radius: 5px;
`

export const ForgotDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    p{
        font-weight: normal;
        font-size: 14px;
        line-height: 180%;
        display: flex;
        align-items: center;
        text-align: right;
        color: ${BrandColors.grey};
        margin-top: 5px;
    }
`

export const RavenLoginButton = styled.button`
    margin-top: 30px;
    width: 100%;
    padding: 13px;
    color: ${BrandColors.gold};
    background: transparent;
    cursor: pointer;
    border: 1px solid ${BrandColors.gold};
    border-radius: 5px;
`