import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [UploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
<>

<div className="container mt-5 mb-5 d-flex justify-content-between align-items-cente">

  <div className='add videos'>
    <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
  </div>
  
<Link to={'/watchhistory'} style={{textDecoration:'none',color:'blue'}}>Watch history</Link>
</div>

<div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-cente">
  <div className='all-videos col-lg-9'>
<h3>All-videos</h3>
<View UploadVideoServerResponse={UploadVideoServerResponse}/>
  </div>
  <div className="category col-lg-3">
  <Category/>
  </div>
</div>
</>



    )
}

export default Home