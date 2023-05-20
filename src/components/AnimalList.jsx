import { useState } from "react";

const AnimalList = () => {
  const animals = [
    {
      species: "cat",
      name: "macka",
      dateOfBirth: new Date().toDateString(),
    },
    {
      species: "dog",
      name: "pas",
      dateOfBirth: new Date().toDateString(),
    },
    {
      species: "elephant",
      name: "slon",
      dateOfBirth: new Date().toDateString(),
    },
    {
      species: "tiger",
      name: "tigar",
      dateOfBirth: new Date().toDateString(),
    },
    {
      species: "lion",
      name: "lav",
      dateOfBirth: new Date().toDateString(),
    },
  ];

  const [animalsArray, setAnimalsArray] = useState(animals);

  const [state, setState] = useState({
    name: "",
    species: "",
    dateOfBirth: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.sector);

    let newAnimal = {
      name: state.name,
      species: state.species,
      dateOfBirth: state.dateOfBirth,
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
        <button type="submit">Add animal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum rodjenja</th>
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
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
              </td>
              <td>
                <button onClick={() => onTop(index)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AnimalList;
