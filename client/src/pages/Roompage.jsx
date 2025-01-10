import React, { useEffect } from 'react'
import { useSocket } from '../providers/Socket'

export default function Roompage() {
    const { socket } = useSocket()
    const handleNewUserJoined = (data ) => {
        const { emailId } = data
        console.log('new user joined', emailId)
    }

    useEffect(() => {
        socket.on("user-joined", handleNewUserJoined)
    }, [socket])

    return (
        <div>hey man you are in room</div>
    )
}
