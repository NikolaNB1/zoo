import { useState } from "react";

const AnimalList = () => {
  const animals = [
    {
      someth: "cat",
      name: "macka",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "dog",
      name: "pas",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "elephant",
      name: "slon",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "tiger",
      name: "tigar",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "lion",
      name: "lav",
      dateOfBirth: new Date().toDateString(),
    },
  ];

  const [animalsArray, setAnimalsArray] = useState(animals);

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
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Remove</th>
            <th>Move to top</th>
          </tr>
        </thead>
        <tbody>
          {animalsArray.map((animal, index) => (
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.someth}</td>
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
