import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <header class="site-header">
        <Link class="site-logo" to="/">
          Animals
        </Link>
        <nav class="site-navigation">
          <ul>
            <li>
              <Link to="/animals" style={{ textDecoration: "none" }}>
                Animals
              </Link>
            </li>
            <li>
              <Link to="/addAnimal" style={{ textDecoration: "none" }}>
                Add Animal
              </Link>
            </li>
            <li>
              <Link to="/sectors" style={{ textDecoration: "none" }}>
                Sectors
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Heading;
