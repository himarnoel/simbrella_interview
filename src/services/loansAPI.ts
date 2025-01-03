import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TransactionInterface } from "../Utils/data";


// console.log(apiUrl); // 

const apiUrl =import.meta.env.VITE_API_URL;
export const api = createApi({
  reducerPath: "loanapi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}` }),
  endpoints: (builder) => ({
    getLoans: builder.query<TransactionInterface[], void>({
      query: () => "loans",
    }),
  }),
});

export const { useGetLoansQuery } = api;

