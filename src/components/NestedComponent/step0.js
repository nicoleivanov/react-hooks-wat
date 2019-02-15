import React from 'react';

export default class HookComponent extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { numItems: props.initialNumItems }; 
    }
    
    incrementNumItems = ()=>{
        this.setState({
            numItems: this.state.numItems + 1
        })
    }

    decrementNumItems = ()=>{
        this.setState({
            numItems: this.state.numItems -1
        })
    }

    render(){
        return (
            <>
                <button onClick={()=>this.incrementNumItems( { type: "ADD" } )}>Add Item</button>
                <button onClick={()=>this.incrementNumItems( { type: "REMOVE" } )}>Remove Item</button>
                <ul>
                {
                    (()=>{
                        let nestedItems = [];
                        for (let i = 0; i < this.state.numItems; i++) {
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
}

class NestedItem extends React.Component{
    state = {
        inputValue: "",
    }

    setInputValue = (val)=>{
        this.setState({
            inputValue: val,
        })
    }

    render(){
        return (
            <li>
              <input value={this.state.inputValue} onChange={(event)=>this.setInputValue(event.target.value)} placeholder="🎣  are 🆒 "/>
            </li>
        );
    }
}