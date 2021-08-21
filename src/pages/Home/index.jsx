import React from 'react'
import Navbar from './components/Navbar'
import Switcher from './components/switcher'
import { HomeBody } from './style'

export default function Hompage() {
    return (
        <HomeBody>
            <Navbar />
            <Switcher />
            <h1>HomePage</h1>
        </HomeBody>
    )
}
