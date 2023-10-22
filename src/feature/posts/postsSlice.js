import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate=[{

    id:'1',
    tittle:'Learning Redux Toolkit',
    content:"It's easy"

},
{
    id:'2',
    tittle:'Learning Redux Toolkit',
    content:"It's easy"

}

]

const postsSlice=createSlice({
name:'posts',
initialstate,
reducers:{
    postAdded:{
        reducer(state,action){
        state.push(action.payload)
    },
    prepare(title,content){
        return{
            payload:{
                id:nanoid(),
                title,
                content
            }
        }
    }
    }
}
})
export const selectAllPosts=(state)=>state.posts;
export const{postAdded}=postsSlice.actions
export default postsSlice.reducer