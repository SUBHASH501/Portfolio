import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import homeanime from './../../assets/home_anime.gif';
import Resume from './../../assets/Resume.pdf';
import profile from './../../assets/profile.jpg'

class Home extends Component {
     state={showModal:false};

     componentDidMount(){
       setTimeout(()=>{
           this.setState({showModal:true});
       },2400);
     }
     closeModal=()=>{
         this.setState({showModal:false});
     }

  render() {
    return (
      <div className='home-container'>
            
          <div className="header-text">
            <h1>Welcome to My portfolio</h1>
            <img src={profile} alt="Profile" className='profile' />
            <p>This is Subhash, A MERN stack developer</p>
          </div>

         <div className="head-btn">
             <Link to="/about" className='btn btn-transparent'>
               <p className="btn-text">Know More About Me</p>
             </Link>
             <Link to="/contact" className='btn btn-transparent'>
               <p className="btn-text">Connect with me</p>
             </Link>
         </div> 

         <div className='resume-btn'>
            <button className='btn btn-transparent'>
              <a className='btn-resume btn-text' href={Resume} download="Resume.pdf">Download Resume</a>
            </button>
         </div>

         <div className="splash-image">
           <img src={homeanime} alt="Home Animation" className='home-anime'/>
         </div>
      </div>
    )
  }
}

export default Home
