export interface TransactionInterface {
  id: number;
  transactionId: string;
  amount: number;
  tenure: string;
  status: "Active" | "Rejected" | "Paid";
  transactionDate?: string;
  balance: number;
  transactionType: string;
}
export const transactionHistory: TransactionInterface[] = [
  {
    id: 1,
    transactionId: "002572",
    amount: 5000,
    tenure: "12 months",
    status: "Active",
    transactionDate: "2024-12-01",
    balance: 0,
    transactionType: "Credit",
  },
  {
    id: 2,
    transactionId: "002573",
    amount: 10000,
    tenure: "24 months",
    status: "Paid",
    transactionDate: "2025-12-01",
    balance: 8000,
    transactionType: "Credit",
  },
  {
    id: 3,
    transactionId: "002574",
    amount: 10000,
    tenure: "24 months",
    status: "Rejected",
    transactionDate: "2025-12-01",
    balance: 8000,
    transactionType: "Debit",
  },
];
