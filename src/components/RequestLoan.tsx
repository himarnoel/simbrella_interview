import React from "react";
import { BiMoney } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const RequestLoan = ({ setIsOpen, isOpen }: Props) => {


  const formik = useFormik({
    initialValues: {
      amount: "",
      tenure: "",
      purpose: "",
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .required("Amount is required")
        .positive("Amount must be positive"),
      tenure: Yup.string().required("Tenure is required"),
      purpose: Yup.string().required("Purpose is required"),
    }),
    onSubmit: (values) => {
      console.log("values", values);

      formik.resetForm();
    },
  });

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`pt-[2%] top-0 left-0 z-50 h-screen w-full bg-black/20 fixed overflow   ${
          isOpen ? "visible" : "invisible"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[523px] mx-auto w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${
            isOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <BiMoney className="text-xl" />
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[#101928] font-semibold text-[20px]">
                Request a New Loan
              </p>
              <p className="text-[#5D6679] text-[14px]">
                Manually make a loan request
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="!h-8 !w-10 border flex items-center justify-center rounded-lg "
            >
              {" "}
              <CgClose color="#101928" height={16} width={16} />
            </button>
          </div>

          <div className="mt-2 flex flex-col gap-4">
            
            <div className="flex flex-col">
              <label
                htmlFor="amount"
                className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
              >
               Loan Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter loan amount"
                className="py-3 pr-2 md:py-3 md:pr-4 rounded-lg bg-white border border-[#d0d3d9] border-solid text-gray-900 outline-none pl-3 md:pl-4"
              />
              {formik.touched.amount && formik.errors.amount && (
                <p className=" text-xs text-red-500">{formik.errors.amount}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="tenure"
                className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
              >
                Loan Tenure (in months)
              </label>
              <input
                type="number"
                id="tenure"
                name="tenure"
                value={formik.values.tenure}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter loan tenure"
                className="py-3 pr-2 md:py-3 md:pr-4 rounded-lg bg-white border border-[#d0d3d9] border-solid text-gray-900 outline-none pl-3 md:pl-4"
              />
              {formik.touched.tenure && formik.errors.tenure && (
                <p className=" text-xs text-red-500">{formik.errors.tenure}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="purpose"
                className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
              >
                Loan Purpose
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formik.values.purpose}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter loan purpose"
                className="py-3 pr-2 md:py-3 md:pr-4 w-full rounded-lg bg-white border border-[#d0d3d9] border-solid text-gray-900 outline-none pl-3 md:pl-4"
              />
              {formik.touched.purpose && formik.errors.purpose && (
                <p className=" text-xs text-red-500">{formik.errors.purpose}</p>
              )}
            </div>
            <div className="flex gap-2 justify-end">
              <button
                type="submit"
                className="disabled:opacity-75 w-fit disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-xl  flex flex-col md:flex-row items-center justify-center  py-3 px-4 font-display text-sm md:text-sm  border text-gray-600 font-bold  hover:bg-primary-500 mt-8"
                // disabled={isLoading}
              >
                Close
              </button>{" "}
              <button
                type="submit"
                className="disabled:opacity-75 w-fit disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-xl  flex flex-col md:flex-row items-center justify-center py-3 px-4 font-display text-sm md:text-sm  bg-[#2D3192] font-bold text-white hover:bg-primary-500 mt-8"
                // disabled={isLoading}
              >
                Make Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestLoan;
