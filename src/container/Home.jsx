import React, { useState } from "react";

const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  return (
    <>
      <div
        className={`w-2  ${isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.4]"}
          min-h-screen max-h-screen relative bg-red-300`}
      >
        <div className="w-8 h-8 bg-white rounded-tr-lg -right-6 rounded-br-lg flex items-center justify-center cursor-pointer absolute"></div>
      </div>
      <div></div>
    </>
  );
};

export default Home;
