import { NavLink } from "react-router-dom";
import ExperienceList from "./List/experienceList";
import ParametersList from "./List/parametersList";
import SkillsList from "./List/skilsList";
import "./home.css";
const Home = () => {
  return (
    <div>
      <h1 className="main-list-title">Akulina Alina</h1>

      <div className="list-container">
        <ParametersList />
        <SkillsList />
        <ExperienceList />
      </div>

      <button type="button">
        <NavLink to="/video">Watch the Video</NavLink>
      </button>
      <button type="button">
        <NavLink to="/photo">See Photos</NavLink>
      </button>
    </div>
  );
};

export default Home;
