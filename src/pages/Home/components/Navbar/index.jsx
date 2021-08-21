import React, {useState} from 'react'
import { LogoArea, NavbarDiv, MenuArea, GetStarted } from './style'
import Logo from 'assets/svg/logo.svg'
import { MENUDATA } from './menuData'
import {useHistory} from 'react-router-dom'

export default function Navbar() {
    const history = useHistory()
    const [allMenu, setAllMenu] = useState(MENUDATA)

    function menuSwitch(link){
        history.push(link)
        setAllMenu(allMenu)
    }
    return (
        <NavbarDiv>
            <LogoArea src={Logo} alt='log' />
            <MenuArea>
                {
                    allMenu.map((menu,index)=>
                        <p onClick={()=>menuSwitch(menu.link)} className={menu.isActive?'active':null} key={index}>{menu.name} {menu.isActive? '>' : null}</p>
                    )
                }
                <GetStarted>Get Started</GetStarted>
            </MenuArea>
        </NavbarDiv>
    )
}
