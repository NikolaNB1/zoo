import { Link } from "react-router-dom";

const Sector = ({ sector, index }) => {
  return (
    <tr>
      <td>{sector}</td>
      <td>
        <Link
          to={`/sectors/${index}`}
          key={index}
          index={index}
          sector={sector}
        >
          See Sector
        </Link>
      </td>
    </tr>
  );
};
export default Sector;
