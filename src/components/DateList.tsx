import React, { useState } from "react";
import YearList from "components/YearList";
import MonthList from "components/MonthList";
import DayList from "components/DayList";

const DateList = () => {
  const [month, setMonth] = useState(1);
  const onChangeMonth = (e: any) => {
    setMonth(e.target.value);
  };

  const [year, setYear] = useState(2021);
  const onChangeYear = (e: any) => {
    setYear(e.target.value);
  }

  return (
    <div>
      <YearList onChange={onChangeYear} />
      <MonthList onChange={onChangeMonth} />
      <DayList year={year} month={month} />
    </div>
  );
}

export default DateList;