import './Navbar.css'

function Navbar() {
  return (
    <>
      <div id="navbar">
        <div className="container">
          <div className="btn">
            <div className="logo">
              t
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