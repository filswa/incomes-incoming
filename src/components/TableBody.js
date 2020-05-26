import React from "react";

const TableBody = (props) => {
  return props.data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.city}</td>
      <td>{item.totalIncome}</td>
      <td>{item.averageIncome}</td>
      <td>{item.lastMonthIncome}</td>
    </tr>
  ));
};

export default TableBody;
