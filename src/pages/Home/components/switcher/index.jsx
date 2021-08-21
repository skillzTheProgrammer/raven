import React from 'react'
import { FirstArea, SecondArea, SwitcherBody } from './style'

const header = `Never be restricted
by distance`

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt ut labore et dolore magna 
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip.`

export default function Switcher({Topic=header,Text=content,Image,shouldSwitch='no'}) {
    return (
        <SwitcherBody shouldSwitch={shouldSwitch}>
            <FirstArea>
                <h1>{Topic}</h1>
                <p>{Text}</p>
            </FirstArea>
            <SecondArea>

            </SecondArea>
        </SwitcherBody>
    )
}
