import { useState } from "react";
import { Link } from "react-router-dom";

const AddAnimalForm = ({ animals }) => {
  const [animalsArray, setAnimalsArray] = useState(animals);

  const [state, setState] = useState({
    name: "",
    species: "",
    dateOfBirth: "",
    sector: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let newAnimal = {
      name: state.name,
      species: state.species,
      dateOfBirth: state.dateOfBirth,
      sector: state.sector,
    };

    setAnimalsArray((prevState) => (prevState = [...prevState, newAnimal]));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="animalsForm">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            Ime:
            <p>
              <input
                placeholder="Unesite ime"
                type="text"
                name="name"
                value={state.name}
                onChange={handleInputChange}
              />
            </p>
          </li>
          <li>
            Vrsta:
            <p>
              <input
                placeholder="Unesite vrstu"
                type="text"
                name="species"
                value={state.species}
                onChange={handleInputChange}
              />
            </p>
          </li>
          <li>
            Datum rodjenja:
            <p>
              <input
                type="date"
                name="dateOfBirth"
                value={state.dateOfBirth}
                onChange={handleInputChange}
              />
            </p>
          </li>
          <li>
            Sector:
            <p>
              <select
                name="sector"
                value={state.sector}
                onChange={handleInputChange}
              >
                <option disabled defaultValue>
                  Select sector:
                </option>
                <option value="macka">macka</option>
                <option value="pas">pas</option>
                <option value="slon">slon</option>
                <option value="tigar">tigar</option>
                <option value="lav">lav</option>
              </select>
            </p>
          </li>
          <li>
            <Link to="/animals">
              <button type="submit" onSubmit={handleSubmit}>
                Add animal
              </button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AddAnimalForm;
