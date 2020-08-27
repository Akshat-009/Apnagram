import React,{useState,useEffect} from 'react'
import "./App.css"
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreIcon from '@material-ui/icons/Explore';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Post from'./Post';
import db from "./firebase"
function App() {
  const [posts,setpost]=useState([])
  useEffect(() =>{
      db.collection("posts").onSnapshot(snapshot =>{
          setpost(snapshot.docs.map((doc)=>({
              id:doc.id,
              data:doc.data()
          })))
      })
  },[])
  return (
    <div className="app">
      <div className="app__header">
        <h2>Apnagram</h2>
        <div className="app__header__right">
          <IconButton>
          <HomeIcon/>
          </IconButton>
          <IconButton>
          <SendIcon/>
          </IconButton>
          <IconButton>
          <FavoriteBorderIcon/>
          </IconButton>
          <IconButton>
          <ExploreIcon/>
          </IconButton>
          <Avatar/>
         
        </div>
      </div>
      <div className="app__post">
        {posts.map((post)=>(
          <Post author={post.data.author} caption={post.data.caption} src={post.data.src} pic=""/>
        ))}
        
        
      </div>
    </div>
  )
}

export default App
