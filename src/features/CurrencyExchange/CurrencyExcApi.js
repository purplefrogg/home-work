import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = 'https://currency-exchange.p.rapidapi.com'

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
      'X-RapidAPI-Key': 'ddecef2253msh51991b94fe36979p1ce7c1jsn8525053917dc'
    }
  };
const createRequest = (url) =>({url, headers: options.headers})

export const CurrencyExcApi = createApi({
    reducerPath:'CurrencyExcApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getListquotes: builder.query({
            query: () => createRequest(`/listquotes`)
        }),
        getExchange: builder.query({
            query: ({toCurrency, fromCurrency}) => createRequest(`/exchange?to=${toCurrency}&from=${fromCurrency}`)
        })
    })
})

export const {
    useGetListquotesQuery,
    useGetExchangeQuery
} = CurrencyExcApi