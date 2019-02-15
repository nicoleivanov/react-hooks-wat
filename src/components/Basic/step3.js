import React, { useState, useEffect } from 'react';

export default () => {
    const [name, setName] = useState('Mary');
    const [surname, setSurname] = useState('Poppins');
    const [width, setWidth] = useState(window.innerWidth); 

    const handleResize = () => setWidth(window.innerWidth);
  
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
        <p>Window width: {width}</p>
      </>
    );
  }