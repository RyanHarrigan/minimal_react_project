import React, {useState, useEffect} from 'react';

export const ExampleComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value % 10 == 0){
      alert('You clicked %10 times')
    }
  }, [value, setValue])

  return <div className={'self-center text-white'}>
    <div>&lt;ExampleComponent /&gt; content</div>

    <div>value is {value}</div>

    <div onClick={() => {
      setValue(value+1);
    }} className={'w-[5em] select-none text-center bg-pink-600 hover:bg-pink-800 rounded-lg mx-auto my-8 cursor-pointer'}>
      click
    </div>
  </div>;
}