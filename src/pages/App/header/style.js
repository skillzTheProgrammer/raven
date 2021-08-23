import BrandColors from 'GlobalStyles/utils/colors'
import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const NavBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100% !important;
    height: 70px;
    padding: 0 20px;
    background-color: #111111;
    overflow: overlay;
`

export const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    margin-left: 40px;
`

export const RDiv = styled.div`
    display: flex;
    align-items: center;

    ${media.mobile`
        margin-right: 10px;
   `}
`

export const WatchDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

    img{
        width: 18px;
        height: 18px;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${BrandColors.gold};
        margin-left: 5px;
    }

    ${media.mobile`
        margin-right: 10px;
   `}
`
export const RecordingDiv = styled.div`
    border: 1px solid #353535;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    padding: 10px;
    cursor: pointer;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${BrandColors.red};
        margin-left: 10px;
    }

    ${media.mobile`
        margin: 0 10px;
   `}
`

export const ProfileImage = styled.div`
    width: 40px;
    height: 40px;
    background: #C4C4C4;
    border-radius: 16px;
`