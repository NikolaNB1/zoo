import AllSectors from "../components/AllSectors";
import Heading from "../components/Heading";

const Sectors = ({ sectors }) => {
  return (
    <div>
      <Heading />
      <AllSectors sectors={sectors} />
    </div>
  );
};
export default Sectors;
