import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../Admin/Admin'
import Privateroute from '../Privateroute/Privateroute'
import AyurvedaProducts from './AyurvedaProducts'
import Diabetes from './Diabetes'
import Featured from './Featured'
import HealthcareDevice from './HealthcareDevice'
import HealthCondition from './HealthCondition'
import HealthResource from './HealthResource'
import Homeopathy from './Homeopathy'
import Homepage from './Homepage'
import { Login } from './Login'
// import Login from './Login'
import PageNotfound from './PageNotfound'
import Payment from './Payment'
import PersonalCare from './PersonalCare'
import Products from './Products'
import SignleProduct from './SignleProduct'
import VitaminNutrition from './VitaminNutrition'
// import Signup from './Signup'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}/>
        {/* <Route path="/signup" element={<Signup />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<SignleProduct />}/>
        <Route path="*" element={<PageNotfound />}/>
        <Route path='/admin' element={<Admin />}/>
        {/* Product Page url */}
        <Route path='/health-resource' element={<Privateroute><HealthResource/></Privateroute>}/>
        <Route path='/vitamin-nutritiion' element={<VitaminNutrition/>}/>
        <Route path='/diabetes' element={<Diabetes/>}/>
        <Route path='/health-device' element={<HealthcareDevice/>}/>
        <Route path='/personal-care' element={<PersonalCare/>}/>
        <Route path='/health-condition' element={<HealthCondition/>}/>
        <Route path='/ayurveda-products' element={<AyurvedaProducts/>}/>
        <Route path='/homeopathy' element={<Homeopathy/>}/>
        <Route path='/featured' element={<Featured/>}/>
    </Routes>
  )
}

export default AllRoutes