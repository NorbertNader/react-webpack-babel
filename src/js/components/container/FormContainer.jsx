import React, { useState, useEffect, useMemo } from "react";

let memo = [];

export default function App() {
  const [value, setValue] = useState();

  useEffect(() => {}, [value]);

  memo = useMemo(() => (typeof value === 'number' ? [ ...memo, value ] : memo), [value]);

  const updateUl = () => {
      setTimeout(() => setValue(0), 100);
      setTimeout(() => setValue(0), 200);
      setTimeout(() => setValue(1), 300);
      setTimeout(() => setValue(1), 400);
      setTimeout(() => setValue(1), 500);
      setTimeout(() => setValue(1), 600);
      setTimeout(() => setValue(2), 700);
      setTimeout(() => setValue(2), 800);
      setTimeout(() => setValue(2), 900);
      setTimeout(() => setValue(2), 1000);
      setTimeout(() => setValue(2), 1100);
      setTimeout(() => setValue(2), 1200);
      setTimeout(() => setValue(2), 1300);
      setTimeout(() => setValue(2), 1400);
      setTimeout(() => setValue(3), 1500);
      setTimeout(() => setValue(3), 1600);
      setTimeout(() => setValue(3), 1700);
      setTimeout(() => setValue(3), 1800);
      setTimeout(() => setValue(4), 1900);
      setTimeout(() => setValue(4), 2000);
  };

  // useEffect(() => {
  //   memo.push(value);
  // }, [value]);

  return (
    <>
      <button onClick={updateUl}>add</button>
      <ul>
        {memo.map((item, i) =>
          <li key={i}>{item}test</li>
        )}
      </ul>
    </>
  );
}
