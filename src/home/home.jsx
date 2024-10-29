import "./home.css";
import { useState } from 'react'
import Tree from '../assets/Group 4.svg'
import HomeEnd from '../assets/Frame 16.svg'
import HeaderLogo from '../assets/Cloud logo.svg'
import JourneyLogo from '../assets/Group.svg'
import JourneyLogo2 from '../assets/Group333.svg'
import JourneyLogo3 from '../assets/Group 3.svg'
import StartedLogoAlt from '../assets/Frame 340.svg'
import StartedLogo from '../assets/Frame 190.svg'
import { Link } from "react-router-dom";


const Home = () =>{
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    return(
        <>
        <section className='home'>
          <section className='home-head'>
          <header>
              <div className="navbar">
                <div className='navbar-head'>
                  <img src={HeaderLogo} alt="HeaderLogo" />
                  <h1 className="logo">EcoMinds</h1>
                </div>
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Listings</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </nav>
                <div className="auth-buttons">
                  <Link to="/login" className="login">Log in</Link>
                  <Link to="/signup" className="get-started">Sign Up</Link>
                </div>
              </div>
            </header>
            
            <main>
              <section className="hero">
                <h2> The Green Cities, Clear <br /> Skies</h2>
                <p>Reduce waste, make eco-friendly swaps, and inspire change <br /> together with us.</p>
                <div className="buttons">
                  <Link to="/explore" className="secondary-btn">Learn More</Link>
                </div>
              </section>
            </main>

            <footer className='footer1'>
              <div className="background-trees">
                <img className='background-trees-icon' src={Tree} alt="Tree" />
                <img className='background-trees-icon' src={Tree} alt="Tree" />
              </div>
              <img className='footer1-end' src={HomeEnd} alt="HomeEnd" />
            </footer>
          </section>

          {/* <section className='companies'>
              <span className='companies-title'>trusted by these companies</span>
            <div className='companies-main'>
              <img className='' src={CompanyLogo} alt="CompanyLogo" />
              <img className='' src={CompanyLogo} alt="CompanyLogo" />
              <img className='' src={CompanyLogo} alt="CompanyLogo" />
              <img className='' src={CompanyLogo} alt="CompanyLogo" />
            </div>
          </section> */}

          <section className="journey">
              <div className='journey-head'>
                <h3 className="section-title">HOW IT WORKS</h3>
                <h1 className="main-title">Advancements and Challenges <br />
                in Microalgae Technology </h1>
              </div>
              
              <div className="steps">
                  <div className="step">
                      <img src={JourneyLogo} alt="Create Profile Icon" className="icon"/>
                      <h2>Technology and Research</h2>
                      <p>Microalgae panels use photosynthesis to absorb CO₂ efficiently, with automated sensors to maintain optimal conditions for continuous carbon capture.</p>
                  </div>
                  <div className="step">
                      <img src={JourneyLogo2} alt="Find Match Icon" className="icon"/>
                      <h2>Laboratory Studies</h2>
                      <p>In laboratories, scientists analyze various microalgae species for CO₂ absorption efficiency, adaptability, and resilience to optimize their performance in diverse environmental settings.</p>
                  </div>
                  <div className="step">
                      <img src={JourneyLogo3} alt="Initiate Swap Icon" className="icon"/>
                      <h2>Future Direction</h2>
                      <p>Future research aims to enhance microalgae resilience, develop self-cleaning panels, and improve scalability for broader CO₂ capture applications.</p>
                  </div>
              </div>
          </section>

          {/* <section className="subscribe-section">
            <img src={CommunityLogo} alt="CommunityLogo" />
          <div className="content">
              <h1>Join the Conversations</h1>
                  <div className="newsletter">
                      <h2>Subscribe To The Newsletter</h2>
                      <form className="subscribe-form">
                          <input type="email" placeholder="Enter Your Email" />
                          <button type="submit">Subscribe →</button>
                      </form>
                  </div>
              </div>
            <img src={CommunityLogoAlt} alt="CommunityLogoAlt" />
          </section> */}

          <section className='faq'>
          <div className="faq-container">  
            <h2 className="faq-title">Frequently <br/> Asked <br /> Questions</h2>
            <div className='questions'>
              <div className="faq-question">
                <h3 className="faq-question-title" onClick={() => toggleExpand(0)}>
                  What are microalgae panels?
                  <span className="faq-expand-icon">{expandedIndex === 0 ? "-" : "+"}</span>
                </h3>
                {expandedIndex === 0 && (
                  <p className="faq-answer">
                  Microalgae panels are transparent containers designed to cultivate microalgae, which absorb carbon dioxide from the air through photosynthesis. These panels can also produce biomass that can be converted into renewable energy.
                  </p>
                )}
              </div>

              <div className="faq-question">
                <h3 className="faq-question-title" onClick={() => toggleExpand(1)}>
                  What type of energy can be produced from microalgae?
                  <span className="faq-expand-icon">{expandedIndex === 1 ? "-" : "+"}</span>
                </h3>
                {expandedIndex === 1 && (
                  <p className="faq-answer">
                    Microalgae can be converted into various forms of green energy, including biofuels (such as biodiesel and bioethanol), biogas, and biomass that can be used for direct energy generation.
                  </p>
                )}
              </div>

              <div className="faq-question">
                <h3 className="faq-question-title" onClick={() => toggleExpand(2)}>
                  How efficient are microalgae panels in capturing CO₂?
                  <span className="faq-expand-icon">{expandedIndex === 2 ? "-" : "+"}</span>
                </h3>
                {expandedIndex === 2 && (
                  <p className="faq-answer">
                      Some microalgae species can absorb more CO₂ than their own weight daily, making microalgae panels a highly efficient method for carbon capture. Their effectiveness can vary based on species, environmental conditions, and panel design.
                  </p>
                )}
              </div>

              <div className="faq-question">
                <h3 className="faq-question-title" onClick={() => toggleExpand(3)}>
                  What are the environmental benefits of using microalgae panels?
                  <span className="faq-expand-icon">{expandedIndex === 3 ? "-" : "+"}</span>
                </h3>
                {expandedIndex === 3 && (
                  <p className="faq-answer">
                    Microalgae panels help reduce greenhouse gas emissions by absorbing CO₂, improve air quality, and contribute to biodiversity. They also provide a sustainable source of energy, reducing dependence on fossil fuels.
                  </p>
                )}
              </div>

              <div className="faq-question">
                <h3 className="faq-question-title" onClick={() => toggleExpand(4)}>
                    Do microalgae panels require special maintenance?
                  <span className="faq-expand-icon">{expandedIndex === 4 ? "-" : "+"}</span>
                </h3>
                {expandedIndex === 4 && (
                  <p className="faq-answer">
                    While microalgae panels are relatively low-maintenance, they may require regular cleaning and monitoring of nutrient levels, light exposure, and CO₂ concentrations to ensure optimal growth and performance.
                  </p>
                )}
              </div>

              <div className="faq-question">
                <h3 className="faq-question-title" onClick={() => toggleExpand(5)}>
                    Are microalgae panels cost-effective?
                  <span className="faq-expand-icon">{expandedIndex === 5 ? "-" : "+"}</span>
                </h3>
                {expandedIndex === 5 && (
                  <p className="faq-answer">
                      While the initial investment in microalgae panels can be high, their long-term benefits, including energy production and CO₂ reduction, can lead to cost savings and a positive return on investment over time.
                  </p>
                )}
              </div>
            </div>
            </div>
          </section>

          <section className="started-section">
            <img src={StartedLogoAlt} alt="StartedLogoAlt" />
              <div className="started">
                <h1>About Us</h1>
                <div className="started-main">
                    <div className="started-main-item">
                        <span>How does microalgae capture CO₂?</span>
                        <p>We are a passionate team of environmental innovators dedicated to combating climate change through nature-inspired solutions. Our mission is to harness the power of microalgae to capture CO₂ from the atmosphere, reducing greenhouse gases and supporting a healthier planet.</p>
                    </div>
                    <div className="started-main-item">
                        <span>Who makes up your team?</span>
                        <p>Our team brings together scientists, environmentalists engineers, and innovators with a shared commitment to sustainable development. We are driven by the belief that real change is possible through collaboration and cutting-edge science.</p>
                    </div>
                </div>
              </div>
            <img src={StartedLogo} alt="StartedLogo" />
          </section>

          <footer className="footer">
              <div className="footer-container">
                  <div className="logo-container">
                      <div className='navbar-head'>
                        <img src={HeaderLogo} alt="HeaderLogo" />
                        <h1 className="logo">EcoMinds</h1>
                      </div>
                      <p>Copyright © 2023 Frapisky Design. All Rights Reserved.</p>
                  </div>
                  <div className="footer-section">
                      <h4>Browse</h4>
                      <ul>
                          <li>Clothings</li>
                          <li>Electronics</li>
                          <li>Books</li>
                          <li>Furnitures</li>
                          <li>Decorations</li>
                          <li>Sports Equipment</li>
                      </ul>
                  </div>
                  <div className="footer-section">
                      <h4>General</h4>
                      <ul>
                          <li>Careers</li>
                          <li>About</li>
                          <li>Twitter</li>
                          <li>LinkedIn</li>
                      </ul>
                  </div>
                  <div className="footer-section">
                      <h4>Support</h4>
                      <ul>
                          <li>Help Center</li>
                          <li>Status</li>
                          <li>Support@Ecoswap.Co</li>
                      </ul>
                  </div>
                  <div className="footer-section">
                      <h4>Legal</h4>
                      <ul>
                          <li>Terms Of Service</li>
                          <li>Privacy Policy</li>
                          <li>Code Of Conduct</li>
                      </ul>
                  </div>
              </div>
          </footer>
        </section>
        </>
    )
}

export default Home