import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPages() {
  const navigateByUrl = useNavigate()
  return (

<>
<Row className='mt-5 align-items-centre justify-content-between w-100'>
<Col></Col>
<Col lg={4} >
<h3>Welcome to 
  <span className='text-warning'>Media player</span></h3>
  <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere eaque earum quas alias quidem culpa at! Rerum beatae, ea dicta voluptatem dolores eligendi quis. Eaque distinctio unde fugit esse?</p>
<button  onClick={()=>navigateByUrl('/home')} className='mt-5 mb-5 btn btn-info'>Get started</button>
</Col>
<Col lg={6}>

<img style={{paddingLeft:'20px'}} className='img-fluid' src="https://cutewallpaper.org/21/equalizer-gif/Programming-JavaScript-Equalizer-A-webdeasy.de.gif" alt="player" />
</Col>
<Col></Col>
</Row>

<div className="mt-5 align-items-center justify-content-center flex-column">
  <h3 style={{textAlign:'center'}}>Features</h3>
  <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w=100">

  <Card className='p-4 ml-3' style={{ width: '18rem',marginLeft:'90px' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'}  variant="top" src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" />
      <Card.Body>
        <Card.Title>Categorized videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='p-4' style={{ width: '18rem',marginRight:'90px' }}>
      <Card.Img width={'300px'} height={'300px'}  variant="top" src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>







<div className='container border rounded p-5 border-secondary  b-5 mt-5  d-flex align=items-center justify-content-between w-100'>

  <div className='col-lg-5'>
<h3 className='mb-5 text-warning'>simple powerful and fast</h3>
<h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>play everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laudantium sint optio maiores voluptatibus quod aliquam ab dolores numquam nobis. Sequi quaerat doloribus, reprehenderit natus minus dicta ducimus autem adipisci.</h6>

<h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>play everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laudantium sint optio maiores voluptatibus quod aliquam ab dolores numquam nobis. Sequi quaerat doloribus, reprehenderit natus minus dicta ducimus autem adipisci.</h6>


<h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>play everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laudantium sint optio maiores voluptatibus quod aliquam ab dolores numquam nobis. Sequi quaerat doloribus, reprehenderit natus minus dicta ducimus autem adipisci.</h6>



  </div>
<div className="video col-lg-5 me-3">
  
<iframe width="560" height="315" src="https://www.youtube.com/embed/w8CxEGMcFPQ?si=P-LL7QMBBBtQgtLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>

</div>
</>


    )
}

export default LandingPages