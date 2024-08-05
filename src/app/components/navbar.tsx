import Link from "next/link"
import "./NavBar.css";

//TODO: add scroll into views
export default function NavBar() {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <nav>
            <Link className="navbar-logo" href="">
              RH
            </Link>
            <div className="navbar-option-container">
              <Link className="navbar-option" href="#experience">
                Experience
              </Link>
              <Link className="navbar-option" href="#projects">
                Projects
              </Link>
              <Link className="navbar-option" href="#contact">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}
