import React from 'react';
import './style.scss';

export default function TableItem(props) {
  return (
    <tr className="all-table-item">
      <td>{props.Ranking}</td>
      <td>{props.Title}</td>
      <td>{props.Year}</td>
      <td>{props.Revenue}</td>
    </tr>
  );
}
