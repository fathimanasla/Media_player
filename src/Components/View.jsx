import React,{useState,useEffect} from 'react'
import Videocard from './Videocard'
import {  getVideos } from '../services/allApis'
import { Row,Col } from 'react-bootstrap'


function View({resState}) {
const [allVideos,setAllVideos]=useState([])

const [delResponse,setDelResponse]=useState(false)

const delResUpdate=()=>{
  setDelResponse(true)
}

const getVideo=async()=>{
  let res=await getVideos()
  // console.log(res.data)
  setAllVideos(res.data)
  setDelResponse(false)
}

useEffect(()=>{
  getVideo()
},[resState,delResponse])



  return (
    <div className='p-3 border shadow '> 
  
      <Row >
        {
          allVideos?allVideos.map(item=>(
           <Col >

               <Videocard video={item} />

           </Col>
          )) :<div className='text-danger'>No data to show!!</div>
        }
      

      </Row>
      
    </div>
  )
}

export default View