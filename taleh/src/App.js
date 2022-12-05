import React from 'react';
import './App.css';
import { connect } from "react-redux";
import {Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Resept from './pages/Resept'
import Blog from './pages/Blog'
import Restoranlar from './pages/Restoranlar';
import Idman from './pages/Idman'
import Header from './components/Header';
import Footer from './components/Footer';
import Yemekresept from './pages/Yemekresept';
import Ickiresept from './pages/Ickiresept'
import Login from './pages/Login'
import Home from './pages/Home';
// import HeaderTop from './components/HeaderTop';
import Haqqinda from './pages/Haqqinda';
import Contact from './pages/Contact';
import NotFound from './NotFound';
import AddResept from './admin/AddResept';
import AddType from './admin/AddType';
import Details from './components/Details';
import AddBlog from './admin/AddBlog';
function App(props) {
  console.log(props);
  return (
    
    <div className="App">
      {/* <HeaderTop /> */}
      <Header/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/resept' element={<Resept/>}/>
        <Route path='/resept/:id' element={<Details/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/restoranlar' element={<Restoranlar/>}/>
        <Route path='/idman' element={<Idman />}/>
        <Route path='/resept/yemek_resept' element={<Yemekresept/>}/>
        <Route path='/resept/icki_resept' element={<Ickiresept/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/haqqinda' element={<Haqqinda/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<AddResept/>}/>
        <Route path='/addType' element={<AddType/>}/>
        <Route path='/addBlog' element={<AddBlog/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}
const a = (b) => b;
export default connect(a)(App);
