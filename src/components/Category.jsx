import { Col, Modal, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory, getVideo, updateCategory  } from '../services/allAPI';
import VideoCard from './VoiceCard'

 
function Category() {
  const [allCategories,setAllCategories]=useState([])
  const [CategoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{
    if(CategoryName){

      let body={
        CategoryName,allVideos:[]
      }
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset state
        setCategoryName("")
//get catogories
        getCategories()
      }else{
        toast.error("something wrong")
      }
      //makea api cal


    }else{
      toast.warning("plese providde category name!!")

    }
  }

  const getCategories = async ()=>{
    //make api call
    const {data} = await getAllCategory()
    // console.log(data);
    setAllCategories(data)
  }

  console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id)=>{
    await deleteCategory(id)
getCategories()  }


const DragOver = (e)=>{
  console.log("video drag over tje cstegoy");
  e.preventDefault()
}



//drag and drop section
const videoDrop = async (e,CategoryId)=>{
  console.log("video drop insde the category:"+CategoryId);
  const videoid = e.dataTransfer.getData("videoId")
  console.log("video card:"+videoid);
  //get videos from the log deails
  const {data}=await getVideo(videoid)
  console.log(data);
  // get caregory detals
  const selectedaCategory = allCategories?.find(item=>item.id==CategoryId)
  selectedaCategory.allVideos.push(data)
  console.log(selectedaCategory);
  //make api call
  await updateCategory(CategoryId,selectedaCategory)
  getCategories()
}


  return (
    <>
    
    <div className="d-grid mt-3">
<button onClick={handleShow} className='btn btn-info'>add new categrory</button>
    </div>



{
  allCategories?.length>0?allCategories?.map(item=>(
    <div className='mt-5 border rounded p-3' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
      <div className='d-flex justify-content-between align-items-center'>
        <h6>{item?.CategoryName}</h6>
        <button onClick={()=>handleDelete(item?.id)} className='btn'><i class="fa-solid fa-trash"></i></button>
      </div>



<Row>
  {
    item?.allVideos && item?.allVideos.map(
      card=>(
        <Col sm={12}>
        <VideoCard displayData={card} insideCategory={true}/>
        </Col>
      )
    )
  }
</Row>







    </div>
  )):<p style={{color:"red"}}>no categories added</p>
}

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add categrory</Modal.Title>
        </Modal.Header>
        <Modal.Body>


<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">

<Form.Label> enter categrory name</Form.Label>

       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="email" placeholder="Enter videotitle" onChange={(e)=>setCategoryName(e.target.value)} />
       
      </Form.Group>
      
      

</Form>
         

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add videos</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
position="top-center"
theme="colored"
autoClose={2000}/>

    </>
  )
}

export default Category