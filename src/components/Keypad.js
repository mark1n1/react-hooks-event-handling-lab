// Code Keypad Component Here
import React from 'react';

function Keypad() {
  function handleKeypad() {
    console.log('Entering password...');
  }

  return (
    <div>
      <input onChange={handleKeypad} type="password"/>
    </div>
  )
}

export default Keypad;