import React from "react";
import Header from "../Header/Header"; 
import "./RoadMap.css"; // Assuming you have a CSS file for styles

function Roadmap() {
  const steps = [
    "Launch on Pump fun",
    "DEX will be paid at 30K MC and Get King of the Hill",
    "Get to Raydium and 1% of the supply will be shared as giveaways",
    "Get to 5 million $ MC",
    "CLX listings",
    "Release merchandise and launch a $GBILBY web shop",
    "Lambo time",
  ];
  return (
    <>
      <Header />
      <div className="roadmap-content">
        <div className="text-content">
          <h1>$GBILBY IS HERE TO STAY!</h1>
          <p>Don’t miss the adventures of $GBILBY and be part of it!</p>
        </div>
        <div className="image-content">
          <img src="/roadmap1.png" alt="Gbilby Logo" />
        </div>
      </div>
      <div className="roadmap-container">
        <h1>Roadmap</h1>
        <span className="roadmap-content">
          <span className="roadmap-list-container">
            <ol className="roadmap-list">
              {steps.map((step, index) => (
                <li className="step-item" key={index}>
                  {`Step ${index + 1}. `}
                  {index === steps.length - 1 ? <strong>{step}</strong> : step}
                </li>
              ))}
            </ol>
          </span>
          <div className="roadmap-logo">
            <img src="/roadmap.png" alt="Logo" />
          </div>
        </span>
      </div>
    </>
  );
}

export default Roadmap;
