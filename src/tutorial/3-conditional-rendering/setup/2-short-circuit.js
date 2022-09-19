import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(true);

  // const firstValue = text || 'hello world'; // when text string is empty 'hello is '
  // const secondValue = text && 'hello world'; // will only show when text is not an empty string

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {text && <h1>hello world</h1>} */}
      {/* {!text && <h1>hello world</h1>} */}
      {isError && <h2>Error... biatch</h2>}
      {isError ? <p>there kaka error</p> : <p>there is no kaka error</p>}
    </>
  );
};

export default ShortCircuit;
