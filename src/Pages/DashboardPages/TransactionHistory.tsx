import { useState } from "react";

import { BiSearch } from "react-icons/bi";
// import RequestTransaction from "../../components/RequestTransaction";
import { Link } from "react-router-dom";
import { transactionHistory, TransactionInterface } from "../../Utils/data";
import { FaArrowUp } from "react-icons/fa";

const TransactionHistory = () => {
  const [query, setQuery] = useState<string>("");
  const [transactions, setTransactions] =
    useState<TransactionInterface[]>(transactionHistory);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof TransactionInterface;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof TransactionInterface) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedTransaction = [...transactions].sort((a, b) => {
      if (a[key] === undefined || b[key] === undefined) return 0;

      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setTransactions(sortedTransaction);
  };

  // Apply filtering on sorted transactions
  const filteredTransactions = transactions.filter((transaction) => {
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

                <th className="text-nowrap flex  items-center gap-2 p-2 py-4 text-left text-sm font-medium cursor-pointer rounded-t-lg text-gray-600">
                  <div
                    onClick={() => handleSort("amount")}
                    className=" flex  items-center gap-2"
                  >
                    {" "}
                    Amount
                    <div
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "amount" &&
                        sortConfig.direction === "asc"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    >
                      <FaArrowUp color={"#5D6679"} />
                    </div>
                  </div>
                </th>

                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                  <div
                    onClick={() => handleSort("transactionDate")}
                    className=" flex  items-center gap-2"
                  >
                    Date
                    <div
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "transactionDate" &&
                        sortConfig.direction === "asc"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    >
                      <FaArrowUp color={"#5D6679"} />
                    </div>
                  </div>
                </th>

                <th className="text-nowrap p-2 py-4 text-left text-sm font-medium cursor-pointer text-gray-600">
                  <div
                    onClick={() => handleSort("transactionType")}
                    className="flex   items-center gap-2 "
                  >
                    Type
                    <div
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "transactionType" &&
                        sortConfig.direction === "asc"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    >
                      <FaArrowUp color={"#5D6679"} />
                    </div>
                  </div>
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
                      {transaction.transactionDate}
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
