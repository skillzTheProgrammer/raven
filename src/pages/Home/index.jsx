import React from 'react'
import Navbar from './components/Navbar'
import Switcher from './components/switcher'
import { contents } from './contents'
import { HomeBody } from './style'



export default function Hompage() {
    return (
        <HomeBody>
            <Navbar />
            {
                contents.map((content)=>
                    <Switcher
                        shouldSwitch={content.shouldSwitch}
                        Topic = {content.contentHeader}
                        Text = {content.text}
                        Image = {content.image}
                        BackDrop = {content.backdrop}
                    />
                )
            }
        </HomeBody>
    )
}
