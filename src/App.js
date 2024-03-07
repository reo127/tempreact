import { Suspense, useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import axios from "axios"

function App() {
  useEffect( async ()=> {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users")
  },[])
  const [data, setData] = useState("i am data")
  const [apidata, setApidata] = useState([])

  return (
    <>
      {/* <Navbar />
      <Hero />
      <About/>
      <Contact/>
      <Footer /> */}

      <Navbar setData={setData} />
      <Routes>
        <Route path="/" element={ <Hero/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact mydata={data} seconddata="fsaf" /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
