import { Button } from "reactstrap";
import logo from "../../Assets/Images/logo.png"
import "./navbar.css"
const Navbars = () => {
  return (

    //   <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_bg">
    //   <div className="container-fluid">
    //       <div className="logo1">
    //       <a className="navbar-brand" href="#"><img style={{width:"130px", paddingBottom:"10px"}} src={logo} alt="" /></a>
    //       </div>

    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse navbar_bg" id="navbarTogglerDemo02">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link" aria-current="page" href="#">Invest</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">FAQ</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Company</a>
    //         </li>

    //       </ul>
    //       <div className=" buttons d-flex" role="search">
    //           <div className="btns"><button className="btn1-sign " type="submit">Sign In</button></div>

    //       <div className="btns"><button className="btn3-new " type="submit">Create New Account</button></div>

    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_bg">
        <div className="container-fluid">
          <a className="navbar-brand ms-lg-5" href="#"><img src={logo} className="navbar_logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-lg-5 " id="navbarNav">
            <div className='nav_wrapper'>
              <div>
                <ul className="navbar-nav mbl_screen">
                  <li className="nav-item nav_elements ms-lg-5">
                    <a className="nav-link nav_links" aria-current="page" href="#">Invest</a>
                  </li>
                  <li className="nav-item nav_elements ms-lg-5">
                    <a className="nav-link nav_links" href="#">FAQ</a>
                  </li>
                  <li className="nav-item nav_elements ms-lg-5">
                    <a className="nav-link nav_links" href="#">Company</a>
                  </li>
                </ul>
              </div>

              <div className='me-lg-5 mt-4 nav_btns_wrapper'>
                <div className='me-lg-4'>
                  <Button className="btn_primary_bg">Sign In</Button>
                  {/* <PrimaryButton value={"Sign In"} /> */}
                </div>
                <div>
                  <Button className="btn_bg">Create Free Account</Button>
                  {/* <SecondaryButton value={"Create Free Account"} /> */}
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