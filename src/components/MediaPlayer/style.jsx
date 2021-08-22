import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const MediaBody = styled.div`
    margin: 0px !important;
    margin-right: 15px !important;
    width: 400px;

    ${media.mobile`
        width: 100% !important;
    `}
`

export const MediaDiv = styled.div`
    height: 400px;
    width: 350px;
    padding:0;
    margin: 0 !important;

    ${media.mobile`
        width: 100% !important;
    `}
`