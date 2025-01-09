import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[999] flex items-center justify-center">
        <div className="loader">
  <div className="box1" />
  <div className="box2" />
  <div className="box3" />
</div>

      </div>
    </div>
  );
};

export default Loader;
