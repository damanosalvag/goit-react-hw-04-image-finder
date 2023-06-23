import React from "react";

const ButtonMore = ({ onPageChange, showBtn }) => {
  return (
    <footer>
      {showBtn ? (
        <button onClick={onPageChange} className="more-btn">
          <i className="bi bi-plus-square-fill more-icon"></i>
        </button>
      ) : null}
    </footer>
  );
};

export default ButtonMore;
