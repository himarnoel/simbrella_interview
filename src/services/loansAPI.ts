import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoanInterface, TransactionInterface } from "../Utils/data";

// console.log(apiUrl); //

const apiUrl = import.meta.env.VITE_API_URL;
export const api = createApi({
  reducerPath: "loanapi",
  tagTypes: ["Loan"],
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}` }),
  endpoints: (builder) => ({
    getLoans: builder.query<LoanInterface[], void>({
      query: () => "loans",
      providesTags: ["Loan"], 
    }),
    getLoanById: builder.query<LoanInterface, string>({
      query: (id) => `loans/${id}`,
    }),
    createLoan: builder.mutation<LoanInterface, Partial<LoanInterface>>({
      query: (newLoan) => ({
        url: "loans",
        method: "POST",
        body: newLoan,
      }),
      // onSuccess will trigger the GET query after the POST request is done
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          // Invalidate the getLoans query to trigger a re-fetch
          dispatch(api.util.invalidateTags(["Loan"]));
        } catch (err) {
          console.error("Error creating loan:", err);
        }
      },
    }),

  }),
});

export const { useGetLoansQuery, useGetLoanByIdQuery, useCreateLoanMutation } =
  api;
