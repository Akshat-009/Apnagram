import React,{useState,useEffect} from 'react'
import "./Post.css";
import firebase from "firebase"
import Avatar from '@material-ui/core/Avatar';
import db from "./firebase"
function Post({author,caption,src,id}) {
   const [comments,setcomments]=useState([])
   const [comment,setcomment]=useState("")
   useEffect(() =>
   {
      db.collection("posts").doc(id).collection("comments").onSnapshot(snapshot=>{
          setcomments(snapshot.docs.map(doc=> doc.data()))
      })   
   },[id])
   const addcommment=(e)=>
   { e.preventDefault()
    db.collection('posts').doc(id).collection("comments").add({
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        comment:comment
    })

   }
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar"
                src="https://source.unsplash.com/1600x900/?nature,water"/>
                <h3>{author}</h3>
            </div>
            <div className="post__image">
            <img  src={src}/> 
            </div>
            <div className="post__footer">
                <div className="post__footer__author">
                <h4>{author}</h4><p>{caption}</p>
                </div>
                <div className="comment__section">
                {comments.map(comments=>(
                    <li>{comment.comment}</li>
                ))}
                </div>
                <div className="add__Comments">
                    <form>
                        <input type="text" placeholder="enter comment" value={comment} onChange={(e)=>setcomment(e.target.value)}/>
                        <button  onChange ={addcommment}type ="submit">Post</button>
                    </form>
                </div>
              
            
            </div>
        </div>
    )
}

export default Post
