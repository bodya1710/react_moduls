import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {jsonPService} from "../services";


export const getAllUsers = createAsyncThunk(
    'UserSlice/getAllUsers',
    async (_,{rejectWithValue})=>{
        try {
            const users = await jsonPService.getAllUsers();
            return users
        }catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const UserSlice = createSlice({
    name:'UserSlice',
    initialState:{
        users:[],
        status:null,
        error:null
    },
    extraReducers:{
        [getAllUsers.pending]:(state, action)=>{
            state.status ='loading'
            state.error = null
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
const UserReducer = UserSlice.reducer;
export default UserReducer;