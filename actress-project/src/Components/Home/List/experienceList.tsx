import "./Css/experienceList.css";

const ExperienceList = () => {
    return (
      <div className="experience-list-container">
        <ul className="experience-list">
          <h2 className="main-title">Experience</h2>
          <li className="list">
            <h2 className="title">Video clips</h2>

            <p className="list-desc">Кліп репера початківця</p>
            <p className="list-desc">Танцювальний Челлендж</p>
            <p className="list-desc">
              Масовка в кліпі відомого американського співака
            </p>
          </li>

          <li className="list">
            <h2 className="title">Theatricals</h2>
            <p className="list-desc">
              Театральна постановка про мишу та кота для дітей дошкільного віку.
              Показ відбувався в дитячих садочках.
            </p>
       
            <p className="list-desc">
              Театральний мюзикл "Новий рецепт Новорічного настрою" роль: Мер
              міста Шоколадіюс(головна)
            </p>
       
            <p className="list-desc">Масовка у деяких серіалах</p>
      
            <p className="list-desc">
              Робота на закритому івенті "Відпочинок на дачі". Роль: голова
              сільсого клубу(зазивало)
            </p>
          </li>
        </ul>
      </div>
    );
}

export default ExperienceList;