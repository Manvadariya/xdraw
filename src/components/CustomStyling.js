import React from 'react';

const CustomStyling = ({ setStyle }) => {
  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  return (
    <div className="custom-styling">
      <label>
        <input
          type="radio"
          name="style"
          value="hand-drawn"
          onChange={handleStyleChange}
          defaultChecked
        />
        Hand-Drawn
      </label>
      <label>
        <input
          type="radio"
          name="style"
          value="clean"
          onChange={handleStyleChange}
        />
        Clean
      </label>
      <label>
        <input
          type="radio"
          name="style"
          value="professional"
          onChange={handleStyleChange}
        />
        Professional
      </label>
    </div>
  );
};

export default CustomStyling;
