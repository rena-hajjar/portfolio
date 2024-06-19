import { Link } from 'react-router-dom';
import './NavBar.css'

const navOptions = [
  {
    id: 'Experience',
    title: 'Experience'
  }, 
  {
    id: 'Projects',
    title: 'Projects'
  },
  {
    id: 'Contact',
    title: 'Contact'
  }
]


//TODO: add scroll into views
export default function NavBar() {

    return (
      <>
        <nav>
          <div className="navbar-container">
            <div className="navbar-logo">RH</div>
            <div className="navbar-option-container">
              <div className="navbar-option">Experience</div>
              <div className="navbar-option">Projects</div>
              <div className="navbar-option">Contact</div>
              <div>
                {navOptions.map(() => (
                  <div></div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}