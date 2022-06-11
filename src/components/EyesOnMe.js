// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  function handleFocus(event) {
    event.target.focus();
    console.log('Good!');
  }

  function handleBlur(event) {
    event.target.blur();
    console.log('Hey! Eyes on me!');
  }

  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;