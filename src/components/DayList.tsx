import React, { useState, useEffect } from "react";
import BaseSelect from 'components/base/BaseSelect';

type Props = {
  year: number,
  month: number,
};

type ListItem = {
  value: string | number,
  text: string | number,
}

const getLastDay = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

const firstDay = 1;
const getMonthDays = (from: number, to: number): number[] =>
  [...Array(to - from + firstDay)].map((_, i) => from + i);

const DayList: React.FC<Props> = ({
  year,
  month,
}) => {
  const lastDay = getLastDay(year, month);
  const defaultItem = { value: 1, text: 1 };

  const [value, setValue] = useState<number>(1);
  const [items, setItems] = useState<any>([defaultItem]);
  useEffect(() => {
    setValue(lastDay);
    const days = getMonthDays(firstDay, lastDay);
    setItems(
      days.map((num: number) => {
        return { value: num, text: num } as ListItem;
      })
    );
  }, [lastDay]);

  const onChangeDayHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <BaseSelect
      label={'Day'}
      value={value}
      items={items}
      onChange={onChangeDayHandler}
    />
  );
};

export default DayList;
