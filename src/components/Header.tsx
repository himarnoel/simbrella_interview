import { Dispatch, SetStateAction } from "react";
import { FaAlignJustify } from "react-icons/fa";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: Props) => {
  return (
    <div>
      <div
        className={`w-full  py-[14px] px-4 md:px-7 lg:px-[28px] flex gap-2 bg-white   lg:gap-0 items-center border-b border-grey-100 `}
      >
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="block xl:hidden Flex "
        >
          <FaAlignJustify color="black" />
        </div>

        <div className=" flex gap-1.5 lg:gap-3 justify-between items-center w-full">
          <p className="text-3xl font-semibold">Home</p>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <p className="text-xs text-[#6c6969]">Hello, Good afternoon</p>
              <p className="font-medium">Gina Pwa</p>
            </div>
            <img
              src={"dp.jpg"}
              alt=""
              className="rounded-full h-14 w-14 object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
