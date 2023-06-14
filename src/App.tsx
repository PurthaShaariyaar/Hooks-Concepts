import './App.css'
import { useState, useEffect, useCallback, useRef, MouseEvent, KeyboardEvent, useMemo } from 'react'
import Button from './components/Button';
import Counter from './components/Counter';

interface IUser {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum = 30

function App() {

  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<IUser[] | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    console.log('Mounting');
    console.log('Users: ', users);

    return () => console.log('Unmounting');
  })

  const increment = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void =>
    {
      console.log(e);
      setCount((prevCount) => prevCount + 1)
    }, []
  );

  const decrement = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void =>
    {
      console.log(e);
      setCount((prevCount) => prevCount - 1)
    }, []
  );


  const reset = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void =>
    {
      console.log(e);
      setCount(0);
    }, []
  );

  const result = useMemo<number>(() => fib(myNum), []);

  return (
    <div>
      <h1>{count}</h1>
      <Button
        name='Increment'
        onClick={increment}
      />
      <Button
        name='Decrement'
        onClick={decrement}
      />
       <Button
        name='Reset'
        onClick={reset}
      />
      <h2>This is the Fibonacci Function Result: {result}</h2>
      <input ref={inputRef} type='text' />
      <Button
        name='useRef'
        onClick={handleClick}
      />
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </div>
  )
}

export default App
