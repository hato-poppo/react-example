import "./styles.css";
import React, { useState } from "react";
import YearList from "./YearList";
import MonthList from "./MonthList";
import DayList from "./DayList";

export default function App() {
  const [month, setMonth] = useState(1);
  const onChangeMonth = (e: any) => {
    setMonth(e.target.value);
  };

  const [year, setYear] = useState(2021);
  const onChangeYear = (e: any) => {
    setYear(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <YearList onChange={onChangeYear} />
      <MonthList onChange={onChangeMonth} />
      <DayList year={year} month={month} />
    </div>
  );
}
