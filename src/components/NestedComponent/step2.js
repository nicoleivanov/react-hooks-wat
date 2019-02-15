import React, { useState, useReducer } from 'react';

function reducer(numItems, action) {
    switch (action.type) {
      case 'ADD':
        return numItems + 1;
      case 'REMOVE':
        if(numItems === 0) return 0;
        return numItems - 1;
      case 'DOUBLE':
        if(numItems === 0) return 0;
        return numItems * 2;
      default:
        throw new Error();
    }
  }

export default ({initialNumItems}) => {
    const [numItems, dispatch] = useReducer(reducer, initialNumItems);

    return (
      <>
        <button onClick={()=>dispatch( { type: "ADD" } )}>Add Item</button>
        <button onClick={()=>dispatch( { type: "REMOVE" } )}>Remove Item</button>
        <button onClick={()=>dispatch( { type: "DOUBLE" } )}>Double Items</button>
        <ul>
            {
                (()=>{
                    let nestedItems = [];
                    for (let i = 0; i < numItems; i++) {
                        nestedItems.push(
                            <NestedItem key={`nested-item-${i}`} itemNumber={i}/>
                        );
                    }
                    return nestedItems;
                })()
            }
            </ul>
      </>
    );
  }


  const NestedItem = ({itemNumber}) => {
    const [inputValue, setInputValue] = useState("");

    // useEffect(()=>{
    //     console.log("useEffect", itemNumber );
    //     return ()=>{
    //         console.log("Return useEffect", itemNumber );
    //     }
    // },[]);//notice the empty array to indicate to only perform useEffect at mount and unmount

    return (
        <li>
          <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} placeholder="🎣  are 🆒 "/>
        </li>
    );
}