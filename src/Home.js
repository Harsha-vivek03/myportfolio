import {Link} from 'react-router-dom'
import img1 from './images/harsha.jpg'
import React from 'react'
import Header from './Header'
import './Home.css'
const Home = () => {
  return (
    <div >  
       <Header/>
        <div className="home">
            <img src={img1} align="right" /> 
            <h1>I am Harsha vivek Gangadhar </h1>
            <div className="paras">
            <p1>I'm an Information Technology student at JNTUGV Vizianagaram. My roll number is 23VV1A1249. I come from a supportive family. My father, Sirla Bhagavan, is a farmer, and my mother, Sirla Chinnammudu, is a homemaker. I have a younger sister, Sirlayamani, who is currently in 10th grade at ZPHS School, Urlam. My long-term goal is to become a Navy Officer. </p1>
            </div>

           <Link to="/about"> <button>About Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
        </div>


    </div>
  )
}

export default Home
