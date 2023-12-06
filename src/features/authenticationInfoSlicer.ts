import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface type {
    status: 'authenticated' | 'unknown';
}

const initialState: type = {
    status: 'unknown',
}

const authenticationInfoSlice = createSlice({
    name: 'authenticationInfo',
    initialState,
    reducers: {
        setInfo(state, action: PayloadAction<'authenticated' | 'unknown'>) {
            state.status = action.payload;
        },
        initialize(state) {
            return initialState;
        }
    },
})

export const { setInfo, initialize } = authenticationInfoSlice.actions;
export const authenticationInfoReducer =  authenticationInfoSlice.reducer;