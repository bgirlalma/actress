
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

    </div>
  );
};

export default Home;
