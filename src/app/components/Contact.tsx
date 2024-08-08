import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-overlay">
          <div className="contact-title">Contact Me</div>
          <div className="socials">
            <div className="social-option">
              <div className="social-title">GitHub: </div>
              <div className="social-user">rena-hajjar</div>
              <div className="social-image"></div>
            </div>
            <div className="social-option">
              <div className="social-title">LinkedIn: </div>
              <div className="social-user">rena-hajjar</div>
              <div className="social-image"></div>
            </div>
            <div className="social-option">
              <div className="social-title">Email: </div>
              <div className="social-user">21rsh8@queensu.ca</div>
              <div className="social-image"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
