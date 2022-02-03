import {createSlice} from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:'UserSlice',
    initialState:{
        users:[]
    }
})
const UserReducer = UserSlice.reducer;
export default UserReducer;