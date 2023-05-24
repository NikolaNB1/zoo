import AnimalDisplay from "./AnimalDisplay";

const AnimalsDisplay = ({ animals, onRemove, onTop }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ime zivotinje</th>
          <th>Vrsta zivotinje</th>
          <th>Datum zivotinje</th>
          <th>Sektor zivotinje</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          // pozovi hook
          <AnimalDisplay
            key={index}
            animal={animal}
            index={index}
            onTop={onTop}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  );
};
export default AnimalsDisplay;
