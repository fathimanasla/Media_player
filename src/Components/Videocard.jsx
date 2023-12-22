import React,{useState} from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { deleteVideo } from '../services/allApis';
import { ToastContainer,toast } from 'react-toastify';
import { addHistory } from '../services/allApis';
import { v4 as uuidv4 } from 'uuid';

function Videocard({video,delResUpdate,isCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async() =>{
    setShow(true);
    let date=new Date()
    let id=uuidv4()
    const {caption,url}=video
    console.log(id,caption,url,date)
    let body={id,caption,url,date}
    const res=await addHistory(body)
    console.log(res)
    
  } 

const removeVideo=async(id)=>{
  // let id=e-target
  console.log(id)
  let res=await deleteVideo(id)
  if(res.status >=200  && res.status<300){
    toast.success("Video Deleted Successfully")
    delResUpdate()
  }
  else{
    toast.error("Deletion Failed!!")
  }
}

const ondrag=(e,id)=>{
  // e.preventDefault()
  console.log("Target Video ID",id)
  e.dataTransfer.setData("videoid",id)
}

  return (
    <div >
      
       <Card style={{ width: '17rem'  }}  className='border mb-2 '>
      <Card.Img style={{height:'200px'}} onClick={handleShow} draggable onDragStart={(e)=>ondrag(e,video?.id)} variant="top" src={video?.thumbnail}  />
      <Card.Body>
        {
          isCategory?" " :
        <Card.Title className='text-center text-danger'>{video?.caption} <span style={{float:'right'}} className='btn btn-sm' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash " style={{color: '#e64814'}}></i></span></Card.Title>
        }
      </Card.Body>
      

    </Card>

  <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
    <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300" src={`${video?.url}?autoplay=1`} title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard