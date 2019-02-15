import React, { useState } from 'react';

export default ({initialNumItems}) => {
    const [numItems, setNumItems] = useState(initialNumItems);

    const incrementNumItems = ()=>{setNumItems(numItems + 1)
    }

    const decrementNumItems = ()=>{
        if(numItems === 0 ) return;
        setNumItems(numItems - 1)
    }

    return (
        <>
            <button onClick={()=>incrementNumItems()}>Add Item</button>
            <button onClick={()=>decrementNumItems()}>Remove Item</button>
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