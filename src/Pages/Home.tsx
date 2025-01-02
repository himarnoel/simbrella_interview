import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className=" flex flex-col h-screen items-start px-4 ">
      <img
        src="https://www.simbrella.com/site/templates/img/logo_colored.svg"
        alt=""
        className="w-[12rem] mt-4"
      />
      <div className="flex flex-1 w-full bg-red-700 mt-8  items-center justify-center">
        <div className="bg-white"></div>
      </div>
    </div>
  );
};

export default Home;
