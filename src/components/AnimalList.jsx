import { useState } from "react";

const AnimalList = () => {
  const animals = [
    {
      species: "sisar",
      name: "macka",
      dateOfBirth: new Date().toDateString(),
      sector: "macka",
    },
    {
      species: "sisar",
      name: "pas",
      dateOfBirth: new Date().toDateString(),
      sector: "pas",
    },
    {
      species: "sisar",
      name: "slon",
      dateOfBirth: new Date().toDateString(),
      sector: "slon",
    },
    {
      species: "sisar",
      name: "tigar",
      dateOfBirth: new Date().toDateString(),
      sector: "tigar",
    },
    {
      species: "sisar",
      name: "lav",
      dateOfBirth: new Date().toDateString(),
      sector: "lav",
    },
  ];

  const [animalsArray, setAnimalsArray] = useState(animals);

  const [state, setState] = useState({
    name: "",
    species: "",
    dateOfBirth: "",
    sector: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.sector);

    let newAnimal = {
      name: state.name,
      species: state.species,
      dateOfBirth: state.dateOfBirth,
      sector: state.sector,
    };
    console.log(state);

    setAnimalsArray((prevState) => (prevState = [...prevState, newAnimal]));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onRemove = (name) => {
    setAnimalsArray((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };
  const onTop = (index) => {
    const topAnimal = animalsArray[index];
    setAnimalsArray((prevState) => [
      topAnimal,
      ...prevState.filter((_, id) => id !== index),
    ]);
  };

  const onSectorAlert = (sector) => {
    let animalsSector = animalsArray.filter(
      (animal) => animal.sector === sector
    );
    let allAnimals = "";
    animalsSector.forEach((animal) => (allAnimals += animal.name + ", "));
    alert(allAnimals);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ime:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
        <label htmlFor="species">Vrsta:</label>
        <input
          type="text"
          name="species"
          value={state.species}
          onChange={handleInputChange}
        />
        <label htmlFor="dateOfBirth">Datum rodjenja:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={state.dateOfBirth}
          onChange={handleInputChange}
        />
        <select name="sector" value={state.sector} onChange={handleInputChange}>
          <option disabled defaultValue>
            Select sector:
          </option>
          <option value="macka">macka</option>
          <option value="pas">pas</option>
          <option value="slon">slon</option>
          <option value="tigar">tigar</option>
          <option value="lav">lav</option>
        </select>
        <button type="submit">Add animal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum rodjenja</th>
            <th>Sector</th>
            <th>Remove</th>
            <th>Move to top</th>
          </tr>
        </thead>
        <tbody>
          {animalsArray.map((animal, index) => (
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.dateOfBirth}</td>
              <td>{animal.sector}</td>
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
              </td>
              <td>
                <button onClick={() => onTop(index)}>Move to top</button>
              </td>
              <td>
                <button onClick={() => onSectorAlert(animal.sector)}>
                  Show animals in sector
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AnimalList;
