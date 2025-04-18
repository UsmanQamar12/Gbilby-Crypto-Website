import React from 'react';
import Header from '../Header/Header';
import './About.css'; // Assuming you have a CSS file for styles

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
      {/* The Real Story Section */}
      <section className="section">
        <h2 className="section-heading">The Real Story Behind $GBILBY</h2>
        <p className="section-text">
          In early 2025, the world needed something new.<br />
          Not just another memecoin—but a real symbol of rebellion, survival, and digital freedom. 
          That's where $GBILBY was born.
        </p>
        <p className="section-text">
          Inspired by the unpredictable genius of Elon Musk and the meme-first mindset of the internet, 
          GBILBY is a street-smart, underdog character—a rat raised in the cracks of a broken system 
          who found his way to the blockchain.
        </p>
        <p className="section-text">
          He's not here to follow the rules.<br />
          He's here to break meta.
        </p>
      </section>

      {/* Why Section */}
      <section className="section">
        <h2 className="section-heading">Why $GBILBY?</h2>
        <p className="section-text">
          Because attention is the new currency—and GBILBY is designed to own it.
        </p>
        <ul className="why-list">
          <li>Built on Solana for speed, scale, and low fees</li>
          <li>Launched on Pump.fun, the heart of memecoin innovation</li>
          <li>Fueled by community, powered by memes, and engineered for pure internet culture</li>
        </ul>
        <p className="section-text">
          In a world where financial power is shifting from banks to believers,<br />
          GBILBY stands as a new American symbol—independent, viral, unstoppable.
        </p>
      </section>

      {/* Mission Section */}
      <section className="section">
        <h2 className="section-heading">Our Mission</h2>
        <ul className="mission-list">
          <li>To build a real cultural asset from the ground up</li>
          <li>To blend memes and markets with purpose</li>
          <li>To create a coin that doesn't just ride the wave—it becomes the wave</li>
        </ul>
        <p className="section-text">
          Whether you're here to trade, meme, or build—<br />
          we welcome you to the $GBILBY universe.
        </p>
      </section>
    </div>
    </>
  );
}

export default About;
