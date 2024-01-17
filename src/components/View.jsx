import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Voicecard from '../components/VoiceCard'
import { getALLVideos } from '../services/allAPI'

function View({UploadVideoServerResponse}) {

  const [deleteVideoStatus,setdeleteVideoStatus]=useState(false)
  const [allVideos,setAllVideos] = useState([])
const getUploadedVideos = async ()=>{
  //make api call
  const {data} = await getALLVideos()
  setAllVideos(data);
}
useEffect(()=>{
  getUploadedVideos()
  setdeleteVideoStatus(false)
},[UploadVideoServerResponse,deleteVideoStatus])

console.log(allVideos);

  return (
<>

<Row>{
  allVideos.length>0?
  allVideos.map(videos=>(

<Col sm={12} md={6} lg={4} xl={3}>
<Voicecard displayData={videos} setdeleteVideoStatus={setdeleteVideoStatus}/>
</Col>
  ))
:<p style={{color:"red"}}>nothing to display</p>
}


</Row>



</>


    )
}

export default View