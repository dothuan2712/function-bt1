import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState();
  const [multiply, setMultiply] = useState();

  const onChangeTotal = () => {
    setTotal(Number(number1) + Number(number2));
  }
  const onChangeMultiply = () => {
    setMultiply(number1 * number2);
  }

  return (
    <div className='container'>
      <div> Số thứ nhất:
        <input
          placeholder='Nhập số thứ nhất:'
          value={number1}
          onChange={e => setNumber1(e.target.value)}
        />
      </div>
      <div> Số thứ hai :
        <input
          placeholder='Nhập số thứ hai'
          value={number2}
          onChange={e => setNumber2(e.target.value)}
        />
      </div>
      <div onClick={onChangeTotal}>Tổng hai số là: {total}</div>
      <div onClick={onChangeMultiply}>Tích hai số là: {multiply}</div>
    </div>
  );
}