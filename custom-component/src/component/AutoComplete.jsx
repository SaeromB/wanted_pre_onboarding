import React, { useState } from 'react';

const DUMMY_DATAS = ['rustic', 'remove', 'rock', '중고A급', 'refurbished', 'antique'];

export const AutoComplete = () => {
  const [text, setText] = useState();

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleDeleteText = () => {
    setText('');
  };

  const handleSelectText = (text) => {
    setText(text);
  };

  return (
    <div>
      AutoComplete
      <div className="flex items-center justify-center w-96 h-16 border-2 rounded-md">
        <input className="pr-48" value={text} onChange={handleChangeText} />
        <div className="flex items-center justify-end" onClick={handleDeleteText}>
          x
        </div>
      </div>
      <div className="flex items-center justify-start">
        {DUMMY_DATAS.map((data, index) => {
          if (data.includes(text)) {
            return (
              <div className="" key={index} onClick={() => handleSelectText(data)}>
                <div>{data}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
