import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from '../pages/Login/login';
import Signuppage from '../pages/Signup/singup';
import Home from '../pages/Home';

// import AdminDashboard from './../components/Dashboard/index';
import AdminDashboardComponent from '../pages/Dashboard/adminDashboard';
import AllBooks from '../pages/Dashboard/allBooks';
import Students from '../pages/Dashboard/students';
import AdminRoute from './admin';


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* <Route path='/' element={<Section1 />}/> */}
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<Home />} />
          {/* <Route path="/adminDashboard" element={<AdminRoute />}>  */}
          <Route path='/adminDashboard' element={<AdminDashboardComponent />} />
          <Route path='/adminDashboard/admin/Books' element={<AllBooks/>} />
          <Route path='/adminDashboard/admin/students' element={<Students/>} />        
          {/* </Route> */}
          {/* <Route path='/' element={<Example />} /> */}
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
