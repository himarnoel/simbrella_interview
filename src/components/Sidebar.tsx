import { Dispatch, SetStateAction } from "react";

import Logo from "./Logo";
import IconLink from "./IconLink";
import { MdDashboard } from "react-icons/md";
import { FaExchangeAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className=" bg-white">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full bg-black/20 z-50 fixed  xl:static  transition-all duration-500  ${
          isOpen ? "visible " : "invisible  xl:visible xl:opacity-100"
        } `}
      >
        <div
          className={`h-screen flex   overflow-y-auto sidebar  bg-white border-grey-100 border lg:flex flex-col w-[60%] md:w-[40%] lg:w-full  lg:max-w-[272px] xl:min-w-[240px] transition-all duration-500    ${
            isOpen ? "-translate-x-0" : "-translate-x-full xl:translate-x-0"
          } `}
        >
          <div className="px-[24px] py-3.5 ">
            <Logo className="!w-[8rem] mx-auto" />
          </div>

          <div className="w-full px-4 mt-5 flex-1">
            <div className="mt-10 flex flex-col gap-4">
              <IconLink
                href="/dashboard"
                IconComponent={MdDashboard}
                label="Dashboard"
              />
              <IconLink
                href="/dashboard/loans"
                IconComponent={FaMoneyCheckAlt} // Another example with FaHome
                label="Loan Management"
              />
              <IconLink
                href="/dashboard/transactions"
                IconComponent={FaExchangeAlt} // Another example with FaHome
                label="Transaction History"
              />
            </div>
          </div>
          <IconLink
            href="/ds"
            IconComponent={BiLogOut} // Another example with FaHome
            label="Logout"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
