import { useRef } from "react"
import { useState } from "react"
import "./Register.scss"

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const emailRef = useRef()
    const passwordRef = useRef()


    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className="register">
        <div className="top">

            <div className="wrapper">

                <img 
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="netflix-logo" 
                />
        
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        
        <div className="container">
            <h1>Unlimited Movies, TV shows, and more</h1>
            <h2>Watch Anywhere. cancel anytime</h2>
            <p>
                Ready to Watch? Enter your email to create or restart your membership.
            </p>

            {
                !email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef}/>
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )
            }

            
        </div>
        
    </div>
  )
}

export default Register