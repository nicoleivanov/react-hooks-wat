import React, { useMemo, useState } from 'react';

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  const computeLetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };


export default ({defaultNumber,defaultText}) => {
    const [numberValue, setNumberValue] = useState(defaultNumber);
    const memoizedNumberValue = useMemo(() => factorialize(numberValue), [numberValue]);
    
    const words = ['hey', 'this', 'is', 'cool'];
    const word = words[numberValue];

    const [textValue, setTextValue] = useState(word);
    const memoizedTextValue = useMemo(() => computeLetterCount(word), [word]);
    console.log(memoizedTextValue);

    return (
        <div>
            <b>Factorial: {memoizedNumberValue}</b>
            <input type="number" step="1" value={numberValue} onChange={(event)=>setNumberValue(event.target.value)}/>
            <b>Word Count: {memoizedTextValue}</b>
            <input type="text" value={word} onChange={(event)=>setTextValue(event.target.value)}/>
        </div>
    );
}