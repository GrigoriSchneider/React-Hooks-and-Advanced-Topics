import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log('call useEffect');
  //   if (value >= 1) {
  //     document.title = `New Messages (${value})`;
  //   }
  // });

  // useEffect(() => {
  //   console.log('call useEffect');
  //   if (value >= 1) {
  //     document.title = `New Messages (${value})`;
  //   }
  // }, []); // with the empty array as the second argument it only run ones with the initial render

  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]); // with the value in the array as the second argument it only runs when value is changed

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
