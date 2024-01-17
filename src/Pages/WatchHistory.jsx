import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory]=useState([])
  const handleHistory = async ()=>{
    //make api call
    const {data} = await getAllHistory()
    // console.log(data);
    setHistory(data)
  }

  console.log(history);

  useEffect(()=>{
    handleHistory()
  },[])

const handleDeleteHistory = async (id)=>{
  await deleteHistory (id)

  handleHistory()
}

  return (
    <>
    
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h3>WatchHistory</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20',color:'blueviolet'}}>
        <i class="fa-solid fa-arrow-left fa-beat"></i>Back to home</Link>
    </div>
    
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
<th>#</th>
<th>Caption</th>
<th>URL</th>
<th>Timestrap</th>
<th></th>
        </tr>
      </thead>
      <tbody>
        {
          history?history?.map((item,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td style={{color:"green"}}>{item?.embedLink}</td>
              <td>{item?.timeStamp}</td>
              <td>        <button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i class="fa-solid fa-trash"></i></button>
</td>
            </tr>
          )):<p>nothing to display</p>

        }
      </tbody>
    </table>
    
    
    </>
  )
}

export default WatchHistory