import logo from "../../img/logo.png"
import "./Authentication.scss"

function Authentication() {
  return (
    <section className="Authentication">
      <div>
        <img width="100px" src={logo} alt="" />
        <div>
          <div>
            <label htmlFor="Username">Username</label>
            <input type="text" name="Username"/>
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input type="text" name="Password"/>
          </div>
          <input type="submit" placeholder="Login" />
          <div>
            <p>New player ? <a>Register now</a></p>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Authentication;