import {useState} from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export function Example2() {
  const counter = <Counter />;

  return (
    <>
      {counter}
      {counter}
    </>
  );
}
