import { useState } from "react";
import SectorDisplay from "./SectorDisplay";

const SectorsDisplay = ({ animalSector, showAnimals }) => {
  const [animalSectors, setAnimalSectors] = useState(animalSector);

  return (
    <table>
      <thead>
        <tr>
          <th>Ime sektora</th>
          <th>Show</th>
        </tr>
      </thead>
      <tbody>
        {animalSectors.map((sector, index) => (
          // pozovi hook
          <SectorDisplay
            key={index}
            sector={sector}
            index={index}
            showAnimals={showAnimals}
          />
        ))}
      </tbody>
    </table>
  );
};
export default SectorsDisplay;
