import './Navbar.css'
import logo from "../../img/logo_navbar.png"

function Navbar() {

  return (
    <>
      <div id="navbar">
        <div className="container">
          <a href="/home" className="btn" >
            <div className="logo">
              <img width="90px" src={logo} alt="" />
            </div>
            <span>Home</span>
          </a>
          <a href="/tournaments" className="btn">
            <span>Tournaments</span>
          </a>
          <a href="/ranking" className="btn">
            <span>Ranking</span>
          </a>
        </div>
        <a href="/authentication" className="btn auth">
          <span>Connexion</span>
        </a>
      </div>
    </>
  )
}

export default Navbar;