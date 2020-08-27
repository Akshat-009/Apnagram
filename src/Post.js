import React from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar"
                src="https://source.unsplash.com/1600x900/?nature,water"/>
                <h3>UserName</h3>
            </div>
            <div className="post__image">
            <img  src="https://source.unsplash.com/1600x900/?nature,water"/> 
            </div>
            <div className="post__footer">
                <div className="post__footer__author">
                <h4>Akshat</h4><p>Captions</p>
                </div>
            
            </div>
        </div>
    )
}

export default Post
