import React, { useState, useEffect } from 'react';


const StatusIndicator1 =  () => {
  const [isActive, setIsActive] = useState(false);              
  const [isTimerActive, setIsTimerActive] = useState(true);              
  
  return (
    <>
      <button onClick={()=>{setIsTimerActive(!isTimerActive)}}>{isTimerActive ? "Pause timer" : "Start timer"}</button>
      <button 
        style={{
          cursor: "pointer",
          display: "block",
          margin: "0 auto",
          backgroundColor: (isActive? "#c9ffcb" : "#ffc9c9"),
        }}
        onClick={()=>{ setIsActive(!isActive) }}>
        {isActive ? "Active" : "Inactive"}
      </button>
    </>
  );
}

const StatusIndicator2 =  () => {
  const [isActive, setIsActive] = useState(false);              
  
  useEffect(() => {
    console.log("Use effect!");
    const timeout = setTimeout(()=>{
      setIsActive(!isActive);
    },1000);
    return () => {
      console.log("Timeout cleared");
      clearTimeout(timeout);
    }
  });

  return (
    <>
      <button 
        style={{
          cursor: "pointer",
          display: "block",
          margin: "0 auto",
          backgroundColor: (isActive? "#c9ffcb" : "#ffc9c9"),
        }}
        onClick={()=>{ setIsActive(!isActive) }}>
        {isActive ? "Active" : "Inactive"}
      </button>
    </>
  );
}


export const StatusIndicators =  () => {
  return (
    <>
      <StatusIndicator1/>
      <StatusIndicator2/>
    </>
  );
}