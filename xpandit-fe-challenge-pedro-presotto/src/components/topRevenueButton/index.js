import React, { useState } from 'react';
import './style.scss';

export default function TopRevenueButton(props) {
  function renderButtonStyle() {
    return props.Active ? 'top-rev-button active-button' : 'top-rev-button ';
  }

  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      className={renderButtonStyle()}
    >
      Top 10 Revenue
    </button>
  );
}
