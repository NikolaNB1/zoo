import AllAnimals from "../components/AllAnimals";
import Heading from "../components/Heading";

const Animals = ({ animals }) => {
  return (
    <div>
      <Heading />
      <AllAnimals animals={animals} />
    </div>
  );
};
export default Animals;
