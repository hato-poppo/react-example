import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

type Props = {
  onChange?: any;
};

const YearList: React.FC<Props> = ({
  onChange,
}) => {
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
  const items = years.map((x: number) => {
    return { value: x, text: x };
  });

  return (
    <FormControl>
      <InputLabel>Year</InputLabel>
      <Select
        onChange={onChange}
        defaultValue={2021}
      >
        {items.map((x: number) => {
          return <MenuItem key={x.value} value={x.value}>{x.text}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

// 今の実装は親からイベント用関数を受け取っている。
// この方法だと結局親が子のイベントを管理することになって効率が悪い。子には自立して欲しい。

// 子から親に自発的に送るほうが良いと思う
// 親が受け取るか受け取らないかは子は関与しない方向で。

// 子コンポーネントについて
// 基本的に独立させること。
// 独立していないと、分離する意味がない（結局親が全て面倒をみることになる＝分散出来ない＝記述量があまり減らせない）

// スタイルについて
// 自分の外側に影響を与えるようなスタイルは禁止
// →自分の外側に関しては自分が認識出来ない範囲なので、汎用性を下げたり外側でトリッキーな指定をする羽目になってしまうので
// 例：　自ファイル内の最上位コンポーネントに marginを付与
// 呼び出し元のファイル（親コンポーネントが指定するべき）
export default YearList;
