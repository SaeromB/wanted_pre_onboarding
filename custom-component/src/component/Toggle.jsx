import React, { useState } from 'react';

const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const moveToggle = 'transform translate-x-10';
  const changeColor = 'transform bg-violet-900';

  const handleToggleClick = () => {
    setChecked((checked) => !checked);
  };

  return (
    <>
      {/* text style */}
      <div>Toggle</div>
      {/* style toggle in the middle */}
      <div className="flex items-center justify-center">
        {/* style toggle */}
        <div
          className={
            'w-20 h-10 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transform' +
            (checked ? null : changeColor)
          }
          onClick={handleToggleClick}>
          <div
            className={
              'w-8 h-8 bg-white rounded-full shadow-md transform' + (checked ? null : moveToggle)
            }></div>
        </div>
      </div>
    </>
  );
};
export default Toggle;
