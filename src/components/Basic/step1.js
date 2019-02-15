import React, { useState } from 'react';

// Great! We have a stateful function-based component
// Lets add surname

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