import BrandColors from 'GlobalStyles/utils/colors'
import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const ApplicationBody = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${BrandColors.black};
    color: ${BrandColors.white};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.mobile`
        width: 100%;
        min-height: 100vh;
    `}
`

export const AppBodyDiv = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    display: flex;
    
    div{
        margin: 10px;
    }
`
