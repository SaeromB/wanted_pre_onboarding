import React, { useState } from 'react';

const Tag = () => {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');

  const addTag = (tag) => {
    if (tag !== '') {
      setTags([...tags, tag]);
    }
  };

  const handleTagInputSubmit = (e) => {
    if (window.event.key === 'Enter') {
      addTag(e.target.value);
      setText('');
    }
  };

  const deleteTag = (index) => {
    const tagDupulicate = tags.concat();
    tagDupulicate.splice(index, 1);
    setTags([...tagDupulicate]);
  };

  const handleTagDelete = (index) => () => {
    deleteTag(index);
  };

  const changeText = (text) => setText(text);

  const handleTagInputChange = (e) => {
    changeText(e.target.value);
  };

  return (
    <div className="flex items-center justify-start h-20 w-6/12 border border-gray-500 rounded-md p-1">
      {tags.map((tag, index) => (
        <div
          className="flex items-center justify-start p-3 bg-violet-500 m-2 rounded-md"
          key={index}>
          <div className="text-white text-base">{tag}</div>
          <img onClick={handleTagDelete(index)} className="w-5 ml-3" src="./close-button.png"></img>
        </div>
      ))}
      <input
        className="border-0"
        value={text}
        onChange={handleTagInputChange}
        placeholder="Press Enter to add Tags"
        onKeyPress={handleTagInputSubmit}></input>
    </div>
  );
};

export default Tag;
