import React ,{useState,useEffect}from 'react'
import Button from '@material-ui/core/Button'
import {useStatevalue} from "./StateProvider"
import db ,{storage} from "./firebase";
import firebase from 'firebase';
import "./ImageUpload.css";
function ImageUpload() {
    const [{user},dispatch]=useStatevalue();
    const [caption,setcaption]=useState("");
    const [image,setimage]=useState(null)
    const [progress,setprogress]=useState(0);
    const handleimage=(e)=>{
     if (e.target.files[0])
     {
         setimage(e.target.files[0])
     }
    }
    const handleupload=()=>{
      const uploadtask=storage.ref(`images/${image.name}`).put(image);
      uploadtask.on(
        "state_changed",
        (snapshot)=>{
            const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            setprogress(progress);
        },
        (error)=>{console.log(error)},
        ()=>{
            storage.ref("images").child(image.name).getDownloadURL()
            .then((url)=>{
                db.collection("posts").add({
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                    caption:caption,
                    src:url,
                    author:user.displayName,
                })
                setprogress(0)
                setimage(null)
                setcaption("")
            })
        }

          
      )

    }
    return (
        <div className="image">
            <progress value={progress}></progress>
            <input type="text" placeholder="enter caption" value={caption} onChange={(e)=>setcaption(e.target.value)}></input>
            <input type="file" onChange={handleimage} ></input>
            <Button onClick={handleupload}>uploadtask</Button>
        </div>
    )
}

export default ImageUpload
