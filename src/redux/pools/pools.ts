import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pool } from '../../models/Pool';

export type PoolState = Readonly<{
    pools: Pool[];
    poolError?: string[];
    poolLoading: boolean;
}>;

const initialState: PoolState = {
    poolLoading: false,
    pools: [],
};

const poolsSlice = createSlice({
    initialState,
    name: 'pools',
    reducers: {
        setPoolErrors(state: PoolState, action: PayloadAction<string[]>): PoolState {
            return ({
                ...state,
                poolError: action.payload,
            });
        },
        setPoolLoading(state: PoolState, action: PayloadAction<boolean>): PoolState {
            return ({
                ...state,
                poolLoading: action.payload,
            });
        },
        setPools(state: PoolState, action: PayloadAction<Pool[]>): PoolState {
            return ({
                ...state,
                pools: action.payload,
            });
        },
    },
});

export const {
    setPoolErrors,
    setPoolLoading,
    setPools,
} = poolsSlice.actions;

export default poolsSlice.reducer;
