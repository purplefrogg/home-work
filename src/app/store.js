import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { CovidApi } from '../features/Covid/CovidApi';
import { CurrencyExcApi } from '../features/CurrencyExchange/CurrencyExcApi';
import DevTeamReducer from '../features/DevTeam/DevteamSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    DevTeam: DevTeamReducer,
    [CovidApi.reducerPath]: CovidApi.reducer,
    [CurrencyExcApi.reducerPath]: CurrencyExcApi.reducer
  },
});
