import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketViewModel } from '../../models/Market';

export type MarketState = Readonly<{
    markets: MarketViewModel[];
    marketDetail?: MarketViewModel;
    marketError?: string[];
    marketLoading: boolean;
}>;

const initialState: MarketState = {
    marketLoading: false,
    markets: [],
};

const marketsSlice = createSlice({
    initialState,
    name: 'markets',
    reducers: {
        setMarketErrors(state: MarketState, action: PayloadAction<string[]>): MarketState {
            return ({
                ...state,
                marketError: action.payload,
            });
        },
        setMarketLoading(state: MarketState, action: PayloadAction<boolean>): MarketState {
            return ({
                ...state,
                marketLoading: action.payload,
            });
        },
        setMarkets(state: MarketState, action: PayloadAction<MarketViewModel[]>): MarketState {
            return ({
                ...state,
                markets: action.payload,
            });
        },
        setMarketDetail(state: MarketState, action: PayloadAction<MarketViewModel | undefined>): MarketState {
            return ({
                ...state,
                marketDetail: action.payload,
            });
        },
    },
});

export const {
    setMarketErrors,
    setMarketLoading,
    setMarkets,
    setMarketDetail,
} = marketsSlice.actions;

export default marketsSlice.reducer;
