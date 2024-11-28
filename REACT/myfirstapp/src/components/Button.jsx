import React from 'react'
import '.index.scss';

function Button({click}) {
  return (
    <div>
        <h1>welcome here</h1>
        <button style={{backgroundColor:bg}} onClick={click}>welcome</button>
    </div>
  )
}

export default Button;