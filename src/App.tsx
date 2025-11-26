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
import AdminGenre from './pages/adminGenre'
import Home from './pages/home'
import SingleMovie from './pages/singleMovie'
import UserSheetSelect from './pages/userSheetSelect'

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
        <Route path='/admin/genre' element={<AdminGenre />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/single/movie' element={<SingleMovie />}></Route>
        <Route path='/sheet' element={<UserSheetSelect />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
