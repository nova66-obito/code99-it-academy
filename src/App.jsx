import { useState } from 'react'
import './App.css'
import Nav from './navbar'
import Overall from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer.jsx';
import CourseLink from './pages/linkcourse.jsx';
import Coursepage from './pages/uiux.jsx';
import Javacourse from './pages/course-java.jsx';
import Webdevelop from './pages/course-web.jsx';
import Pythoncourse from './pages/course-python.jsx';
import Digitalmarket from './pages/coursedigital.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
     <BrowserRouter>
        <Nav/>
        <Routes>
           <Route path='/' element={<Overall/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/courselink' element={<CourseLink/>}/>
           <Route path='/course' element={<Coursepage/>}/>
           <Route path='/java' element={<Javacourse/>}/>
           <Route path='/web' element={<Webdevelop/>}/>
           <Route path='/python' element={<Pythoncourse/>}/>
           <Route path='/digital' element={<Digitalmarket/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </>
  )
}
export default App
