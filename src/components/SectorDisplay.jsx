const SectorDisplay = ({ sector, index, showAnimals }) => {
  return (
    <tr>
      <td>{sector}</td>
      <td>
        <button onClick={() => showAnimals(sector)}>Show</button>
      </td>
    </tr>
  );
};
export default SectorDisplay;
