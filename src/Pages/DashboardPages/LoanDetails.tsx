import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { ClipLoader } from "react-spinners";
import { formatDateToDDMMYYYY } from "../../Utils/data";
import { useGetLoanByIdQuery } from "../../services/loansAPI";

const LoanDetails = () => {
  const { loanId } = useParams();
  const { data: loan,  isLoading } = useGetLoanByIdQuery(loanId ?? "");

  if (isLoading) {
    return (
      <div className=" flex items-center w-full justify-center">
        <ClipLoader color="#2D3192" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 items-center ">
        <Link
          to={`/dashboard/loans`}
          className="h-10 w-10 shadow-sm rounded-lg cursor-pointer bg-white flex items-center justify-center"
        >
          <BiChevronLeft className="text-2xl" />
        </Link>
        <p className="text-2xl">Loan Details</p>
      </div>
      <div className="w-full bg-white drop-shadow-sm min-h-20 max-w-[800px] mx-auto p-8 gap-6 mt-10 rounded-xl grid grid-cols-3 r">
        <div className="flex flex-col gap-2">
          <span>Loan ID</span>

          <span>{loan?.loanId}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Loan Amount</span>

          <span>₦ {loan?.amount}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Tenure</span>

          <span>{loan?.tenure}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Settlement Balance</span>

          <span>₦ 383,325</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Status</span>

          <span
            className={`p-1 w-fit rounded-full text-sm flex items-center gap-2  px-4 ${
              loan?.status == "Active"
                ? "bg-green-50 text-green-700"
                : loan?.status == "Paid"
                ? "bg-gray-50 text-gray-500"
                : loan?.status == "Submitted"
                ? "bg-gray-50 text-gray-500"
                : "bg-red-50 text-red-500"
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                loan?.status == "Active"
                  ? "bg-green-500"
                  : loan?.status == "Paid"
                  ? "bg-gray-500"
                  : loan?.status == "Submitted"
                  ? "bg-gray-500"
                  : "bg-red-500"
              }`}
            ></div>{" "}
            {loan?.status}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Repayment Date</span>

          <span>{formatDateToDDMMYYYY(loan?.repaymentDate ?? "")}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Loan Balance</span>

          <span>₦ {loan?.balance}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Loan Purpose</span>

          <span>{loan?.purpose}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Net Pay</span>

          <span>₦ {loan?.netPay}</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default LoanDetails;

export const Component = LoanDetails;
