import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { LayoutApp } from './layouts/LayoutApp'
import { LayoutMain } from './layouts/LayoutMain'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Reserve } from './pages/Reserve'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutApp />} >
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='reserve' element={<Reserve />} />
          </Route>
          <Route path='/' element={<LayoutMain />}>
            <Route path='services' element={<Services />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
