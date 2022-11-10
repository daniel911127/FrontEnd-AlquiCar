import React from 'react';
import Calendar from '../pages/api/components/Calendar';

export default function CarsList() {
  const array = [
    {
      plate: 'dfr425',
      brand: 'mazda',
      model: 'CX-30',
    },
    {
      plate: 'dfr425',
      brand: 'mazda',
      model: 'CX-30',
    },
    {
      plate: 'dfr425',
      brand: 'mazda',
      model: 'CX-30',
    },
    {
      plate: 'dfr425',
      brand: 'mazda',
      model: 'CX-30',
    },
    {
      plate: 'dfr425',
      brand: 'mazda',
      model: 'CX-30',
    },
  ];
  return (
    <div>
      <Calendar />
    </div>
  );
}
