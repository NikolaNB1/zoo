import { Link } from "react-router-dom";

const Animal = ({ animal, index }) => {
  return (
    <tr key={index}>
      <td>{animal.name}</td>
      <td>{animal.species}</td>
      <td>{animal.dateOfBirth ? animal.dateOfBirth : "Nepoznato"}</td>
      <td>{animal.sector}</td>
      <td>
        <Link to={`/animals/${index}`}>See Animal</Link>
      </td>
    </tr>
  );
};

export default Animal;
