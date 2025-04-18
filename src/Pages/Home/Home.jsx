import { useState } from "react";
import { FaGlobe, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import "./Home.css";

function Home() {
  const [copied, setCopied] = useState(false);
  // Define your contract address (update "TBA" once you have the real address)
  const contractAddress = "TBA";

  const copyAddress = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };
  const images = [
    { id: 1, src: "Home1.jpeg" },
    { id: 2, src: "Home2.jpeg" },
    { id: 3, src: "Home3.jpeg" },
    { id: 4, src: "Home4.jpeg" },
    { id: 5, src: "Home5.jpeg" },
    { id: 6, src: "Home6.jpeg" },
    { id: 7, src: "Home7.jpeg" },
    { id: 8, src: "Home8.jpeg" },
    { id: 9, src: "Home9.jpeg" },
    { id: 10, src: "Home10.jpeg" },
    { id: 11, src: "Home11.jpeg" },
    { id: 12, src: "Home12.jpeg" },
    { id: 13, src: "Home13.jpeg" },
    { id: 14, src: "Home14.jpeg" },
    { id: 15, src: "Home15.jpeg" },
  ];

  // Split images into three columns
  const column1 = images.slice(0, 5);
  const column2 = images.slice(5, 10);
  const column3 = images.slice(10, 15);

  return (
    <>
      <div className="home-container">
        {/* Main Heading Section */}
        <div className="hero-box">
          <h1 className="main-head">Welcome to $GBILBY</h1>

          {/* Description Section */}
          <div className="description-section">
            <p className="description-text">
              The American-born, Elon-inspired memecoin built to dominate 2025.
              Born in chaos. Raised on memes. Engineered for virality.
            </p>

            <p>
              $GBILBY isn't just another token—it's a movement Created for those
              who think different, move fast, and believe in the power of
              decentralized culture.
            </p>

            <p>
              Built on Solana. Launched on Pump.fun. Fueled by the people. This
              is more than a coin—it's the face of the next memecoin supercycle.
            </p>
          </div>
        </div>
        <div className="launch-alert-box">
      <h2>🚨$GBILBY LAUNCH ALERT🚨</h2>
      <p>
        The big day is here!<br />
        $GBILBY goes live on Pump.fun on April 17th, 2025, and we’re ready to take the crypto world by storm!
      </p>
      <h3>⏰ Launch Time:</h3>
      <ul>
        <li>April 17th, 2025</li>
        <li>4:00 PM UTC</li>
      </ul>
      <h3>What’s Coming:</h3>
      <ul>
        <li>Airdrop 1: Engagement-based (Like, Retweet, Reply)</li>
        <li>Airdrop 2: For holders who keep their tokens until launch</li>
        <li>Airdrop 3: For big buyers holding 2%+ of the supply before CEX listing</li>
      </ul>
    </div>

        {/* Contract Address Section */}
        <div className="contract-container">
          <span className="contract-label">Contract Address</span>
          <div className="contract-address" onClick={copyAddress}>
            <span className="address-text">{contractAddress}</span>
            <span className="copy-icon" title="Copy Contract Address">
              📋
            </span>
            {copied && <span className="copied-message">Copied!</span>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <a
            href="https://pump.fun"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Pump.fun
          </a>
          <div className="social-buttons">
            <a
              href="https://t.me/GBILBYPortal"
              className="social-button telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-text">Telegram</span>
            </a>

            <a
              href="https://x.com/GBILBYFUN"
              className="social-button twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-text">Twitter</span>
            </a>
          </div>
        </div>

        {/* Why Section */}
        <div className="why-section">
          <h2>Why $GBILBY?</h2>
          <ul className="why-list">
            <li>Because he's not just a coin</li>
            <li>He's a rogue algorithm</li>
            <li>A digital rat king</li>
            <li>The bastard child of meme science and market chaos</li>
          </ul>
          <p className="closing-text">
            Elon created him. The internet unleashed him.
            <br />
            Now, he's coming for your bags.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-header">
          <h1>$GBILBY - Adventures</h1>
        </div>

        <div className="columns-container">
          <div className="image-column">
            {column1.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={`Adventure ${img.id}`}
                className="grid-image"
              />
            ))}
          </div>

          <div className="image-column">
            {column2.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={`Adventure ${img.id}`}
                className="grid-image"
              />
            ))}
          </div>

          <div className="image-column">
            {column3.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={`Adventure ${img.id}`}
                className="grid-image"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="inspiration-section">
        {/* Heading */}
        <h1 className="main-heading">
          Never give up until your <br />
          Lambo it's parked in
          <br />
          your garage
        </h1>

        <p className="inspiration-text">
          {" "}
          _<span className="author">by $GBILBY</span>
        </p>

        {/* Image container */}
        <div className="image-container">
          <img
            src="/Home2.jpeg"
            alt="Motivational illustration"
            className="featured-image"
          />
        </div>
      </div>

      <div className="contact-container-box">
        <span className="content-wrapper">
          <div className="contact-section">
            <h2 className="section-header">
              <span className="header-underline">Contact</span>
            </h2>

            <div className="info-list">
              <div className="info-item">
                <FaGlobe className="info-icon globe"   style={{ color: "white" }}/>
                <a style={{ color: "white" }}
                  href="https://gbilby.fun/"
                  className="info-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gbilby.fun
                </a>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon location"   style={{ color: "white" }}/>
                <span className="info-text" style={{ color: "white" }}>Philadelphia, America</span>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon email"  style={{ color: "white" }} />
                <a  style={{ color: "white" }}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gbilbyfun@gmail.com"
                  className="info-link"
                >
                  gbilbyfun@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h2 className="section-header">
              <span className="header-underline">Socials</span>
            </h2>

            <div className="social-list" >
              <a href="https://x.com/GBILBYFUN" className="social-item"  style={{ color: "white" }}>
                <RiTwitterXFill className="social-icon twit" />
                <span className="social-text">Twitter</span>
              </a>

              <a href="https://t.me/GBILBYPortal" className="social-item" style={{ color: "white" }}>
                <FaTelegram className="social-icon tel" />
                <span className="social-text">Telegram</span>
              </a>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default Home;
