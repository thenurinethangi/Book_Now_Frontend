import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AdminDashboard from './pages/adminDashboard'
import AdminSignin from './pages/adminSignIn'
import AdminLanding from './pages/userLanding'
import AdminDashboard2 from './pages/adminDashboard2'
import AdminCinema from './pages/adminCinema'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<AdminLanding />}></Route>
        <Route path='/signin' element={<AdminSignin />}></Route>
        <Route path='/dashboard1' element={<AdminDashboard />}></Route>
        <Route path='/dashboard2' element={<AdminDashboard2 />}></Route>
        <Route path='/cinema' element={<AdminCinema />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
