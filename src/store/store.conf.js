import {configureStore} from '@reduxjs/toolkit';

import carReducer from "./car.slice";
import UserReducer from "./user.slice";

const store = configureStore({
    reducer:{
        carReducer,
        UserReducer
    }
})
export default store