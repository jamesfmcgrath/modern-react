import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPagecd() {
  const [selection, setSelection] = useState(null);

  const handleSelect = option => {
    setSelection(option);
  };

  const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPagecd;
