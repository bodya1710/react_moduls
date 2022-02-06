import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {jsonPService} from "../services";

export const getAllPost = createAsyncThunk(
    'PostSlice/getAllPost',
    async (_,{rejectWithValue})=>{
        try {
            const posts = await jsonPService.getAllPosts();
            return posts
        }catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const PostSlice = createSlice({
    name:'PostSlice',
    initialState:{
        posts:[],
        status:null,
        error:null
    },
    extraReducers:{
        [getAllPost.pending]:(state, action)=>{
            state.status ='loading'
            state.error = null
        },
        [getAllPost.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getAllPost.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
const PostReducer = PostSlice.reducer;
export default PostReducer;