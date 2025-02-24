import Link from "next/link"
import "./NavBar.css";

export default function NavBar({color} : {color?: string}) {
  return (
    <>
      <nav>
        <div className="navbar-container" style={{ backgroundColor: color}}>
          <nav>
            <Link className="navbar-logo" href="/#main">
              RH
            </Link>
            <div className="navbar-option-container">
            <Link className="navbar-option" href="/#experience">
                Experience
              </Link>
              <Link className="navbar-option" href="/#projects">
                Projects
              </Link>
              <Link className="navbar-option" href="/#contact">
                Contact
              </Link>
              <Link className="navbar-option" href="/more">More</Link>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}
