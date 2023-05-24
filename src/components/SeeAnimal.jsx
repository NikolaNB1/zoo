const SeeAnimal = ({ animals, index }) => {
  let animal = animals[index];

  return (
    <div className="seeAnimal">
      <ul>
        <li>
          Ime zivotinje: <h2>{animal.name}</h2>
        </li>
        <li>
          Vrsta zivotinje: <h2>{animal.species}</h2>
        </li>
        <li>
          Datum rodjenja: <h2>{animal.dateOfBirth}</h2>
        </li>
        <li>
          Sektor zivotinje: <h2>{animal.sector}</h2>
        </li>
      </ul>
    </div>
  );
};

export default SeeAnimal;
