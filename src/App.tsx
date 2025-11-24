import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AdminDashboard from './pages/adminDashboard'
import AdminSignin from './pages/adminSignIn'
import AdminLanding from './pages/userLanding'
import AdminDashboard2 from './pages/adminDashboard2'
import AdminCinema from './pages/adminCinema'
import AdminCinemaPending from './pages/adminCinemaPending'
import AdminCinemaRejected from './pages/adminCinemaRejected'
import AdminScreen from './pages/adminScreen'
import AdminMovie from './pages/adminMovie'
import AdminMovieRequest from './pages/adminMovieRequest'
import AdminUser from './pages/adminUser'
import AdminCinemaOwner from './pages/adminCinemaOwner'
import AdminAdmin from './pages/adminAdmin'
import AdminBooking from './pages/adminBooking'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<AdminLanding />}></Route>
        <Route path='/signin' element={<AdminSignin />}></Route>
        <Route path='/dashboard1' element={<AdminDashboard />}></Route>
        <Route path='/dashboard2' element={<AdminDashboard2 />}></Route>
        <Route path='/cinema' element={<AdminCinema />}></Route>
        <Route path='/cinema/pending' element={<AdminCinemaPending />}></Route>
        <Route path='/cinema/rejected' element={<AdminCinemaRejected />}></Route>
        <Route path='/screen' element={<AdminScreen />}></Route>
        <Route path='/movie' element={<AdminMovie />}></Route>
        <Route path='/movie/request' element={<AdminMovieRequest />}></Route>
        <Route path='/admin/user' element={<AdminUser />}></Route>
        <Route path='/admin/owner' element={<AdminCinemaOwner />}></Route>
        <Route path='/admin/admin' element={<AdminAdmin />}></Route>
        <Route path='/admin/booking' element={<AdminBooking />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
