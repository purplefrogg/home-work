import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'ddecef2253msh51991b94fe36979p1ce7c1jsn8525053917dc'
    }
  };
const baseUrl = 'https://covid-193.p.rapidapi.com'
const createRequest = (url) =>({url, headers: options.headers})

export const CovidApi = createApi({
    reducerPath:'CovidApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => createRequest(`/countries`)
        }),
        getStatistics: builder.query({
            query: (country='') => createRequest(`/statistics/${country}`)
        }),
    })
})
export const {
    useGetCountriesQuery,
    useGetStatisticsQuery
} = CovidApi