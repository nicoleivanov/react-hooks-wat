import React from 'react';
import HookComponent from './components/Basic/step0';//increment steps up until step5
//import Reducer from './components/Reducer';
//import NestedComponentContainer from './components/NestedComponent/step0';// increment until step2
//import Memoize from './components/Memoize/index.js';
//import { StatusIndicators } from './components/CustomHooks';


export default () => {
  return (
    <>
      <HookComponent/>
      {/* <ReducerTest initialCount={0}/> */}
      {/* <NestedComponentContainer initialNumItems={1}/> */}
      {/* <StatusIndicators/> */}
      {/* <Memoize defaultNumber={3} defaultText={""}/> */}
    </>
  );
}
