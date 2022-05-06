import React, { useState } from 'react';
import './style.scss';
import Modal from '../modal';

export default function TableItem(props) {
  const [showModal, setShowModal] = useState(false);

  const HandleState = (value) => {
    setShowModal(value);
  };

  return (
    <tr className="all-table-item">
      <td className="align-text">{props.Ranking}</td>
      <td>{props.Title}</td>
      <td>{props.Year}</td>
      <td>{props.Revenue}</td>
      <td
        className="eye"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img src="../../../assets/images/home/eye-icon.svg" alt="eye icon" />
      </td>
      {showModal && <Modal Id={props.Id} HandleState={HandleState} />}
    </tr>
  );
}
