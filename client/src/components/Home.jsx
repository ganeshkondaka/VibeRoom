import React, { useEffect, useState } from 'react'
import { useSocket } from '../providers/Socket'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const { socket } = useSocket()

  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [roomId, setrommId] = useState()
  // socket.emit('join-room', { roomId: '1', emailId: 'apparao@gmail.com' })
  const handleJoinRoom = () => {
    socket.emit('join-room', {emailId: email, roomId  })
  }

  useEffect(()=>{
    socket.on('joined-room',({roomId})=>{
      // console.log('joined room',roomId)
      navigate(`/room/${roomId}`)
    })
  },[])

  return (
    <div className='homepage-container'>
      <div className='input-container'>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' />
        <input value={roomId} onChange={(e) => setrommId(e.target.value)} type="text" placeholder='Enter room id' />
        {/* <input type="text" placeholder='Enter room code' /> */}
        <button onClick={handleJoinRoom}>Join room</button>
      </div>
    </div>
  )
}
