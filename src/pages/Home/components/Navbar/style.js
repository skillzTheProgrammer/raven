import BrandColors from 'GlobalStyles/utils/colors'
import styled from 'styled-components/macro'

export const NavbarDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
`

export const LogoArea = styled.img`

`

export const MenuArea = styled.div`
    display: flex;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        margin-right: 20px;

        &.active{
            color: #CB942D;
        }
    }
`

export const GetStarted = styled.div`
    padding: 10px;
    border-radius: 5px;
    background-color: ${BrandColors.gold};
    cursor: pointer;
`