import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Herobar from "./components/Herobar";
import Statistics from "./components/Statistics";
import Explore from "./components/Explore";
import Reviews from "./components/Reviews";
import Faq from "./components/Questions";
import Footer from "./components/Footer";
import About from "./components/About";
import Price from "./components/Price";

// to start run node .\server.jsgit

function App() {
  const [array, setArray] = useState([]); // fetched data to put in state variable

  // using axios, fetches data backend
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080"); // where we stored the data
    setArray(response.data.blogPost);
  }

  
  useEffect(() => {
    fetchData();
  }, [])

  return (
  <div>

  <Navbar/>
  <Herobar/> 
  <section id='feature'>
  <Statistics/>   
  </section>  
  <Explore/>
  <section id='review'>
    <Reviews/>
    </section>  
  <section id='pricing'>
    <Price/>
  </section>       
  <section id='FAQ'>
    <Faq/>
  </section>  
  <section id='about'>
    <About/>
  </section>  
  <Footer/>
  </div>
  )
}

export default App
