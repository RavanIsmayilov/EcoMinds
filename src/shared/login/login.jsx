import "./login.css"
import HeaderLogo from '../../assets/Cloud logo.svg'
import FaceLogo from '../../assets/Frame 277.svg'
import AppLogo from '../../assets/Frame 777.svg'
import GoogleLogo from '../../assets/Frame 77.svg'
import TwitLogo from '../../assets/Frame 7.svg'
import { Link } from "react-router-dom"



const Login = () => {

    return(
        <>
        <header>
              <div className="navbar">
                <div className='navbar-head'>
                  <Link to="/"> <img src={HeaderLogo} alt="HeaderLogo" /></Link>
                  <h1 className="logol">EcoMinds</h1>
                </div>
                <nav>
                  <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><a href="#">Listings</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </nav>
                <div className="authl-buttons">
                  <Link to="/signup" className="authl-buttons-log">Sign Up</Link>
                  <a href="#" className="authl-buttons-trail">Start Free Trail</a>
                </div>
              </div>
          </header>

             
        <section className="login-container">
            <div className="login-form"> 
            <h2>Log in</h2>
            <p>New to Design Space? <Link to="/signup">Sign up for free</Link></p>
            <form>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"name="password" required/>

                <a href="#">Forget 
            password?</a>

                <button type="submit" className="login-form-btn">Log In</button>

                <div className="social-login">
                    <a href="#"><i className="fab fa-facebook-f"></i><img src={FaceLogo} alt="FaceLogo" /></a>
                    <a href="#"><i className="fab fa-instagram"></i><img src={AppLogo} alt="AppLogo" /></a>
                    <a href="#"><i className="fab fa-google"></i><img src={GoogleLogo} alt="GoogleLogo" /></a>
                    <a href="#"><i className="fab fa-twitter"></i><img src={TwitLogo} alt="TwitLogo" /></a>
                </div> 
                <button className="lock">Log in with Company Mail</button>
            </form>
            </div>
        </section>
        </>
    )
}

export default Login