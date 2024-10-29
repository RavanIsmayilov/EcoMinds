import "./main.css"
import { Link } from "react-router-dom"
import HeaderLogo from '../../assets/Cloud logo.svg'



const Main = () => {

    return(
        <>
        <header>
              <div className="navbar">
                <div className='navbar-head'>
                  <img src={HeaderLogo} alt="HeaderLogo" />
                  <h1 className="logol">EcoMinds</h1>
                  <input type="text" placeholder="Search" />
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
                  <Link to="/login" className="authl-buttons-trail">Log In</Link>
                </div>
              </div>
          </header>

          <section className="main">
            <div className="texts">
                <span className="texts-title">Breathe Easier with CarbonPanel:</span>
                <span className="texts-subtitle">Our Solution to Cleaner Air and a Greener Future!</span>
                <p className="texts-info">Take a step towards sustainability with our innovative panels that capture CO₂ directly from the air, reducing pollution and producing clean oxygen to revitalize urban spaces.</p>
                <button className="main-btn"><Link className="main-btn-link" to="/explore">Explore</Link></button>
            </div>
          </section>
        </>
    )
}

export default Main