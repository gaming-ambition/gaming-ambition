import logo from "../../img/logo.png"
import "./Authentication.scss"

function Authentication() {

  const loginPop = () => {
    const loginMenu = document.querySelector("#login")
    const registerMenu = document.querySelector("#register")
    loginMenu.classList.remove("hidden")   
    registerMenu.classList.add("hidden")   
  }

  const registerPop = () => {
    const loginMenu = document.querySelector("#login")
    const registerMenu = document.querySelector("#register")
    loginMenu.classList.add("hidden")   
    registerMenu.classList.remove("hidden")   
  }

  return (
    <section className="Authentication">
      <div id="login" className="hidden">
        <img width="100px" src={logo} alt="" />
        <div>
          <div>
            <label htmlFor="Username">USERNAME</label>
            <input type="text" name="Username" placeholder="Username"/>
          </div>
          <div>
            <label htmlFor="Password">PASSWORD</label>
            <input type="text" name="Password"  placeholder="Password"/>
          </div>
          <input type="submit" value="Login" />
          <div>
            <p>New player ? <a onClick={registerPop}>Register now</a></p>
          </div>
        </div>
      </div>

      <div id="register">
        <img width="100px" src={logo} alt="" />
        <div>
        <div>
            <label htmlFor="Name">NAME</label>
            <input type="text" name="Name" placeholder="Name"/>
          </div>
          <div>
            <label htmlFor="LastName">LAST NAME</label>
            <input type="text" name="LastName"  placeholder="LastName"/>
          </div>
          <div>
            <label htmlFor="Username">USERNAME</label>
            <input type="text" name="Username" placeholder="Username"/>
          </div>
          <div>
            <label htmlFor="Mail">MAIL</label>
            <input type="text" name="Mail" placeholder="Mail"/>
          </div>
          <div>
            <label htmlFor="Password">PASSWORD</label>
            <input type="password" name="Password" placeholder="Password"/>
          </div>
          <div>
            <label htmlFor="ConfirmPassword">CONFIRM PASSWORD</label>
            <input type="password" name="ConfirmPassword" placeholder="ConfirmPassword"/>
          </div>
          
          <input type="submit" value="Register" />
          <div>
            <p onClick={loginPop}>Go back</p>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Authentication;