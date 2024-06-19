import { Link } from 'react-router-dom';
import './NavBar.css'


//TODO: add scroll into views
export default function NavBar() {

    return (
      <>
        <div className="navbar-container">
          <div className="navbar-logo">RH</div>
          <div className="navbar-option-container">
            <div className="navbar-option">
              Experience
            </div>
            <div className="navbar-option">Projects</div>
            <div className="navbar-option">Contact</div>
          </div>
        </div>
      </>
    );
}