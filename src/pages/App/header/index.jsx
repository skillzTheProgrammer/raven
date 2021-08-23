import React from 'react'
import { NavBody, ProfileImage, RDiv, RecordingDiv, Text, WatchDiv } from './style'
import ham from 'assets/app/hamburger.svg'
import pause from 'assets/app/break.svg'
import rec from 'assets/app/record.svg'
import watcher from 'assets/app/watching.svg'

export default function AppNav({users='0', recordStatus='Record Screen'}) {
    return (
        <NavBody>
            <RDiv>
                <img style={{cursor: 'pointer'}} src={ham} alt='ham' />
                <Text>Meeting Conference</Text>
            </RDiv>
            <img src={pause} alt='break' />
            <RDiv>
                <RecordingDiv>
                    <img src={rec} alt='rec' />
                    <p>{recordStatus}</p>
                </RecordingDiv>
                <WatchDiv style={{width:'200px'}}>
                    <img src={watcher} alt='watch' />
                    <p>{users + 1} user(s)</p>
                </WatchDiv>
                <ProfileImage>
                    
                </ProfileImage>
            </RDiv>
        </NavBody>
    )
}
