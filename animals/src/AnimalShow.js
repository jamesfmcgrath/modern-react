import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// Map of animal types to SVGs
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

// Purpose: Display a single animal
function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  // handleClick function
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt={type} />
      <img
        className="heart"
        src={heart}
        alt="Heart"
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

// Export AnimalShow
export default AnimalShow;
