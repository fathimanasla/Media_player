import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { getHistory } from '../services/allApis'

function History() {
const [history,setHistory]=useState([])

const handleHistory=async()=>{
  let res=await getHistory()
  console.log(res.data)
  setHistory(res.data)

}

useEffect(()=>{
  handleHistory()
},[])
console.log(history)
  return (
    <div className='p-5'>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
      </thead>
      {
        history?history.map((item,index)=>(
          <tbody>
          <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td>{item?.url}</td>
            <td>{item?.date}</td>
          </tr>
        </tbody>
        )) : <div className='text-danger'>No History Available...</div>
      }
     
    </Table>
 
    </div>
  )
}

export default History