import { useParams } from "react-router-dom";
import SeeAnimal from "./SeeAnimal";
import Heading from "./Heading";

const SingleAnimal = ({ animals }) => {
  const { id } = useParams();
  return (
    <div>
      <Heading />
      <SeeAnimal animals={animals} index={id} />
    </div>
  );
};

export default SingleAnimal;
