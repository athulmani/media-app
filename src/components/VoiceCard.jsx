import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allAPI';

function VoiceCard({displayData,setdeleteVideoStatus,insideCategory}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async () => {setShow(true)
    const {caption,embedLink}=displayData
    let today = new Date()
    // console.log(today);
    let timeStamp = (new Intl.DateTimeFormat(`en-US`,{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,
    minute:`2-digit`,second:`2-digit`}).format(today))
    let videoDetails = {
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
    }

    //delete a  video
    const removeVideo = async (id)=>{
      //make a api cll
      const response = await deleteVideo(id)
      setdeleteVideoStatus()
    }


const dragstarted = (e,id)=>{
  console.log("drag started video id:"+id);
  e.dataTransfer.setData("videoId",id)
}

  return (
<>
<Card className='mb-3' draggable onDragStart={(e)=>dragstarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>

        <Card.Title  className='d-flex justify-content-between align-items-center'><h6>{displayData?.caption}</h6>
{   insideCategory?"":     <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash"></i></button> }
        </Card.Title>
        </Card.Body>

    </Card>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="100%" height="526" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>

        </Modal.Body>
       
      </Modal>


</>

    )
}

export default VoiceCard