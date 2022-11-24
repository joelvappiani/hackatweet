import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = null
        }
    }
})

export const { login, logout } = usersSlice.actions
export default usersSlice.reducer