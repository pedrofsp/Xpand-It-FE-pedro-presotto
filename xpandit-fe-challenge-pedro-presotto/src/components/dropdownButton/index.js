import React, { useState, useEffect } from 'react';
import './style.scss';

export default function DropdownButton(props) {
  const [years, setYears] = useState([]);
  const [dropdownToggle, setDropdownToggle] = useState(false);

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 20;
    const auxYears = [];

    for (var i = max; i >= min; i--) {
      auxYears.push(i);
    }
    setYears(auxYears);
  }

  useEffect(() => {
    generateArrayOfYears();
  }, []);

  const listYears = years.map((item) => (
    <div
      onClick={() => {
        let auxArr = props.OriginalContent.filter(
          (content) => content.year === item
        );
        if (auxArr.length === 0) {
          alert('No result!');
        } else {
          props.propSetContent(auxArr);
          setDropdownToggle(false);
          document.getElementById('dropdown').style.display = 'none';
        }
      }}
      className="year"
    >
      {item}
    </div>
  ));

  function renderButtonStyle() {
    return dropdownToggle
      ? 'dropdown-button active-button'
      : 'dropdown-button ';
  }

  return (
    <div className="all-dropdown-button">
      <button
        onClick={() => {
          if (dropdownToggle)
            document.getElementById('dropdown').style.display = 'none';
          else document.getElementById('dropdown').style.display = 'block';
          setDropdownToggle(!dropdownToggle);
          props.onClick();
        }}
        className={renderButtonStyle()}
      >
        Top 10 Revenue per Year
      </button>
      <div>
        <div id="dropdown">
          <p>Select a year</p>
          <br />
          {listYears}
        </div>
      </div>
    </div>
  );
}
