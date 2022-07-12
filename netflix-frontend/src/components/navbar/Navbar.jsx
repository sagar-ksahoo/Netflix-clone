import "./Navbar.scss"
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

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

                <span> Homepage </span>
                <span> Series </span>
                <span> Movies </span>
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
