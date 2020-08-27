import React,{useState,useEffect} from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import db from "./firebase"
function Post({author,caption,src,pic}) {

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
            
            </div>
        </div>
    )
}

export default Post
