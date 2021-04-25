import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Select, FormControl, InputLabel } from "@material-ui/core";

export type ListItem = {
  value: string | number,
  text: string | number,
}

type Props = {
  value: string | number,
  items: any,
  onChangeHandler: any,
};

const BaseSelect: React.FC<Props> = ({
  value,
  items,
  onChangeHandler
}) => {

  return (
    <FormControl>
      <InputLabel>Day</InputLabel>
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
