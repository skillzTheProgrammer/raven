import React from 'react'
import { FooterBody, FooterInner } from './style'
import endCall from 'assets/app/endCall.svg'
import vid from 'assets/app/vidCam.svg'
import mic from 'assets/app/mic.svg'
import useAgora from 'Hooks/useAgora'

export default function AppFooter() {
    const {leave} = useAgora()
    return (
        <FooterBody>
            <FooterInner>
                <img src={vid} alt='ecc' />
                <img onClick={leave} src={endCall} alt='ecc' />
                <img src={mic} alt='ecc' />
            </FooterInner>
        </FooterBody>
    )
}
