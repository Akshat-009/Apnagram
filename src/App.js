import React,{useState,useEffect} from 'react'
import "./App.css"
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreIcon from '@material-ui/icons/Explore';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Post from'./Post';
import db ,{auth} from "./firebase"
import {useStatevalue} from "./StateProvider";
import Login from './Login';
import Button from '@material-ui/core/Button';
function App() {
  const [{user},dispatch]=useStatevalue();
  const [posts,setpost]=useState([])
  useEffect(() =>{
      db.collection("posts").onSnapshot(snapshot =>{
          setpost(snapshot.docs.map((doc)=>({
              id:doc.id,
              data:doc.data()
          })))
      })
  },[])
  console.log(user)
  return  user?(
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
          <Avatar src={user.photoURL} />
        {/* Logout functionality */}
        {/* <Button onClick={() =>auth.signOut().then(() =>{dispatch({type:"SET_USER",user:null})})}>Logout</Button> */}
        </div>
      </div>
      <div className="app__post">
        {posts.map((post)=>(
          <Post author={post.data.author} caption={post.data.caption} src={post.data.src} pic=""/>
        ))}
        
        
      </div>
    </div>
  ):(<Login/>)
}

export default App
