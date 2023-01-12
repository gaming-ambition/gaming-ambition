import './Navbar.css'
import logo from "../../img/logo_navbar.png"

function Navbar() {
  return (
    <>
      <div id="navbar">
        <div className="container">
          <div className="btn ">
            <div className="logo">
              <img width="90px" src={logo} alt="" />
            </div>
            <span>Home</span>
          </div>
          <div className="btn">
            <span>Tournaments</span>
          </div>
          <div className="btn">
            <span>Ranking</span>
          </div>
        </div>
        <div className="btn auth">
          <span>Connexion</span>
        </div>
      </div>
    </>
  )
}

export default Navbar;