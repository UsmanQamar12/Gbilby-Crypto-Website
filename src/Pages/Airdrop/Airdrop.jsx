import React from 'react';
import Header from '../Header/Header';
import './Airdrop.css'; // Assuming you have a CSS file for styles

function Airdrop() {
  return (
    <>
      <Header />
      <div className="airdrop-container">
      <h1 className="main-heading">$GBILBY Airdrop Campaigns</h1>
      <p className="main-description">
        As we prepare to launch the $GBILBY project, we want to reward our early supporters and loyal holders. 
        To kick things off, we're excited to introduce three special airdrop campaigns designed to engage 
        the community, reward holders, and thank those who believe in the future of $GBILBY.
      </p>

      <div className="boxes-container">
        {/* Airdrop 1 */}
        <div className="airdrop-box">
          <h2>Airdrop 1: <br />Engagement Airdrop</h2>
          <div className="airdrop-content">
            <p>We're kicking off the $GBILBY journey with an <b>Engagement Airdrop!</b></p><br />
            <h3>How to Participate:</h3>
            <ul>
              <li><b>Follow</b> us on Twitter (@Gbilbyfun) and like our posts.</li>
              <li><b>Tag 3 friends</b> in the comments who whould love to be a part of the $GBILBY community.</li>
              <li><b>Retweet</b> our posts to spread the word and amplify the excitement!</li>
            </ul>
            <p className='reward'><b><br />Winners </b> </p><p>It will be selected randomly and receive <b>free $GBILBY tokens!</b> This is your chance to
            jumpstart your $GBILBY journey before the official launch!</p>
          </div>
        </div>

        {/* Airdrop 2 */}
        <div className="airdrop-box">
          <h2>Airdrop 2: <br />Holders Airdrop</h2>
          <div className="airdrop-content">
            <p><b>For the true $GBILBY believers!</b></p>
            <p>Once the project launches on Pump.fun holders who keep the $GBILBY tokens locked or Hold and ready will receive a MASSIVE airdrop!</p>
            <h3>How to Participate:</h3>
            <ul>
              <li><b>Hold your $GBILBY tokens</b> until the official project bonding</li>
              <li>There's <b>no need for additional action</b> - just hold onto your tokens!</li>
            </ul>
            <p className='reward'><b> <br />Reward:</b></p> <p>50,000 $GBILBY tokens will be airdropped to eligible holders as a part of this exclusive giveaway.</p>
          </div>
        </div>

        {/* Airdrop 3 */}
        <div className="airdrop-box">
          <h2>Airdrop 3: <br />CEX & Big Buyers Airdrop</h2>
          <div className="airdrop-content">
            <p><b>Hold Big, Get Big!</b></p>
            <p>As $GBILBY prepares for a <b>CEX listing </b> we're rewarding the biggest supporters who hold a significant stake in the project.</p>
            <h3>How to Participate:</h3>
            <ul>
              <li>Hold at least 2% of total $GBILBY supply - this is for our <b>big buyers and long-term holders.</b></li>
              <li>You must hold your tokens until we list on 1st CEX to qualify for this airdrop.</li>
            </ul>
            <p  className='reward'><b>Reward:</b></p> <span>A Substantial <b>airdrop of $GBILBY tokens</b> will be distributed to those
            holding <b>2%</b> or <b>more</b> of the total token supply. <br />Rewards will distributed on First Cex listing.</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Airdrop;