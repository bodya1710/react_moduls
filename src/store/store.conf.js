import {configureStore} from '@reduxjs/toolkit';

import carReducer from "./car.slice";
import UserReducer from "./user.slice";
import PostReducer from "./post.slice"

const store = configureStore({
    reducer:{
        carReducer,
        UserReducer,
        PostReducer
    }
})
export default store