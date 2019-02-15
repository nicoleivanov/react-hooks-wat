import React from 'react';
import HookComponent from './components/Basic/step0';//increment steps up until step5
//import NestedComponentContainer from './components/NestedComponent/step0';// increment until step2
//import ReducerComponenet from './components/ReducerHook';
//import { StatusIndicators } from './components/CustomHooks/after';// before and after
//import Memoize from './components/Memoize/index.js';

export default () => {
  return (
    <>
      <HookComponent/>
      {/* <NestedComponentContainer initialNumItems={1}/> */}
      {/* <ReducerComponenet initialCount={0}/> */}
      {/* <StatusIndicators/> */}
      {/* <Memoize defaultNumber={3} defaultText={""}/> */}
    </>
  );
}
