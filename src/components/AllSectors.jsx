import Sector from "./Sector";

const AllSectors = ({ sectors }) => {
  return (
    <div className="animalsSector">
      <table>
        <thead>
          <tr>
            <th>Ime sektora</th>
            <th>Pogledaj</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map((sector, index) => (
            <Sector key={index} sector={sector} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllSectors;
