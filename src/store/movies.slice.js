import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";


export const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async (_,{rejectedWithValue})=>{
        try {
            const movies = await moviesService.getAll();
            console.log(movies)
            return movies
        }catch (e) {
           return  rejectedWithValue(e.message)
        }
    }
)


const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState:{
        movies:[],
        status: null,
        error:null
    }
})

const moviesReducer = moviesSlice.reducer;

export default moviesReducer