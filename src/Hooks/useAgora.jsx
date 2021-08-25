import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useAuthContext } from 'context/AuthContext';
import { LOGIN } from 'Routes/route';

// const appCert = '1a907b60fce842268242f8f62e371b62'
const appId = 'fe911605b2f6467faf4e846035abab80'

//should have stored in env but no need really since its for test
const temptoken = '006fe911605b2f6467faf4e846035abab80IADWrrOTJhGAAY7bQQQzlTGMF9exjziIcKFFLdN8Ig8vB2nabjEAAAAAEAA8nW45w5knYQEAAQDBmSdh'
const channel = 'Elliot'


const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });

export default function useAgora() {

  const [localVideoTrack, setLocalVideoTrack] = useState(undefined);
  const [localAudioTrack, setLocalAudioTrack] = useState(undefined);
  const {setUser} = useAuthContext()

  const [joinState, setJoinState] = useState(false);

  const [remoteUsers, setRemoteUsers] = useState([]);

  


  async function createLocalTracks(audioConfig, videoConfig) {
    const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks(audioConfig, videoConfig);
    setLocalAudioTrack(microphoneTrack);
    setLocalVideoTrack(cameraTrack);
    return [microphoneTrack, cameraTrack];
  }

  async function shareScreen(){
    const screenTrack = await AgoraRTC.createScreenVideoTrack({
      screenSourceType:'screen',
      encoderConfig: '1080p_1',
      optimization: 'detail'
    });
    await client.publish(screenTrack);

    return client;
  }

  async function join(uid='skillzTest') {
    if (!client) return;
    const [microphoneTrack, cameraTrack] = await createLocalTracks();
    
    await client.join(appId, channel, temptoken, uid);
    await client.publish([microphoneTrack, cameraTrack]);

    (window).client = client;
    (window).videoTrack = cameraTrack;

    setJoinState(true);
  }

  async function leave() {

    if (localAudioTrack) {
      localAudioTrack.stop();
      localAudioTrack.close();
    }
    if (localVideoTrack) {
      localVideoTrack.stop();
      localVideoTrack.close();
    }
    setRemoteUsers([]);
    setJoinState(false);
    await client?.leave();

    setUser({
      isAuth: false,
    })
    window.location.href = LOGIN
  }

  useEffect(() => {
    if (!client) return;
    setRemoteUsers(client.remoteUsers);

    const handleUserPublished = async (user, mediaType ) => {
      await client.subscribe(user, mediaType);
      // toggle rerender while state of remoteUsers changed.
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserUnpublished = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserJoined = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserLeft = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    client.on('user-published', handleUserPublished);
    client.on('user-unpublished', handleUserUnpublished);
    client.on('user-joined', handleUserJoined);
    client.on('user-left', handleUserLeft);

    return () => {
      client.off('user-published', handleUserPublished);
      client.off('user-unpublished', handleUserUnpublished);
      client.off('user-joined', handleUserJoined);
      client.off('user-left', handleUserLeft);
    };
  }, []);

  return {
    localAudioTrack,
    localVideoTrack,
    joinState,
    leave,
    join,
    remoteUsers,
    client,
    shareScreen
  };
}