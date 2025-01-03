import { useState } from "react";

import { BiPlus, BiSearch } from "react-icons/bi";
import RequestLoan from "../../components/RequestLoan";
import { Link } from "react-router-dom";
import { useGetLoansQuery } from "../../services/loansAPI";
import { ClipLoader } from "react-spinners";
import { formatDateToDDMMYYYY } from "../../Utils/data";

const LoanManagement = () => {
  const [query, setQuery] = useState<string>("");
  const [isOpenLoanRequest, setIsOpenLoanRequest] = useState<boolean>(false);
  const { data, error, isLoading } = useGetLoansQuery();
  console.log(data, error, isLoading);

  const filteredLoans = data?.filter((loan) => {
    const lowerQuery = query.toLowerCase();
    return (
      loan.tenure.toLowerCase().includes(lowerQuery) ||
      (loan.repaymentDate && loan.repaymentDate.includes(lowerQuery)) ||
      loan.balance.toString().includes(lowerQuery) ||
      loan.status.toLowerCase().includes(lowerQuery)
    );
  });


  if (isLoading) {
    return (
      <div className=" flex items-center w-full justify-center">
        <ClipLoader color="#2D3192" />
      </div>
    );
  }
  return (
    <div>
      <RequestLoan
        isOpen={isOpenLoanRequest}
        setIsOpen={setIsOpenLoanRequest}
      />
      <div className="">
        <button
          type="submit"
          onClick={() => setIsOpenLoanRequest(true)}
          className="disabled:opacity-75 disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-xl flex flex-col md:flex-row items-center justify-center  py-2 px-2 font-display w-fit text-sm md:text-sm  bg-[#2D3192] font-bold text-white hover:bg-primary-500 mt-2"
          // disabled={isLoading}
        >
          <BiPlus className="text-xl" /> Request Loan
        </button>
        <div className="w-full p-4 mt-4 bg-white ">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold">Loan History</p>
            <div className="flex items-center gap-2 py-1 px-2 bg-white  rounded-lg border border-[#d0d3d9] border-solid">
              <BiSearch className="text-xl  inset-y-1 text-[#565657] " />
              <input
                type="text"
                id="query"
                value={query}
                placeholder="Search loans..."
                onChange={(e) => setQuery(e.target.value)}
                className="py-2 pr-2 md:py-2 md:pr-0  text-gray-900 outline-none pl-3 md:pl-0"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg mt-4">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium  cursor-pointer  rounded-t-lg text-gray-600">
                    Loan ID
                  </th>
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium  cursor-pointer  rounded-t-lg text-gray-600">
                    Loan Amount
                  </th>
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    Tenure
                  </th>
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    Purpose
                  </th>

                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                    Repayment Date
                  </th>
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                    Balance
                  </th>
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    Status
                  </th>
                  <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600  rounded-t-lg">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLoans!.length > 0 ? (
                  filteredLoans?.reverse().map((loan) => (
                    <tr
                      key={loan.id}
                      className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                    >
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        {loan.loanId}
                      </td>
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        ₦{loan.amount.toLocaleString()}
                      </td>
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        {loan.tenure}
                      </td>
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        {loan.purpose}
                      </td>
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        {formatDateToDDMMYYYY(loan.repaymentDate ?? "")}
                      </td>
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        ₦{loan.balance.toLocaleString()}
                      </td>{" "}
                      <td className="text-sm font-medium p-2 py-4 text-nowrap text-gray-700">
                        <span
                          className={`p-1 w-fit rounded-full flex items-center gap-2 py- px-4 ${
                            loan.status == "Active"
                              ? "bg-green-50 text-green-700"
                              : loan.status == "Paid"
                              ? "bg-gray-50 text-gray-700"
                              : loan?.status == "Submitted"
                              ? "bg-gray-50 text-gray-700"
                              : "bg-red-50 text-red-700"
                          }`}
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${
                              loan.status == "Active"
                                ? "bg-green-500"
                                : loan.status == "Paid"
                                ? "bg-gray-500"
                                : loan?.status == "Submitted"
                                ? "bg-gray-500"
                                : "bg-red-500"
                            }`}
                          ></div>{" "}
                          {loan.status}
                        </span>
                      </td>
                      <td className="text-sm  underline font-medium p-2 py-4 text-nowrap text-gray-700">
                        <Link to={`/dashboard/loans/${loan.id}`}>
                          {" "}
                          View Details
                        </Link>
                      </td>{" "}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      No loans match the search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanManagement;

export const Component = LoanManagement;
