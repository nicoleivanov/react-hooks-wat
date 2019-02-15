import React, { useState, useEffect } from 'react';

// We should have some familiarity to state-management with hooks
// What if we want to execute a side-effect?
export default () => {
    const [name, setName] = useState('Mary');
    const [surname, setSurname] = useState('Poppins');
  
    useEffect(() => {
      // useEffect is for executing side effects, "lifecycle" methods
      document.title = `${name} ${surname}`;
    });
  
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleSurnameChange(e) {
      setSurname(e.target.value);
    }
  
    return (
      <>
        <input value={name} onChange={handleNameChange} />
        <input value={surname} onChange={handleSurnameChange} />
        <p>Hello, {name} {surname}</p>
      </>
    );
  }