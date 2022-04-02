import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
    'X-RapidAPI-Key': '8a4a4be707msha62503833865a86p1ad353jsnb7167853d37c',
  },
}
const baseUrl = 'https://advanced-movie-search.p.rapidapi.com/'
const createRequest = (url) => ({ url, headers: options.headers })

export const MovieApi = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGenreList: builder.query({
      query: () => createRequest(`/genre/movie/list/`),
    }),
    getSearchByGenre: builder.query({
      query: ({ genre, page = 1 }) =>
        createRequest(`/discover/movie?with_genres=${genre}&page=${page}`),
    }),
    getMovieDetails: builder.query({
      query: (id) => createRequest(`/movies/getdetails?movie_id=${id}`),
    }),
    getSearchByName: builder.query({
      query: ({ query, page = 1 }) =>
        createRequest(`/search/movie?query=${query}&page=${page}`),
    }),
  }),
  keepUnusedDataFor: 5000,
})
export const {
  useGetGenreListQuery,
  useGetSearchByGenreQuery,
  useGetSearchByNameQuery,
  useLazyGetSearchByNameQuery,
  useGetMovieDetailsQuery,
} = MovieApi
