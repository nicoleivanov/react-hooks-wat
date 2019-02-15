import React, { useState, useEffect } from 'react';

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