import React from "react";
import "./footer.css";
import ContactMe from "./contact";

function Footer() {
  return (
    <>
      <ContactMe></ContactMe>
      <div className="footer-main-body">
        21rsh@queensu.ca <br />
        +1 (647) 205-9075 <br />
        Toronto, Ontario
      </div>
    </>
  );
}

export default Footer;
