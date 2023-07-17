import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';


class GoHome extends Component {

    constructor() {
        super()
      
        this.state = {
           btn:"white",
        }
      }

      updatebtn=()=>{
        if(this.state.btn ==="white")
        {
        this.setState({
            btn:"black",
        });
       }else{
        this.setState({
            btn:"white",
        });
       }
    }

    render() { 

    return (
      <div>
        <Link to="/" className='bg'  onClick={()=>this.updatebtn()}>
           <img 
            src={this.state.btn==="white"?homeIconBlack:homeIconWhite }
            className={this.state.btn==="white"?"greybg":"whitebg"} id="pic" alt="home-icon"/>
        </Link>
      </div>
    )
  }
}

export default GoHome;
