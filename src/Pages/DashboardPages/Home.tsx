
import { FaCreditCard, FaDollarSign, FaWallet } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Home = () => {
  // Sample data
  const user = {
    name: "Emmanuel Tioluwanimi Olaniyi",
    accountBalance: 3250.45,
    recentTransactions: [
      { id: 1, date: "2025-01-02", amount: 150.0, type: "Credit" },
      { id: 2, date: "2025-01-01", amount: 200.0, type: "Debit" },
      { id: 3, date: "2024-12-30", amount: 100.0, type: "Credit" },
    ],
  };
  const chartData = user.recentTransactions.map((transaction) => ({
    date: transaction.date,
    amount: transaction.amount,
    type: transaction.type,
  }));

  return (
    <div className=" p-6 rounded-lg  w-full  mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white  flex justify-between border-[#E4E7EC] border  border-solid  p-6 rounded-lg  w-full  mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text text-sm">Account Balance</span>
            <span className="text-[#344054] text-xl font-semibold">
              {" "}
              ₦{user.accountBalance.toFixed(2)}
            </span>
            <div className="flex items-center gap-[6px]">
              <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                5%
              </div>
              <span className="text-grey-400 text-xs">No data</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <FaWallet color="#667085" size={20} />
            </div>
          </div>
        </div>
        <div className="bg-white  flex justify-between border-[#E4E7EC] border  border-solid  p-6 rounded-lg  w-full  mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text text-sm">Credit Balance</span>
            <span className="text-[#344054] text-xl font-semibold">
              {" "}
              ₦{user.accountBalance.toFixed(2)}
            </span>
            <div className="flex items-center gap-[6px]">
              <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                -%
              </div>
              <span className="text-grey-400 text-xs">No data</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <FaCreditCard color="#667085" size={20} />
            </div>
          </div>
        </div>
        <div className="bg-white  flex justify-between border-[#E4E7EC] border  border-solid  p-6 rounded-lg  w-full  mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text text-sm">Repayment Balance</span>
            <span className="text-[#344054] text-xl font-semibold">
              {" "}
              ₦{user.accountBalance.toFixed(2)}
            </span>
            <div className="flex items-center gap-[6px]">
              <div className="px-1 rounded-[10px] text-xs  bg-gray-100 text-[#344054]">
                -%
              </div>
              <span className="text-grey-400 text-xs">No data</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <FaDollarSign color="#667085" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className=" mt-10  flex flex-col ">
        <div className="w-full">
          <div className="w-full p-5 rounded-lg shadow-md  bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Transactions
            </h3>{" "}
            <table className="min-w-full bg-white rounded-lg ">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  <th className="text-nowrap p-2 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    S/N
                  </th>
                  <th className="text-nowrap p-2 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    Date
                  </th>
                  <th className="text-nowrap p-2 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    Amount
                  </th>
                  <th className="text-nowrap p-2 text-left text-sm font-medium  cursor-pointer  text-gray-600">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.recentTransactions.map((transaction, index) => (
                  <tr key={transaction.id} className="border-t">
                    <td className="text-sm font-medium p-2  text-gray-700">
                      {index + 1}
                    </td>
                    <td className="text-sm font-medium p-2  text-gray-700">
                      {transaction.date}
                    </td>
                    <td
                      className={`text-sm font-medium p-2  ${
                        transaction.type === "Credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ₦{transaction.amount.toFixed(2)}
                    </td>
                    <td className="text-sm font-medium p-2  text-gray-700">
                      {transaction.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Transactions
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <defs>
                <linearGradient id="creditColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="debitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#8884d8" />
              <YAxis />
              <Tooltip formatter={(value) => [`₦${value}`, "Amount"]} />
              <Legend />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#22C55E"
                fill="url(#creditColor)"
                stackId="1"
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#EF4444"
                fill="url(#debitColor)"
                stackId="1"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
export const Component = Home;
