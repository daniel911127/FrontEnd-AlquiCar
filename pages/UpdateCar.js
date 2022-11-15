import React from 'react';
import { useState } from 'react';

export default function UpdateCar() {
  const [plate, setPlate] = useState('');

  const handleChange = (event) => {};

  return (
    <div>
      <label htmlFor='plate'>
        PLACA
        <br />
      </label>
      <input
        type='text'
        name='plate'
        id='plate'
        onChange={(e) => setPlate(e.target.value)}
        value={plate}
      ></input>
      <br />
      <label htmlFor='file'>
        Foto
        <br />
      </label>
      <input
        type='file'
        accept='image/*'
        name='photo'
        id='photo'
        onChange={handleChange}
      ></input>
    </div>
  );
}
