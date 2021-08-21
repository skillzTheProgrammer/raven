import React, { useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from 'Hooks/useAgora';
import MediaPlayer from 'components/MediaPlayer';


const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });
// const appCert = '1a907b60fce842268242f8f62e371b62'
// const appId = 'fe911605b2f6467faf4e846035abab80'
// const temptoken = '006fe911605b2f6467faf4e846035abab80IAB4YPU9sE38GtG4OTRPBIq5IRhSTXiu6D4HmD0Se/napdSu7awAAAAAEABGxiZq0ywiYQEAAQDSLCJh'

function Call() {
  const [ appid, setAppid ] = useState('');
  const [ token, setToken ] = useState('');
  const [ channel, setChannel ] = useState('');
  const {
    localAudioTrack, localVideoTrack, leave, join, joinState, remoteUsers
  } = useAgora(client);

  

  return (
    <div className='call'>
      {console.log('remote',(remoteUsers))}
      <form className='call-form'>
        <label>
          AppID:
          <input type='text' name='appid' onChange={(event) => { setAppid(event.target.value) }}/>
        </label>
        <label>
          Token(Optional):
          <input type='text' name='token' onChange={(event) => { setToken(event.target.value) }} />
        </label>
        <label>
          Channel:
          <input type='text' name='channel' onChange={(event) => { setChannel(event.target.value) }} />
        </label>
        <div className='button-group'>
          <button id='join' type='button' className='btn btn-primary btn-sm' disabled={joinState} onClick={() => {join(appid, channel, token)}}>Join</button>
          <button id='leave' type='button' className='btn btn-primary btn-sm' disabled={!joinState} onClick={() => {leave()}}>Leave</button>
        </div>
      </form>
      <div className='player-container'>
        <div className='local-player-wrapper'>
          <p className='local-player-text'>{localVideoTrack && `localTrackx`}{joinState && localVideoTrack ? `(${client.uid})` : ''}</p>
          <MediaPlayer videoTrack={localVideoTrack} audioTrack={localAudioTrack}></MediaPlayer>
        </div>
        {remoteUsers.map(user => (<div className='remote-player-wrapper' key={user.uid}>
            <p className='remote-player-text'>{`remoteVideo(${user.uid})`}</p>
            <h1>Users</h1>
            <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack}></MediaPlayer>
          </div>))}
      </div>
    </div>
  );
}

export default Call;
