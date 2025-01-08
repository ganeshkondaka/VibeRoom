import React from 'react'

export default function Home() {
  return (
    <div className='homepage-container'>
        <div>
            <input type="email" placeholder='Enter email'/>
            <input type="text" placeholder='Enter room code'/>
            <button>Join room</button>
        </div>
    </div>
  )
}
