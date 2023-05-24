import Animal from "./Animal";

const AllAnimals = ({ animals }) => {
  return (
    <div className="animalsList">
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum rodjenja</th>
            <th>Sektor zivotinje</th>
            <th>Pogledaj</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal key={index} animal={animal} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllAnimals;
