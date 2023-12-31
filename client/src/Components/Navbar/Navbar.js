import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [isAutomatedInvestingOpen, setAutomatedInvestingOpen] = useState(false);
  const [isLearnOpen, setLearnOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the AutomatedInvesting dropdown
  const toggleAutomatedInvesting = () => {
    setAutomatedInvestingOpen(!isAutomatedInvestingOpen);
    if(isMobileMenuOpen){
      closeMobileMenu();
    };
  };

  // Add this function to the learn dropdown
  const toggleLearn = () => {
    setLearnOpen(!isLearnOpen);
    if(isMobileMenuOpen){
      closeMobileMenu();
    };
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleDropdownOptionClick = () => {
    setAutomatedInvestingOpen(false);
    setLearnOpen(false);
    closeMobileMenu();
  };

  const handleAutomatedInvestingClick = () => {
    toggleAutomatedInvesting();
    if (isMobileMenuOpen){
      closeMobileMenu();
      
    };
  }

  const handleLearnClick = () => {
    toggleLearn();
    if (isLearnOpen){
      closeMobileMenu();
    };
  };
  

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className='navbar_content'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
            </div> 
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div> 
            <ul className={`navbar_ul ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <li className='nav_link'>
                <a href='/'>Cash</a>
              </li>
              <li className='nav_link'>
                <a href='/'>Bonds</a>
              </li>
              <li className='nav_link'>
                <a href='/'>Stocks</a>
              </li>
              <li >
                <div className={`nav_link drop_link ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`} onClick={handleAutomatedInvestingClick}>
                  <span className={`selected ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}>Automated Investing</span>
                  <div className={`caret ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isAutomatedInvestingOpen ? 'dropdown-open' : ''}`}>
                  <li onClick={handleDropdownOptionClick}>Social Responsibility (SRI)</li>
                  <li onClick={handleDropdownOptionClick}>Retirement (IRAs)</li>
                  <li onClick={handleDropdownOptionClick}>Explore all Investments</li>
                </ul>
              </li>
              <li >
                <div className={`nav_link drop_link learn ${isLearnOpen ? 'caret-rotate' : ''}`} onClick={handleLearnClick}>
                  <span className={`selected ${isLearnOpen ? 'caret-rotate' : ''}`}>Learn</span>
                  <div className={`caret ${isLearnOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isLearnOpen ? 'dropdown-open' : ''}`}>
                  <li onClick={handleDropdownOptionClick}>Education</li>
                  <li onClick={handleDropdownOptionClick}>Guides</li>
                  <li onClick={handleDropdownOptionClick}>FAQ</li>
                </ul>
              </li>
            </ul> 
            <div className='btns'>
              <button className='login bttn'>Login</button>
              <button className='get_started bttn'>Get Started</button>
            </div>    
        </div>    
    </nav>  
  )
}

export default Navbar