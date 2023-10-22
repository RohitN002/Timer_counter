import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../feature/posts/postsSlice";
//import counterReducer from '../feauture/cou'
export const store=configureStore({
    reducer:{
posts : postsReducer,
    }
})