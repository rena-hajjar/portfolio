import NavBar from "@/app/components/NavBar";
import './more.css';

export default function More() {
    return (
      <>
        <NavBar color="#6570E6"></NavBar>
        <div className="more-main">
          <div className="more-title">More About Me.</div>
          <div className="more-cards-container">
            <div className="more-card">Art</div>
            <div className="more-card">Music</div>
            <div className="more-card">Rock Climbing</div>
            <div className="more-card">Coursework</div>
          </div>
        </div>
      </>
    );
}