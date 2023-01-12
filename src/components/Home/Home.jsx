import video from "../../media/callof.mp4";
import BestPreview from "./BestPreview";
import bestPlayerLogo from '../../img/bestplayer.jpeg';
import bestTeamLogo from '../../img/bestteam.jpeg';
import steamLogo from '../../img/steam.png';
import epicLogo from '../../img/epic.png';
import eaLogo from '../../img/EA.png';
import activisionLogo from '../../img/activision.png';
import './Home.css';

function Home(){
  return(
    <>
      <div id="preview">
        <div id="video-container">
          <video loop autoPlay={true} muted >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div id="preview-details">
          <i>Most popular tournament</i>
          <span>CALL OF DUTY</span>
          <div id="btn-container">
            <button id="btn-more-details">More details</button>
            <button id="btn-more-tournaments">More tournaments</button>
          </div>
        </div>
      </div>
      <div id="best-perfs-container">
        <div id="row-title">
          <p>BEST PLAYER OF THE MONTH</p>
          <p>BEST TEAM OF THE MONTH</p>
        </div>
        <i id="game-title">Call of duty</i>
        <div id="best-preview">
          <BestPreview logo={bestPlayerLogo} name="GROTAGA" wins="23" loses="2"/>
          <BestPreview logo={bestTeamLogo} name="Faze Clan COD" wins="23" loses="2"/>
        </div>
        <div id="trust-companies">
          <p>THEY TRUST US</p>
          <div id="companies">
            <img src={steamLogo} width="200px" alt="" />
            <img src={epicLogo} width="300px" alt=""/>
            <img src={activisionLogo} width="400px" alt=""/>
            <img src={eaLogo} width="150px" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;