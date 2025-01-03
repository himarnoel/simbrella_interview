import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TransactionInterface } from "../Utils/data";

// console.log(apiUrl); //

const apiUrl = import.meta.env.VITE_API_URL;
console.log("api", apiUrl);

export const transactionApi = createApi({
  reducerPath: "transactionapi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}` }),
  endpoints: (builder) => ({
    getTransaction: builder.query<TransactionInterface[], void>({
      query: () => "transactions",
    }),
  }),
});

export const { useGetTransactionQuery } = transactionApi;
