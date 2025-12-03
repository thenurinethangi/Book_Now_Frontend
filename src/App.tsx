import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
import UserTicketSelect from './pages/userTicketSelect'
import UserSignin from './pages/userSignIn'
import OwnerSignin from './pages/ownerSignIn'
import SeatDesigner from './pages/x'
import UserSignup from './pages/userSignUp'
import OwnerSignup from './pages/ownerSignUp'
import CinemaLanding from './pages/CinemaLanding'
import CinemaDashboard from './pages/cinemaDashboard'
import CinemaScreen from './pages/cinemaScreen'
import CinemaScreenAdd from './pages/cinemaScreenAdd'
import CinemaTransaction from './pages/cinemaTransaction'
import CinemaBooking from './pages/cinemaBooking'
import CinemaShowTime from './pages/cinemaShowTime'
import CinemaAddShowtime from './pages/cinemaAddShowtime'
import CinemaMovie from './pages/cinemaMovie'
import CinemaAddMovie from './pages/cinemaAddMovie'
import CinemaRequestMovie from './pages/cinemaMovieRequest'
import OTPModel from './components/cinema/OTPModel';
import RowColQsModel from './components/cinema/RowColQsMpdel';

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss theme="dark" toastStyle={{ background: "#121212", color: "#ffffff", borderRadius: "8px", border: "1px solid #2a2a2a", padding: "14px 16px", fontSize: "14.5px", fontFamily: "Poppins, sans-serif", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.45)"}} progressStyle={{background: "#e50914"}} closeButton={false}/>
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
          <Route path='/ticket' element={<UserTicketSelect />}></Route>
          <Route path='/user/signin' element={<UserSignin />}></Route>
          <Route path='/owner/signin' element={<OwnerSignin />}></Route>
          <Route path='/seats' element={<SeatDesigner />}></Route>
          <Route path='/user/signup' element={<UserSignup />}></Route>
          <Route path='/owner/signup' element={<OwnerSignup />}></Route>
          <Route path='/cinema/landing' element={<CinemaLanding />}></Route>
          <Route path='/cinema/dashboard' element={<CinemaDashboard />}></Route>
          <Route path='/cinema/screen' element={<CinemaScreen />}></Route>
          <Route path='/owner/screen/add' element={<CinemaScreenAdd />}></Route>
          <Route path='/owner/transaction' element={<CinemaTransaction />}></Route>
          <Route path='/owner/booking' element={<CinemaBooking />}></Route>
          <Route path='/owner/showtime' element={<CinemaShowTime />}></Route>
          <Route path='/owner/add/showtime' element={<CinemaAddShowtime />}></Route>
          <Route path='/cinema/movie' element={<CinemaMovie />}></Route>
          <Route path='/cinema/movie/add' element={<CinemaAddMovie />}></Route>
          <Route path='/cinema/movie/request' element={<CinemaRequestMovie />}></Route>
          <Route path='/otp' element={<OTPModel />}></Route>
          <Route path='/qs' element={<RowColQsModel />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
