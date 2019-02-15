import React, { useState } from 'react';

// Great! We have a stateful function-based component
// Next, let's add a surname field

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