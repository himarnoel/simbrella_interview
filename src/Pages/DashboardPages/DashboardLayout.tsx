import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex h-screen overflow-hidden w-full bg-[#FCFCFD]">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex flex-col flex-1 overflow-hidden w-full">
          <Header setIsOpen={setIsOpen} />
          <div
            className={`h-screen overflow-auto w-full px-4 md:px-8 lg:px-7 pt-6 
        
            `}
          >
            <div className=" w-full"> {<Outlet />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

export const Component = DashboardLayout;
