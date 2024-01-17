import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { uploadVideo } from "../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

const[videos,setVideos] = useState({
  id:"",
  caption:"",
  url:"",
  embedLink:""
})





  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





////converting normal link to embed link
  const getEmbedLink = (e)=>{
    const {value} = e.target

    if(value){
    const link = `http://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos,embedLink:link})
    }else{
      setVideos({...videos,embedLink:" "})

    }
  }



console.log(videos);
const handleUpload = async ()=>{
  const {id,caption,url,embedLink}=videos
  if (!id ||!caption || !url ||!embedLink){
    toast.error("plese fill all the input fields")
  }else{
    //make api call
    const response = await uploadVideo(videos)
    console.log(response);


    //video uploding section to backend and modal
    if(response.status>=200 && response.status<300){
      //set srver response
      setUploadVideoServerResponse(response.data)

      toast.success(`${response.data.caption} video successfully uploded`)
      //reset a video
      setVideos({
        id:"",caption:"",url:"",embedLink:""
      })

//hide modal
      handleClose()

    }else{
      toast.error('cannot perform the action rightnow')
    }
  }
}




  return (


<>
<div className='d-flex align-items-center'>
<h5>upload videos</h5>
<button onClick={handleShow} className='btn'>
<i class="fa-solid fa-plus fa-beat"></i>
</button>
</div>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>plese fill the following details</p>

         <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="email" placeholder="Enter videoid" onChange={(e)=>setVideos({...videos,id:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="email" placeholder="Enter videotitle" onChange={(e)=>setVideos({...videos,caption:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="email" placeholder="Enter video image url" onChange={(e)=>setVideos({...videos,url:e.target.value})}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="email" placeholder="Enter video link" onChange={getEmbedLink} />
       
      </Form.Group>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Add videos</Button>
        </Modal.Footer>
      </Modal>


<ToastContainer 
position="top-center"
theme="colored"
autoClose={2000}/>

</>    )
}

export default Add