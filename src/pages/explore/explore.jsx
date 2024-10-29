import { useState } from 'react';
import './explore.css';
import HeaderLogo from '../../assets/Cloud logo.svg';
import Rectangle1 from '../../assets/Rectangle 17.svg';
import Rectangle2 from '../../assets/Rectangle 17 (1).svg';
import Rectangle3 from '../../assets/Rectangle 17 (2).svg';
import { Link } from 'react-router-dom';

const listings = [
  { id: 1, name: 'Microalgae Panels', description: "We are a passionate team of environmental innovators dedicated to combating climate change through nature-inspired solutions. Our mission is to harness the power of microalgae to capture CO₂ from the atmosphere, reducing greenhouse gases and supporting a healthier planet.", image: Rectangle1 },
  { id: 2, name: 'How CO₂ is Reduced', description: "The microalgae in these panels absorb CO₂ and convert it into oxygen through photosynthesis.This natural mechanism not only captures carbon dioxide but also helps maintain the balance of gases in the air. As microalgae grow, they utilize the carbon dioxide, effectively lowering its concentration in the atmosphere. ", image: Rectangle2 },
  { id: 3, name: 'Benefits of Microalgae Panels', description: "Microalgae panels effectively reduce CO₂ levels, combating climate change, improving air quality, and enhancing energy efficiency in buildings, making them a vital component of sustainable urban and industrial solutions. Their use not only promotes a healthier environment but also supports the transition to greener technologies", image: Rectangle3 },
];

const Explore = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleOpenOverlay = (id) => {
    setActiveOverlay(id);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <>
        <header>
              <div className="navbar">
                <div className='navbar-head'>
                  <Link to="/"> <img src={HeaderLogo} alt="HeaderLogo" /></Link>
                  <Link className="logo-link" to="/"> <h1 className="logo1">EcoMinds</h1></Link>
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
                  <Link to="/login" className="authl-buttons-log">Log in</Link>
                  <a href="#" className="authl-buttons-trail">Start Free Trail</a>
                </div>
              </div>
        </header>

      <section className="explore-section">
        <div className="explore-header">
          <h2>Explore learn more informations</h2>
        </div>

        <div className="listing-cards">
          {listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              <img src={listing.image} alt={listing.name} className="listing-image" />
              <div className="listing-info">
                <h3>{listing.name}</h3>
                <button onClick={() => handleOpenOverlay(listing.id)}><span className="arrow">→</span></button>
              </div>

              {/* Overlay */}
              {activeOverlay === listing.id && (
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{listing.name}</h3>
                    <p>{listing.description}</p>
                    <button className="close-btn" onClick={handleCloseOverlay}>Close</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="progress-bar"></div>
      </section>
    </>
  );
};

export default Explore;
