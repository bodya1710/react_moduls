import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {jsonPService} from "../services";

export const getAllComments = createAsyncThunk(
    'CommentsSlice/getAllComments',
    async (_,{rejectWithValue})=>{
        try {
            const comments = await jsonPService.getAllComments();
            return comments
        }catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const CommentsSlice = createSlice({
    name:'CommentsSlice',
    initialState: {
        comments:[],
        status:null,
        error:null
    },
    extraReducers:{
        [getAllComments.pending]:(state, action)=>{
            state.status = 'loading'
            state.error = null
        },
        [getAllComments.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getAllComments.rejected]:(state, action)=>{
            state.status = 'reject'
            state.error = action.payload
        }
    }
})

const CommentsReducer = CommentsSlice.reducer;
export default CommentsReducer;