import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export type ListItem = {
  value: string | number,
  text: string | number,
}

type Props = {
  label?: string,
  value: string | number,
  items: ListItem[],
  onChangeHandler(): void,
};

const BaseSelect: React.FC<Props> = ({
  label,
  value,
  items,
  onChangeHandler
}) => {

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChangeHandler}
      >
        {items.map((x: any) => {
          return <MenuItem key={x.value} value={x.value}>{x.text}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
