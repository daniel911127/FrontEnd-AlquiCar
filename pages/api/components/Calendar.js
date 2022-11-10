import React from 'react';
import { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';

function Calendar() {
  const [value, setValue] =
    useState <
    [Date | null, Date | null] >
    [(new Date(2021, 11, 1), new Date(2021, 11, 5))];
  return (
    <div>
      <RangeCalendar value={value} onChange={setValue} />;
    </div>
  );
}
export default Calendar;
