import BrandColors from 'GlobalStyles/utils/colors'
import styled from 'styled-components/macro'

export const SwitcherBody = styled.div`
    width:100%;
    height: 500px;
    padding: 20px 0;
    /* border: 2px solid red; */
    display: flex;
    background-color: ${({shouldSwitch }) => (shouldSwitch==='no' ? BrandColors.black : BrandColors.homeShade )};
`

export const ImageArea = styled.img`

`

export const FirstArea = styled.div`
    width: 50%;
    order: 0;

    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        line-height: 50px;
        display: flex;
        align-items: center;
    }

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 180%;
        display: flex;
        align-items: center;
        letter-spacing: -0.03em;
        margin-top:  20px;
    }
`

export const SecondArea =styled.div`
    background-color: ${BrandColors.homeGrey};
    height: 310px;
    width: 40%;
`