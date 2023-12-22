import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Home() {

const [resState,setResState]=useState(false)
const changeResState=()=>{
  setResState(true)
}
  return (
    <div>
      <h2>All Videos
        <Link style={{float:'right',textDecoration:'none',fontSize:'23px',color:'red'}} className='m-3' to={'/watch-history'}>Watch History</Link>
      </h2>
      <Row className='mx-5 mt-5 mb-5 p-5 '>
        <Col md='2'>
          <Add changeResState={changeResState}/>
        </Col>
        <Col md='6'>
          <View resState={resState}/>
        </Col>
        <Col md='4'>
          <Category />
        </Col>
        
      </Row>
      <ToastContainer/>

       
    </div>
  )
}

export default Home