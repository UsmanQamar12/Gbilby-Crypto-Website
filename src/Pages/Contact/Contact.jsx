import React from 'react';
import Header from '../Header/Header'; 
import './Contact.css'; 
import { FaGlobe, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaDiscord, FaTelegram } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
      {/* Main Header */}
      <h1 className="main-header">Contact Us</h1>

      <div className="content-wrapper">
        {/* Contact Information Section */}
        <div className="contact-section">
          <h2 className="section-header">
            <span className="header-underline">Contact</span>
          </h2>
          
          <div className="info-list">
            <div className="info-item">
              <FaGlobe className="info-icon globe" />
              <a href="https://gbilby.fun/" 
                 className="info-link"
                 target="_blank"
                 rel="noopener noreferrer">
                www.gbilby.fun
              </a>
            </div>
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon location" />
              <span className="info-text">Philadelphia, America</span>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="info-icon email" />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gbilbyfun@gmail.com" className="info-link">
                gbilbyfun@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <h2 className="section-header">
            <span className="header-underline">Socials</span>
          </h2>
          
          <div className="social-list">
            <a href="https://x.com/GBILBYFUN" className="social-item">
              <RiTwitterXFill className="social-icon" />
              <span className="social-text">Twitter</span>
            </a>
            
            <a href="https://t.me/GBILBYPortal" className="social-item">
              <FaTelegram className="social-icon" />
              <span className="social-text">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
