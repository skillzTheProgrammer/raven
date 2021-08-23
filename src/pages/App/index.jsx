import MediaPlayer from 'components/MediaPlayer/MediaPlayer'
import { useAuthContext } from 'context/AuthContext'
import useAgora from 'Hooks/useAgora'
import React from 'react'
import AppFooter from './footer/AppFooter'
import AppNav from './header'
import { ApplicationBody, AppBodyDiv } from './style'

export default function Application() {

    const {user} = useAuthContext()
    const {remoteUsers, localVideoTrack, joinState,client,localAudioTrack,join} = useAgora()

    // const joinStream = useCallback(()=>{
    //   join(user.data.name)
    // })


    return (
        <ApplicationBody onLoad={()=>join(user.data.name)}>
            <AppNav
                users={remoteUsers.length}
            />
            <AppBodyDiv >
                <MediaPlayer user='Local'  userID={client.uid} videoTrack={localVideoTrack} audioTrack={localAudioTrack}></MediaPlayer>
                {joinState?remoteUsers?.map(user => (                 
                    <MediaPlayer key={user.uid} user='Remote' userID={user.uid} videoTrack={user.videoTrack} audioTrack={user.audioTrack}></MediaPlayer>
                )):null}
            </AppBodyDiv>
            <AppFooter />
        </ApplicationBody>
    )
}
