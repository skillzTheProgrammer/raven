import React, { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk'

export default function AlgoraCall() {

    const appId = 'fe911605b2f6467faf4e846035abab80'
    const [remoteUsers , setRemoteUsers] = useState()

    let client = AgoraRTC.createClient({
        mode: 'rtc',
        codec: 'vp8'
    })
    client.init(appId)

    function handleJoin(){
        client.join(appId,'skillz',null,(uid)=>{
            let localStream = AgoraRTC.createStream({
                video: true,
                audio: true
            })
    
            localStream.init(()=>{
                localStream.play('me')
                client.publish('localStream')
            },(err)=>console.log('localFailed',err))
        },(err)=>console.log('joinedFailed',err))
    }

    client.on('stream-added',(event)=>{
        client.subscribe(event.localStream, (err)=>console.log(err))
    })

    client.on('stream-subscribed',(event)=>{
        let stream = event.stream
        let streamId = String(stream.getId())
        setRemoteUsers([...remoteUsers,streamId])
        stream.play(streamId)
    })

    client.on('stream-removed',(event)=>{
        let stream = event.stream
        let streamId = String(stream.getId())
        stream.close(streamId) 
        let onlineUsers = remoteUsers.filter((user)=> user !== streamId)
        setRemoteUsers([...onlineUsers])
    })

    client.on('peer-leave',(event)=>{
        let stream = event.stream
        let streamId = String(stream.getId())
        stream.close(streamId) 
        let onlineUsers = remoteUsers.filter((user)=> user !== streamId)
        setRemoteUsers([...onlineUsers])
    })
    
    useEffect(()=>{
    })
    return (
        <div>
            <h1>Algora RTC</h1>
            <button onClick={handleJoin}>Local Stream</button>
        </div>
    )
}
