import "./Css/skillsList.css";

const SkillsList = () => {
  return (
    <div className="skills-list-container">
      <ul className="skills-list">
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
  );
};

export default SkillsList;
