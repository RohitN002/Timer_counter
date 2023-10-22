import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";


const AddPostForm=()=>{

   const dispatch = useDispatch()
   const [title,setTittle]=useState('')
   const [content,setContent]=useState('')

   const onTittleChanged=e=>setTittle(e.target.value)
   const onContentChanged=e=>setContent(e.target.value)

const onSavePostClicked=()=>{
if(title&&content){
    dispatch(
        postAdded(title,content),
       

      )
      setTittle('')
      setContent('')
}
}

    return(
        <section>
        <h2>Add new Post</h2>
        <form>
    <label htmlFor="postTitle">Post title</label>
<input
type="text"
id="posttitle"
name="postTitle"
value={tittle}
onChange={onTittleChanged}/>
<label htmlFor="postContents">Content:</label>
<textarea 
id='postContent'
name='postContent'
value={content}
onChange={onContentChanged}/>
<button
type="button"
onClick={onSavePostClicked}
>Save Post</button>
        </form>
        </section>
    )
}
export default AddPostForm