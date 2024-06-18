import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [loginText, setLoginText] = useState("Login");


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Buy Car</li>
          <li>Sell Car</li>
          <li>Contact us</li>
          <li>More</li>
          <button
            className="login-btn"
            onClick={()=> {
              loginText === "Login" ? setLoginText("Logout") : setLoginText("Login")

            }
            }
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
