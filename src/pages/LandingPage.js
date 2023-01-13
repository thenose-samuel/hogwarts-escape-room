import "../styles/LandingPage.css";
import Navbar from "../components/Navbar";
import Entrance from "../assets/images/entrance.png";

function LandingPage() {
  return (
    <div className="landing">
      <div className="header">
        <Navbar />
        <div className="title">
          <div>Harry Potter</div>
          <div style={{ fontSize: "30px" }}>Escape Room</div>
        </div>
        <div className="info">
          Dark forces are at a rise, and you must use all your wits, exercise
          your precise knowledge of the Wizarding World to reach the safety of
          Hogwarts.
        </div>
        <div className="how-to-container">
          <div className="how-to">How to Play</div>
          <div className="instructions">
            Use the <span style={{ fontStyle: "italic" }}>charm</span> to unlock
            the door, and leave the <br /> muggle world to begin your first
            mission !
          </div>
        </div>
        <div className="entrance">
          <img src={Entrance} />
        </div>
        <div className="lower-text">
          <div>DON'T FORGET TO CARRY A PEN AND NOTEBOOK</div>
          <div style={{ paddingTop: "5%" }}>ESTIMATED TIME: XX-XX MINUTES</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
