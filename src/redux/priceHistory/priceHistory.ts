import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PriceHistoryData } from '../../models/PriceHistoryData';

export type PriceHistoryState = Readonly<{
    pricesHistory: PriceHistoryData[];
    pricesError?: string[];
    pricesLoading: boolean;
}>;

const initialState: PriceHistoryState = {
    pricesHistory: [],
    pricesLoading: false,
};

const pricesHistorySlice = createSlice({
    initialState,
    name: 'pools',
    reducers: {
        setPriceHistoryErrors(state: PriceHistoryState, action: PayloadAction<string[]>): PriceHistoryState {
            return ({
                ...state,
                pricesError: action.payload,
            });
        },
        setPriceHistoryLoading(state: PriceHistoryState, action: PayloadAction<boolean>): PriceHistoryState {
            return ({
                ...state,
                pricesLoading: action.payload,
            });
        },
        setPricesHistory(state: PriceHistoryState, action: PayloadAction<PriceHistoryData[]>): PriceHistoryState {
            return ({
                ...state,
                pricesHistory: action.payload,
            });
        },
    },
});

export const {
    setPriceHistoryErrors,
    setPriceHistoryLoading,
    setPricesHistory,
} = pricesHistorySlice.actions;

export default pricesHistorySlice.reducer;
