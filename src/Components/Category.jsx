import React,{useState,useEffect} from 'react'
import { Modal,Button,FloatingLabel,Form} from 'react-bootstrap'
import { ToastContainer,toast } from 'react-toastify';
import { addCategory,getCategory ,deleteCategory,getSpecificVideos,updateCategory} from '../services/allApis';
import Videocard from './Videocard';

function Category({changeResState}) {
  const [show, setShow] = useState(false);
  const [categories,setCategories]=useState([])
  const [delCat,setDelCat]=useState(false)
  const [category,setCategory]=useState({
    id:'',categoryName:'',allVideos:[]
  })
  
  const handleCategeryList=async()=>{
    let res=await getCategory()
    console.log(res.data)
    setCategories(res.data)
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleCategDetails=(e)=>{
  const {name,value}=e.target
  setCategory({...category,[name]:value})
}

console.log(category)

const handleRequest=async()=>{
  const res=await addCategory(category)
  // console.log(res)
  if(res.status>=200 && res.status<300){
    setShow(false)
    handleCategeryList()
    toast.success("Category Added!!")
  }
  else{
    toast.error("Failed")
  }
}

useEffect(()=>{
  handleCategeryList()
},[])


const removeCategory=async(id)=>{
  let res=await deleteCategory(id)
  console.log(res)
  if(res.status >=200  && res.status<300){
    setShow(false)
    handleCategeryList()
    toast.success("Video Deleted Successfully")
  }
  else{
    toast.error("Deletion Failed!!")
  }
}

const dragOver=(e)=>{
  e.preventDefault()
  console.log("Dragging Over Category Board!!")
}

const onDropHandle=async(e,id)=>{
  console.log("Drop Target Category id:",id)
  let videoid=e.dataTransfer.getData("videoid")
  console.log("video ID:",videoid)
  const video=await getSpecificVideos(videoid)
  console.log(video.data)


  let selecteCategory=categories?.find(item=>id===id)
  // console.log(selecteCategory)
  selecteCategory.allVideos.push(video.data)
  console.log(selecteCategory)
  const res=await updateCategory(id,selecteCategory)
  console.log(res)
 if(res.status>=200 && res.status<300){
  toast.success ("video added to category")
  handleCategeryList()
 }

}

  return (
    <>
    <div className='d-grid '>
      <button onClick={handleShow} className='btn btn-block bg-info text-white ' style={{fontSize:'20px'}}>Add Category</button>
    </div>

    {
      categories?categories.map(item=>(
        <div className='boerder border-success shadow mb-1 mt-3 p-2' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>onDropHandle(e,item?.id)}>
          <div>
          <span >{item?.categoryName}</span>
          <span style={{float:'right'}} className='btn btn-sm '  onClick={()=>removeCategory(item?.id)}><i className="fa-solid fa-trash " style={{color: '#e64814'}}></i></span>
          </div>
       
        <div>
          {
            item?.allVideos.map(video=>(
              <Videocard video={video} isCategory={true}/>

            ))
          }
        </div>
        </div>
      )): <div className='text-danger p-2'>No Data Vailable...</div>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel  controlId="floatingId"  label="ID"  className="mb-3">
          <Form.Control type="text" placeholder="Enetr Unique ID" name='id' onChange={(e)=>handleCategDetails(e)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingCategory" label="Category Name">
          <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e)=>handleCategDetails(e)}/>
        </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='bg-info text-white' onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Category