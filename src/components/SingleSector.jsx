import Heading from "./Heading";
import SeeSector from "./SeeSector";
import { useParams } from "react-router-dom";

const SingleSector = ({ sectors }) => {
  const { id } = useParams();
  return (
    <div>
      <Heading />
      <SeeSector sectors={sectors} index={id} />
    </div>
  );
};

export default SingleSector;
