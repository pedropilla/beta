import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DialogsState = Readonly<{
    isMarketCreationOpen: boolean;
}>;

const initialState: DialogsState = {
    isMarketCreationOpen: false,
};

const dialogsSlice = createSlice({
    initialState,
    name: 'dialogs',
    reducers: {
        setMarketCreationDialogOpen(state: DialogsState, action: PayloadAction<boolean>): DialogsState {
            return ({
                ...state,
                isMarketCreationOpen: action.payload,
            });
        },
    },
});

export const {
    setMarketCreationDialogOpen,
} = dialogsSlice.actions;

export default dialogsSlice.reducer;
