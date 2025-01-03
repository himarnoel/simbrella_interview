import React, { useState } from "react";

import { BiPlus, BiSearch } from "react-icons/bi";
// import RequestTransaction from "../../components/RequestTransaction";
import { Link } from "react-router-dom";
import { transactionHistory } from "../../Utils/data";



const TransactionHistory = () => {
  const [query, setQuery] = useState<string>("");
  const [isOpenTransactionRequest, setIsOpenTransactionRequest] =
    useState<boolean>(false);
  

  const filteredTransactions = transactionHistory.filter((transaction) => {
    const lowerQuery = query.toLowerCase();
    return (
      transaction.amount.toString().includes(lowerQuery) ||
      transaction.tenure.toLowerCase().includes(lowerQuery) ||
      (transaction.transactionDate &&
        transaction.transactionDate.includes(lowerQuery)) ||
      transaction.balance.toString().includes(lowerQuery) ||
      transaction.status.toLowerCase().includes(lowerQuery)
    );
  });
  return (
    <div>
      {/* <RequestTransaction
        isOpen={isOpenTransactionRequest}
        setIsOpen={setIsOpenTransactionRequest}
      /> */}
      <div className="">
        <div className="w-full p-4 mt-4 bg-white overflow-x-auto">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold">Transaction History</p>
            <div className="flex items-center gap-2 px-2 bg-white rounded-lg border border-[#d0d3d9] border-solid">
              <BiSearch className="text-xl inset-y-1 text-[#565657] " />
              <input
                type="text"
                id="query"
                value={query}
                placeholder="Search transactions..."
                onChange={(e) => setQuery(e.target.value)}
                className="py-2 pr-2 md:py-2 md:pr-0 text-gray-900 outline-none pl-3 md:pl-0"
              />
            </div>
          </div>
          <table className="min-w-full bg-white rounded-lg mt-4">
            <thead>
              <tr className="bg-[#F9FAFB]">
                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer rounded-t-lg text-gray-600">
                  Transaction ID
                </th>
                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer rounded-t-lg text-gray-600">
                  Amount
                </th>
                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                  Tenure
                </th>
                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                  Type
                </th>

                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                  Transaction Date
                </th>
                
                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                  Status
                </th>
                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600 rounded-t-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                  >
                    <td className="text-sm font-medium p-2 py-4  text-nowrap text-gray-700">
                      {transaction.transactionId}
                    </td>
                    <td className="text-sm font-medium p-2 py-4  text-nowrap text-gray-700">
                      ₦{transaction.balance.toLocaleString()}.00
                    </td>
                    <td className="text-sm font-medium p-2 py-4  text-nowrap text-gray-700">
                      {transaction.tenure}
                    </td>
                    <td
                      className={`text-sm font-medium p-2 py-4  text-nowrap text-gray-700 ${
                        transaction.transactionType === "Credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.transactionType}
                    </td>
                    <td className="text-sm font-medium p-2 py-4  text-nowrap text-gray-700">
                      {transaction.transactionDate}
                    </td>
                
                    <td className="text-sm font-medium p-2 py-4  text-nowrap text-gray-700">
                      <span
                        className={`p-1 w-fit rounded-full flex items-center gap-2 px-4 ${
                          transaction.status == "Active"
                            ? "bg-green-50 text-green-700"
                            : transaction.status == "Paid"
                            ? "bg-gray-50 text-gray-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        <div
                          className={`h-2 w-2 rounded-full ${
                            transaction.status == "Active"
                              ? "bg-green-500"
                              : transaction.status == "Paid"
                              ? "bg-gray-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="text-sm underline font-medium p-2 py-4 text-nowrap text-gray-700">
                      <Link
                        to={`/dashboard/transactions/${transaction.transactionId}`}
                      >
                        {" "}
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No transactions match the search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;

export const Component = TransactionHistory;
