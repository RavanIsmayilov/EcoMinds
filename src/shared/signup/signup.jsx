import "./signup.css"
import HeaderLogo from '../../assets/Cloud logo.svg'
import FaceLogo from '../../assets/Frame 277.svg'
import AppLogo from '../../assets/Frame 777.svg'
import GoogleLogo from '../../assets/Frame 77.svg'
import TwitLogo from '../../assets/Frame 7.svg'
import { Link } from "react-router-dom"



const SignUp = () => {

    return(
        <>
      <header>
              <div className="navbar">
                <div className='navbar-head'>
                  <img src={HeaderLogo} alt="HeaderLogo" />
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
                  <Link to="/login" className="authl-buttons-log">Log In</Link>
                  <a href="#" className="authl-buttons-trail">Start Free Trail</a>
                </div>
              </div>
          </header>

        <section className="login-container">
            <div className="login-form"> 
            <h2>Sign Up</h2>
            <form>
                <div className="login-form-head">
                    <div className="login-form-head-input">
                        <label htmlFor="email">First Name</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="login-form-head-input">
                        <label htmlFor="password">Last Name</label>
                        <input type="password" id="password"name="password" required/>
                    </div>

                </div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email"name="email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"name="password" required/>

                <button type="submit" className="login-form-btn">Sign Up</button>

                <div className="social-login">
                    <a href="#"><i className="fab fa-facebook-f"></i><img src={FaceLogo} alt="FaceLogo" /></a>
                    <a href="#"><i className="fab fa-instagram"></i><img src={AppLogo} alt="AppLogo" /></a>
                    <a href="#"><i className="fab fa-google"></i><img src={GoogleLogo} alt="GoogleLogo" /></a>
                    <a href="#"><i className="fab fa-twitter"></i><img src={TwitLogo} alt="TwitLogo" /></a>
                </div> 
            </form>
            </div>
        </section>
        </>
    )
}

export default SignUp