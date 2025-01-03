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

export interface LoanInterface {
  id?: number; // Changed to string to handle IDs like '002572'
  loanId?: string; // New field for formatted loan ID
  amount: number;
  tenure: string;
  status: "Active" | "Rejected" | "Paid" | "Submitted";
  repaymentDate?: string;
  balance: number;
  purpose: string; // Added loanProduct field
  netPay: number;
}

export const formatDateToDDMMYYYY = (isoString: string): string => {
  const date = new Date(isoString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
};

// Example usage
const formattedDate: string = formatDateToDDMMYYYY("2025-01-03T14:11:19.278Z");
console.log(formattedDate);
