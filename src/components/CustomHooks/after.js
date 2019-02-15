import React, { useState, useEffect } from 'react';

// Two hypothetical components, StatusIndicatorWithPause and StatusIndicator.
// Both separate components that share some state functionality, but not all functionality

// This example shows how you can use custom hooks to share functionality across two completely different components


// Custom Hook! Notice the naming convention!
const useStatusTimer = (isTimerActive)=>{
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    console.log("Use effect!");
    if(!isTimerActive) return;
    const timeout = setTimeout(()=>{
      setIsActive(!isActive);
    },1000);
    return () => {
      console.log("Timeout cleared");
      clearTimeout(timeout);
    }
  });

  return [isActive,setIsActive];
}


const StatusIndicatorWithPause =  () => {
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [ isActive, setIsActive ] = useStatusTimer(isTimerActive); 

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

const StatusIndicator =  () => {
  const [ isActive, setIsActive ] = useStatusTimer(true);

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
      <StatusIndicatorWithPause/>
      <StatusIndicator/>
    </>
  );
}