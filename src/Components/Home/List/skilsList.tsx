import "./Css/skillsList.css";
import { NavLink } from "react-router-dom";
const SkillsList = () => {
  return (
    <div className="skills-list-container">
      <img
        src="https://res.cloudinary.com/dt2bliqz4/image/upload/v1723922700/DSC_4570_1_btfmhq.jpg"
        alt="main photo"
        className="main-photo"
      />

      <div className="button-container">
        <button type="button" className="watch-video-button">
          <NavLink className="nav-video" to="/video">
            Watch the Video
          </NavLink>
        </button>
        <button type="button" className="watch-photos-button">
          <NavLink className="nav-photos" to="/photo">
            See Photos
          </NavLink>
        </button>
      </div>
      <div className="flex-container">
        <ul className="skills-list">
          <h2 className="title-skills">Skills</h2>
          <li className="skills">
            <h2 className="skills-title">Dance: "Pro level"</h2>
            <p className="skills-desc">Style: "Breaking", "Hip-Hop"</p>
          </li>
          <li className="skills">
            <h2 className="skills-title">Acrobatic: "Intermediate level"</h2>
          </li>
          <li className="skills">
            <h2 className="skills-title">English: "A2"</h2>
          </li>
          <li className="skills">
            <h2 className="skills-title">Singing: "start level"</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;
