import "./Css/parametersList.css";

const ParametersList = () => {
    return (
      <div className="parameters-list-container">
        <h2 className="main-title">Parameters</h2>

        <ul className="parameters-container">
          <li className="list-container-params age">
            <h3 className="title">Age: 25 years old</h3>
          </li>
          <li className="list-container-params">
            <h2 className="title">Body: sport</h2>
          </li>
          <li className="list-container-params">
            <h2 className="title">Height: 165cm</h2>
          </li>
          <li className="list-container-params">
            <h2 className="title">Weight: 58kg</h2>
          </li>
          <li className="list-container-params">
            <h2 className="title">Chest girth:</h2>
          </li>
          <li className="list-container-params">
            <h2 className="title">Waist:</h2> <p className="desc"></p>
          </li>
          <li className="list-container-params">
            <h2 className="title">Shoulder Width:</h2>
          </li>
          <li className="list-container-params">
            <h2 className="title">Hips:</h2>
          </li>
        </ul>
      </div>
    );
}

export default ParametersList;