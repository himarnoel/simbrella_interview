import { FaCreditCard, FaDollarSign, FaWallet } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useGetTransactionQuery } from "../../services/transactionAPI";
import { formatDateToDDMMYYYY } from "../../Utils/data";
import { ClipLoader } from "react-spinners";
// import { useGetLoansQuery } from "../../services/api";

const Home = () => {
  const { data, error, isLoading } = useGetTransactionQuery();
  console.log(data, error, isLoading);
  console.log("data", data);

  // Sample data
  const user = {
    name: "Emmanuel Tioluwanimi Olaniyi",
    accountBalance: 33250.45,
    creditBalance: 13250.45,
    repaymentBalance: 23250.45,
  };
  const chartData = data?.map((transaction) => ({
    date: formatDateToDDMMYYYY(transaction.transactionDate || ""),
    amount: transaction.amount,
    type: transaction.transactionType,
  }));

  if (isLoading) {
    return (
      <div className=" flex items-center w-full justify-center">
        <ClipLoader color="#2D3192" />
      </div>
    );
  }
  return (
    <div className=" p-6 rounded-lg  w-full  mx-auto">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-white  flex justify-between border-[#E4E7EC] border  border-solid  p-6 rounded-lg  w-full  mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text text-sm">Account Balance</span>
            <span className="text-[#344054] text-xl font-semibold">
              ₦{user.accountBalance.toLocaleString()}
            </span>
            <div className="flex items-center gap-[6px]"></div>
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
              ₦{user.repaymentBalance.toLocaleString()}
            </span>
            <div className="flex items-center gap-[6px]"></div>
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
              ₦{user.creditBalance.toLocaleString()}
            </span>
            <div className="flex items-center gap-[6px]"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <FaDollarSign color="#667085" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg mt-10">
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
              <CartesianGrid
                vertical={false}
                stroke="#F2F4F7"
                strokeDasharray="0"
              />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#667085" }}
                axisLine={{ stroke: "#F2F4F7" }}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tick={{ fontSize: 12, fill: "#667085" }}
                tickMargin={10}
                tickLine={false}
              />
              <Tooltip formatter={(value) => [`₦${value}`, "Amount"]} />
              {/* <Legend /> */}
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
      {/* Recent Transactions */}
      
        
     
    </div>
  );
};

export default Home;
export const Component = Home;
