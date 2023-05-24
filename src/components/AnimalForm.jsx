import { useState } from "react";

const AnimalForm = ({ addAnimal }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sector, setSector] = useState("");
  const onInputNameChange = (e) => {
    setName(e.target.value);
  };

  const onInputSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const onInputDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const onInputSectorChange = (e) => {
    setSector(e.target.value);
  };

  return (
    <form>
      <label>Name</label>
      <input type="text" onChange={onInputNameChange} />

      <label>Species</label>
      <input type="text" onChange={onInputSpeciesChange} />

      <label>Date of Birth</label>
      <input type="date" onChange={onInputDateOfBirthChange} />

      <select onSelect={onInputSectorChange}>
        <option value="bird">Bird</option>
        <option value="snake">Snake</option>
      </select>

      <button
        onSubmit={(e) => addAnimal(e, name, species, dateOfBirth, sector)}
        type="submit"
      >
        Add Animal
      </button>
    </form>
  );
};
export default AnimalForm;
