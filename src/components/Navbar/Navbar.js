import { Button } from "reactstrap";
import logo from "../../Assets/Images/logo.png"
import { NavLink, Link } from "react-router-dom";
import "./navbar.css"
const Navbars = () => {
  return (

    
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_bg">
        <div className="container-fluid">
          <Link className="navbar-brand ms-lg-5" to="/"><img src={logo} className="navbar_logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-lg-5 " id="navbarNav">
            <div className='nav_wrapper'>
              <div>
                <ul className="navbar-nav mbl_screen">
                  <li className="nav-item nav_elements ms-lg-5">
                    <NavLink className="nav-link nav_links" aria-current="page" to="/invest">Invest</NavLink>
                  </li>
                  <li className="nav-item nav_elements ms-lg-5">
                    <NavLink className="nav-link nav_links" to="/faq">FAQ</NavLink>
                  </li>
                  <li className="nav-item nav_elements ms-lg-5">
                    <NavLink className="nav-link nav_links" to="/company">Company</NavLink>
                  </li>
                </ul>
              </div>

              <div className='me-lg-5 mt-4 nav_btns_wrapper'>
                <div className='me-lg-4'>
                  <NavLink to="/login"><Button className="btn_primary_bg">Sign In</Button></NavLink>
                  {/* <PrimaryButton value={"Sign In"} /> */}
                </div>
                <div>
                  <NavLink to="/signup"><Button className="btn_bg">Create Free Account</Button>
                  {/* <SecondaryButton value={"Create Free Account"} /> */}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>


        </div>
      </nav>

    </>
  );
}

export default Navbars;