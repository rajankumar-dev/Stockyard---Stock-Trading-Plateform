import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Homepage from './landing_page/home/Homepage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import About from './landing_page/about/AboutPage.jsx'
import Product from './landing_page/products/ProductsPage.jsx'
import Pricing from './landing_page/pricing/PricingPage.jsx'
import Support from './landing_page/support/SupportPage.jsx'
import Footer from './landing_page/Footer.jsx'
import Navbar from './landing_page/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
