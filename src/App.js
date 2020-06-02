import React, { useEffect, useState } from 'react';
import generatePassword from './components/password/password';
import { Page } from "./ui/Page";

function App() {
  const [length, setLength] = useState(8);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const [password, setPassword] = useState(generatePassword(length));

  // On any change
  useEffect(() => {
    if (lower || upper || number || symbol) {
      let characters = {};
      if (lower) characters = { ...characters, lower: true };
      if (upper) characters = { ...characters, upper: true };
      if (number) characters = { ...characters, number: true };
      if (symbol) characters = { ...characters, symbol: true };
      setPassword(generatePassword(length, characters));
    } else {
      setPassword(generatePassword(length));
    }
  }, [lower, upper, number, symbol, length]);

  const handleLength = e => {
    let length = Number.parseInt(e.target.value);
    if(isNaN(length))
      setLength(4);
    else if(length >= 4 && length <= 100)
      setLength(length);
  };

  const handleCheckbox = e => {
    const name = e.target.name;
    if(name === 'lower') setLower(!lower);
    if(name === 'upper') setUpper(!upper);
    if(name === 'number') setNumber(!number);
    if(name === 'symbol') setSymbol(!symbol);
  }

  return (
    <Page password={password}
          lower={lower} upper={upper} number={number} symbol={symbol} onChangeCheckbox={handleCheckbox}
          length={length} onChangeLength={handleLength}  />
  );
}

export default App;
