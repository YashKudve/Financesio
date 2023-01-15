import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container1">
        <div className="row">
          {/* Column1 */}
            <div className="col1">
              <h2> <b>&nbsp; &nbsp; &nbsp;Financesio Ltd. </b></h2>
              <h1 className="list-unstyled">
                <li>+91 7894561330</li>
                <li>Mumbai, Maharastra. India</li>
                
              </h1>
            </div>
            </div>  
          {/* Column2 */}
<br />
<br />
          <div className="container2">
            <div className="col2">
              <h2> <b>&nbsp; &nbsp;Why Us?</b> </h2>
              <ui className="list-unstyled">
                <li>Manage your daily expenses</li>
                <li>Generate Reports</li>
                <li>And many more</li>
              </ui>
            </div>
            </div> 
          {/* Column3 */}
            
        </div>
        <br />
        <hr className="hr"/>
        <br />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Financesio Ltd. | All rights reserved |
            Terms Of Service | Privacy
          </p>
          <br />
        </div>
      
    </div>
  );
}

export default Footer;