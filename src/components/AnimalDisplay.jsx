const AnimalDisplay = ({ animal, index, onRemove, onTop }) => {
  return (
    <tr>
      <td>{animal.name}</td>
      <td>{animal.species}</td>
      <td>{animal.date_of_birth}</td>
      <td>{animal.sector}</td>
      <td>
        <button onClick={() => onRemove(animal.name)}>Remove</button>
        <button onClick={() => onTop(index)}>Move to top</button>
      </td>
    </tr>
  );
};
export default AnimalDisplay;
