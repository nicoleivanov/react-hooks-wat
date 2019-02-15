import React, { useState, useEffect } from 'react';

// Two hypothetical components, StatusIndicator1 and StatusIndicator2.
// Both separate components that share some state functionality, but not all functionality

// This example shows how you can use custom hooks to share functionality across two completely different components

const useStatusTimer = (isTimerActive)=>{
  const [isActive, setIsActive] = useState(false);              // State variable 1
  
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


const StatusIndicator1 =  () => {
  const [isTimerActive, setIsTimerActive] = useState(true);              // State variable 1
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

const StatusIndicator2 =  () => {
  const [ isActive, setIsActive ] = useStatusTimer(true);              // State variable 

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