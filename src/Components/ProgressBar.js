import React from 'react';
import './ProgressBar.css';
const ProgressBar = (props) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${props.progress - 100}%)`,
        }}
        role="progressbar"
        aria-valuenow={props.progress}
        aria-valuemax="100"
        aria-valuemin="0">
        {props.progress - 100}
      </div>
    </div>
  );
};
export default ProgressBar;
