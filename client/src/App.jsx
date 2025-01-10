
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { SocketProvider } from './providers/Socket'
import Roompage from './pages/Roompage'

function App() {
  return (
    <div>
      <SocketProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:roomId' element={<Roompage />} />
        </Routes>
      </SocketProvider>
    </div>
  )
}

export default App
