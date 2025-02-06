


import { Header } from "../components/Header";
import {Greeting} from "../components/Greeting"
import { Map } from "../components/Map";
import { Footer } from "../components/Footer";
import { FaQ } from "../components/FaQ";
import { Feature } from "../components/Feature";



const Home = () => {
  return (
   <>
    
        <Header />

        <Greeting />

        
    
        <FaQ />
        <Feature />
        <Map />
        <Footer/>

   </>

  )
}

export default Home