import './Tournaments.css'
import codBg from '../../img/cod_bg.jpeg';
import fifaBg from '../../img/fifa_bg.jpeg';

function Tournaments() {
  return (
    <>
      <div id="header">
        <p>CURRENT TOURNAMENTS</p>
      </div>
      <div id="tournaments">
        <div id="game1" style={{ backgroundImage: `url(${codBg}`}}>
          
        </div>
        <div id="game2" style={{ backgroundImage: `url(${fifaBg}`}}>
        </div>
      </div>
    </>
  )
}

export default Tournaments;