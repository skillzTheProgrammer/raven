import BrandColors from 'GlobalStyles/utils/colors'
import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const HomeBody = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${BrandColors.black};
    color: ${BrandColors.white};
    padding: 0 60px;

    ${media.mobile`
        padding: 0 20px;
    `}
`