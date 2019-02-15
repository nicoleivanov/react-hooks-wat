import React, { useState } from 'react';

export const useFormInput = (initialValue)=>{
    const [value, setValue] = useState(initialValue);
    function onHandleChange(e) {
      setValue(e.target.value);
    }
    return { value, onChange: onHandleChange };
}

export default () => {
    const name = useFormInput('Mary');
    const surname = useFormInput('Poppins');
    const location = useFormInput('Cherry Tree Lane');
    const age = useFormInput('27');
  
    return (
      <>
        <input {...name} />
        <input {...surname} />
        <input {...location} />
        <input {...age} />
        <p>Hello, {name.value} {surname.value}, {age.value}, from {location.value}</p>
      </>
    );
  }