import "./Navbar.scss"
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {


    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        
        setIsScrolled(window.pageYOffset === 0 ? false : true);

        return () => (window.onscroll = null) ;
    } 





  return (
    <div className= {isScrolled ? "navbar scrolled" : "navbar"} >
        <div className="container">
            <div className="left">
                <img 
                    src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" 
                    alt="netflix-logo" 
                />

                <Link to="/" className="link">
                    <span> Homepage </span>
                </Link>
                
                <Link to="/series" className="link">
                    <span> Series </span>
                </Link>

                <Link to="/movies" className="link">
                    <span> Movies </span>
                </Link>
                
                <span> New and Popular </span>
                <span> My List </span>
                

            </div>
            
            <div className="right">
                <Search className="icon" />
                <span>KID</span>
                <Notifications className="icon" />
                <img
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" 
                    alt="profile pic" 
                />
                <div className="profile">
                    <ArrowDropDown className="icon" />
                    
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
