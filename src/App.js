import { Routes, Route } from "react-router-dom";
import "./App.css";
import AnimalList from "./components/AnimalList";
import ButtonClick from "./components/ButtonClick";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Sectors from "./pages/Sectors";
import SingleAnimal from "./components/SingleAnimal";
import AddAnimal from "./pages/AddAnimal";
import SingleSector from "./components/SingleSector";

const listOfAnimals = [
  {
    species: "sisar",
    name: "macka",
    dateOfBirth: new Date().toDateString(),
    sector: "macka",
  },
  {
    species: "sisar",
    name: "pas",
    // dateOfBirth: new Date().toDateString(),
    sector: "pas",
  },
  {
    species: "sisar",
    name: "slon",
    dateOfBirth: new Date().toDateString(),
    sector: "slon",
  },
  {
    species: "sisar",
    name: "tigar",
    // dateOfBirth: new Date().toDateString(),
    sector: "tigar",
  },
  {
    species: "sisar",
    name: "lav",
    dateOfBirth: new Date().toDateString(),
    sector: "lav",
  },
];

const animalSector = ["macka", "pas", "slon", "tigar", "lav"];

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route
        path="animals"
        element={<Animals animals={listOfAnimals} />}
      ></Route>
      <Route
        path="animals/:id"
        element={<SingleAnimal animals={listOfAnimals} />}
      ></Route>
      <Route
        path="addAnimal"
        element={<AddAnimal animals={listOfAnimals} />}
      ></Route>
      <Route
        path="sectors"
        element={<Sectors sectors={animalSector} />}
      ></Route>
      <Route
        path="sectors/:id"
        element={<SingleSector sectors={animalSector} />}
      ></Route>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <AnimalList />
    //     <ButtonClick />
    //   </header>
    // </div>
  );
}

export default App;
