import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Review from './components/Review'
import Typed from 'typed.js'
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import Footer from './components/Footer'
export default function App() {
  useEffect(() => {
    // Initialize Typed.js once the component has mounted
    new Typed('#element', {
      strings: ['hotels', 'malls','theaters','tourist places','saloons','parlours','parks','concerts'],
      typeSpeed: 50,
    });
  }, []);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='container d-flex align-items-center justify-content-center my-3'>
      Search Best... <strong><span id="element" style={{color:'blue'}}></span></strong>
    </div>
      <Routes>
        <Route path='/postReview' element={<Review/>}>
        </Route>
        <Route path='/' element={<Main/>}>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}