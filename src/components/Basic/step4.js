import React, { useState, useEffect } from 'react';

export default () => {
    const [name, setName] = useState('Mary');
    const [surname, setSurname] = useState('Poppins');
    const [width, setWidth] = useState(window.innerWidth);
    const [location, setLocation] = useState('Cherry Tree Lane');
  
    useEffect(() => {
      // useEffect is for executing side effects, "lifecycle" methods
      document.title = `${name} ${surname}`;

      const handleResize = ()=> setWidth(window.innerWidth);
      window.addEventListener('resize',handleResize);
      return ()=>{
        window.removeEventListener('resize',handleResize);
      }
    },[]);
    
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleSurnameChange(e) {
      setSurname(e.target.value);
    }

    function handleLocationChange(e) {
        setLocation(e.target.value);
    }
  
    return (
      <>
        <input value={name} onChange={handleNameChange} />
        <input value={surname} onChange={handleSurnameChange} />
        <input value={location} onChange={handleLocationChange} />
        <p>Hello, {name} {surname} from {location}</p>
        <p>Window width: {width}</p>
      </>
    );
  }