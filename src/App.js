import React from 'react'
import "./App.css"
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreIcon from '@material-ui/icons/Explore';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Post from'./Post';
function App() {
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
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default App
