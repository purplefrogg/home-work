import { configureStore } from '@reduxjs/toolkit';
import { CovidApi } from '../features/Covid/CovidApi';
import { CurrencyExcApi } from '../features/CurrencyExchange/CurrencyExcApi';
import DevTeamReducer from '../features/DevTeam/DevteamSlice';
import { MovieApi } from '../features/Movie/MovieApi';

export const store = configureStore({
  reducer: {
    DevTeam: DevTeamReducer,
    [CovidApi.reducerPath]: CovidApi.reducer,
    [CurrencyExcApi.reducerPath]: CurrencyExcApi.reducer,
    [MovieApi.reducerPath]: MovieApi.reducer,
  }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CovidApi.middleware)
    .concat(CurrencyExcApi.middleware)
    .concat(MovieApi.middleware)
});
