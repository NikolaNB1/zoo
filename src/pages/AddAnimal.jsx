import AddAnimalForm from "../components/AddAnimalForm";
import Heading from "../components/Heading";

const AddAnimal = ({ animals }) => {
  return (
    <div>
      <Heading />
      <AddAnimalForm animals={animals} />
    </div>
  );
};

export default AddAnimal;
