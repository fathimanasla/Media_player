import React, { useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addVideos } from '../services/allApis';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({changeResState}) {
const [show,setShow]=useState(false);
const [video,setVideo]=useState({
  id:'',caption:'',thumbnail:'',url:''
})

const handleClose=()=>setShow(false);
const handelShow=()=>setShow(true)

const handleVideoDetails=(e)=>{
  const {name,value}=e.target
  setVideo({...video,[name]:value})
}

const handleVideoUrl=(e)=>{
   const {name,value}=e.target
   if(value.includes("v=")){
    let index=value.indexOf("v=")
    // console.log(index)
    let url=value.substring(index+2,index+13)
    // console.log(url)
    let videoUrl=`https://www.youtube.com/embed/${url}`
    console.log(videoUrl)
    setVideo({...video,[name]:videoUrl})
   }
}

 const uploadVideo=async()=>{
  const {id,caption,thumbnail,url}=video
  if(!id || !caption || !thumbnail || !url){
    toast.warning("Please fill in the video Details")
  }
  else{
    let response=await addVideos(video)
    console.log(response)
    if(response.status >=200 || response.status<300){
      setShow(false)
      changeResState()
      toast.success("New Video Upload!!")
    }
    else{
      toast.error("Video Upload Failed")
    }

  }
 }

console.log(video)

  return (
    <>
      <div className='btn' onClick={handelShow}>
      <i class="fa-solid fa-circle-plus fa-xl" style={{color: "#28529a"}}></i>
      </div>

    <Modal show={show} onHide={handleClose} backdrop="static"keyboard={false} >
        <Modal.Header closeButton  >
          <Modal.Title>Upload Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        
      <FloatingLabel controlId="floatingID" label="VideoID"className="mb-3" >
        <Form.Control type="text" placeholder="Video ID" name='id' onChange={(e)=>handleVideoDetails(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingcaption" label="Caption" className="mb-3" >
        <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={(e)=>handleVideoDetails(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingimgUrl" label="Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Video Image URL" name='thumbnail' onChange={(e)=>handleVideoDetails(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingvideoUrl" label="Video URL" className="mb-3">
        <Form.Control type="text" placeholder="Youtube Video URL" name='url' onChange={(e)=>handleVideoUrl(e)} />
      </FloatingLabel>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='bg-info text-white'>
            Close
          </Button>
          <Button variant="primary" className='text-info bg-white' onClick={uploadVideo}>Upload</Button>
        </Modal.Footer>
    </Modal>

    </>
   
  )
}

export default Add