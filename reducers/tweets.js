import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
}

export const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        addTweet : (state) => {
            state.value = 'tweet added'
        }
    }
})

export const { addTweet } = tweetsSlice.actions
export default tweetsSlice.reducer