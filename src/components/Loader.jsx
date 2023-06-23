import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <ColorRing
        visible={loading}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#3E5641", "#A24936", "#282B28", "#D36135", "#83BCA9"]}
      />
    </div>
  );
};

export default Loader;
