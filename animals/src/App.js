import './App.css';

// Import useState hook
import { useState } from 'react';
// Import AnimalShow component
import AnimalShow from './AnimalShow';

// Function to return a random animal
const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
};

// App function component
function App() {
  // Declare a new state variable, which we'll call "count"
  // setCount is a setter function
  // const [count, setCount] = useState(0);

  // Declare a new state variable, which we'll call "animals"
  const [animals, setAnimals] = useState([]);

  // Handle click event
  const handleClick = () => {
    // setCount(count + 1);
    setAnimals([...animals, getRandomAnimal()]);
  };

  // Render animals
  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  // Return JSX
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

// Export App
export default App;
