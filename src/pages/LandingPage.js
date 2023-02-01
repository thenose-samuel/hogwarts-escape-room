import "../styles/LandingPage.css";
import Navbar from "../components/Navbar";
import Entrance from "../assets/images/entrance.png";
import BGImage from "../assets/images/landing-page-1.png";
import { ORGANISATION_NAME } from "../constants";
import { ReactComponent as Social } from "../assets/images/Social.svg";
function LandingPage() {
  return (
    <div className="landing">
      <img src={BGImage} alt="bg" className="bg-image"></img>
      <div className="header">
        <Navbar />
        <div className="title">
          <div>Harry Potter</div>
          <div style={{ fontSize: "40px", paddingLeft: "15vh" }}>Escape Room</div>
        </div>
        <div className="info">
          Dark forces are at a rise, and you must use all your wits, exercise
          your precise knowledge of the Wizarding World to reach the safety of
          Hogwarts.
        </div>
        {/* <div className="how-to-container">
          <div className="how-to">How to Play</div>
          <div className="instructions">
            Use the <span style={{ fontStyle: "italic" }}>charm</span> to unlock
            the door, and leave the <br /> muggle world to begin your first
            mission !
          </div>
        </div> */}
        <div className="entrance">
          <img src={Entrance} alt="entrance" />
        </div>
        <div className="lower-text">
          <div>DON'T FORGET TO CARRY A QUILL AND NOTEBOOK</div>
          <div style={{ paddingTop: "5%", fontSize: "10px"}}>Estimated time: XX-XX MINUTES</div>
        </div>
        <hr className="horizontal-line"></hr>
      </div>
      <div className="second">
        <div className="second-container">
          <div className="title">HOW TO PLAY</div>
          <div className="text">
            Use the <span style={{ fontStyle: "italic" }}>charm</span> to unlock
            the <span style={{ fontWeight: "bold" }}>DOOR</span>, and leave the
            muggle world to begin your first mission !
          </div>
          <div className="text2">
            A{" "}
            <a href="https://www.oprahdaily.com/entertainment/a32598018/harry-potter-spells-list/">
              list of charms
            </a>{" "}
            to help you access places and objects no muggle could even dream of.
          </div>
        </div>
        <div className="sized-box"></div>
        <div className="second-container">
          <div className="title">MORE ESCAPE ROOMS COMING SOON!</div>
          <div className="text">
            The Development team at {ORGANISATION_NAME} are constantly working
            to deliver the best escape room experiences right to your digital
            devices.
          </div>
        </div>
        <div className="sized-box"></div>
      </div>
      <div className="footer">
        <div className="title">
          To Support us at Zodiac Labs, feel free to share this with your
          colleagues and friends !
        </div>
        <Social className="socials"></Social>
        <div className="end">created by the team @{ORGANISATION_NAME}</div>
        <div className="sized-box-small"></div>
      </div>
    </div>
  );
}

export default LandingPage;
