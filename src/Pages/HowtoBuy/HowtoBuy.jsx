import React, { useState } from "react";
import Header from "../Header/Header";
import "./HowtoBuy.css";

function HowtoBuy() {
  const [copied, setCopied] = useState(false);
  // Define your contract address (update "TBA" once you have the real address)
  const contractAddress = "TBA";

  // Function to copy the contract address to the clipboard
  const copyAddress = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        setCopied(true);
        // Hide the "Copied!" message after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <>
      <Header />
      <div className="button-container">
        <a href="https://pump.fun/board" className="pump-button buy-button">
          🚀 Buy on Pump.fun
        </a>
        <a href="https://pump.fun/board" className="pump-button chart-button">
          📈 Chart
        </a>
      </div>
      <div className="social-container">
        <h1 className="heading">
          The legendary $GBILBY meme that took the internet <br />
          by storm and inspired
        </h1>
        <div className="button-container">
          <a href="https://t.me/GBILBYPortal" className="pump-button buy-button">
            Join Telegram
          </a>
          <a href="https://x.com/GBILBYFUN" className="pump-button chart-button">
            Follow on Twitter
          </a>
        </div>

        <div className="contract-container">
          <span className="contract-label">Contract Address</span>
          {/* Flex container shows the address, the copy icon, and a temporary "Copied!" message */}
          <div className="contract-address" onClick={copyAddress}>
            <span className="address-text">{contractAddress}</span>
            <span className="copy-icon" title="Copy Contract Address">📋</span>
            {copied && <span className="copied-message">Copied!</span>}
          </div>
        </div>
      </div>
      <div className="guide-header">
        <h1 className="main-heading">How to Buy $GBILBY</h1>
        <p className="subtext">
          Follow these simple steps to get your paws on some $GBILBY
        </p>
      </div>
      <div className="guide-container">
        <div className="steps-container">
          <div className="step-box">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Get a Solana Wallet</h3>
              <p className="step-description">
                Download Phantom or another Solana-compatible wallet and fund it with SOL
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Go to Pump.fun</h3>
              <p className="step-description">
                Visit our Pump.fun page and connect your wallet
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Buy $GBILBY</h3>
              <p className="step-description">
                Enter the amount you want to buy and confirm the transaction
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-title">Hold On Tight</h3>
              <p className="step-description">
                Buckle up and enjoy the ride as $GBILBY takes you to the moon!
              </p>
            </div>
          </div>
        </div>
        <a href="https://pump.fun/board" className="buyNow-button">
          🚀 Buy Now on Pump.fun
        </a>
      </div>
    </>
  );
}

export default HowtoBuy;
