import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState:{
        value:""
    },
    reducers:{
        enable:(state) => {
            state.value = "dark"
        },
        disable:(state)=>{
            state.value = ""
        }
    }
    
});

export const {enable,disable} = darkModeSlice.actions;
export default darkModeSlice.reducer;