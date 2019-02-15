import React, { useState } from 'react';

export default () => {
  const [name, setName] = useState('Mary');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <p>Hello, {name}</p>
    </>
  );
}