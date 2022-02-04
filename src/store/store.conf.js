import {configureStore} from '@reduxjs/toolkit';

import carReducer from "./car.slice";
import UserReducer from "./user.slice";
import PostReducer from "./post.slice"
import CommentsReducer from "./comments.slice";

const store = configureStore({
    reducer:{
        carReducer,
        UserReducer,
        PostReducer,
        CommentsReducer
    }
})
export default store