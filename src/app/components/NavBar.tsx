import Link from "next/link";
import "./NavBar.css";

export default function NavBar({color} : {color?: string}) {
  return (
    <>
      <nav>
        <div className="navbar-container" style={{ background:color}}>
          <nav>
            <Link className="navbar-logo" href="/">
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
              {/* <Link className="navbar-option" href="/more">
                More
              </Link> */}
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}
