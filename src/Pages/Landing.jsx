import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigateByUrl=useNavigate()
  const clickNavigate=()=>{
    navigateByUrl('./home')
  }

  return (
    <div >
       <Row className='pt-5 d-flex align-item-center'>
        <Col></Col>
        <Col md='4'>
          <h2>Welcome to <span className='text-info'>VideoPlayer.com</span></h2><br />
          <p  style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt malesuada urna. Morbi tincidunt turpis leo, ac commodo nisl pulvinar sit amet. Vivamus ligula libero, molestie eu scelerisque in, aliquet vitae nunc. Integer tincidunt gravida nulla non placerat. Nam finibus ligula vitae erat sollicitudin ultrices vel id nisi. Nulla blandit aliquam dui, ut auctor sapien finibus non. Praesent nec lorem ut lectus suscipit lobortis. Maecenas ac volutpat leo, et molestie nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium augue hendrerit libero consequat, in rhoncus mauris molestie. Integer ultrices lobortis dictum. Suspendisse molestie tempor mi sit amet cursus. Etiam nisi augue, posuere vitae lacinia vitae, tincidunt et ante. Nullam viverra, sem interdum facilisis accumsan, lectus eros viverra elit, pharetra vehicula odio sem vel diam. Quisque quis condimentum ante. Quisque facilisis dolor in tincidunt tempor.</p>
          <button className='btn  bg-info text-white'onClick={clickNavigate}>Get Started</button>
        </Col>
        <Col></Col>
        <Col md='6'>
           <img className='img-fluid mt-4  ps-5' style={{height:'370px'}} src="https://th.bing.com/th/id/R.4e1df3e38055ed1442044d9e041d9006?rik=bMMS29GJw1xYjA&riu=http%3a%2f%2ffordesigner.com%2fimguploads%2fImage%2fcjbc%2fzcool%2fpng20080526%2f1211813364.png&ehk=Hf5CAPoZ3%2fvN3XIytNZyCKj6x1HWCXPRoePy%2b4XAuRs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
        </Col>
       </Row>


   <div>
      <h1 className='text-center text-danger '>Features</h1>
      <div className='d-flex justify-content-around mt-5 mb-5'>

      <Card className='me-5 ms-5 shadow' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/1a/aa/4c1aaa974d49a14e1018f8b9070a38ed.gif" />
        <Card.Body>
            <Card.Title style={{color:'red'}}>Manage Video</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='me-5 ms-5 shadow' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.dribbble.com/users/943550/screenshots/2373582/video-marketing_2.gif" />
        <Card.Body>
            <Card.Title style={{color:'red'}}>Upload Video</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='me-5 ms-5 shadow' style={{ width: '18rem' }}>
          <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/aa/5b/9b/aa5b9bc4e5234c8030fad8ef563de523.gif" />
        <Card.Body>
            <Card.Title style={{color:'red'}}>Watch History</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>


    <div className='border border-success rounded shadow p-5 mx-5 mb-5'>
      <Row>
        <Col>
          <h1>Simple,Fast and Powerfull</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Duis tincidunt malesuada urna. Morbi tincidunt turpis leo, ac commodo nisl pulvinar sit amet. Vivamus ligula libero, molestie eu scelerisque in, aliquet vitae nunc. Integer tincidunt gravida nulla non placerat. Nam finibus ligula vitae erat sollicitudin ultrices vel id nisi. Nulla blandit aliquam dui, ut auctor sapien finibus non. Praesent nec lorem ut lectus suscipit lobortis. Maecenas ac volutpat leo, et molestie nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium augue hendrerit libero consequat, in rhoncus mauris molestie. Integer ultrices lobortis dictum. Suspendisse molestie tempor mi sit amet cursus. Etiam nisi augue, posuere vitae lacinia vitae, tincidunt et ante. Nullam viverra, sem interdum facilisis accumsan, lectus eros viverra elit, pharetra vehicula odio sem vel diam. Quisque quis condimentum ante. Quisque facilisis dolor in tincidunt tempor. Dignissimos nisi nobis error incidunt, accusantium repellat qui repudiandae tempore modi vel quisquam autem nostrum eveniet animi veniam consectetur nihil voluptatibus? Nostrum.</p>
        </Col>
        <Col md='6' className='p-3'>
          <iframe style={{width:'100%',height:'300px'}} src="https://www.youtube.com/embed/6BVJEcsq5U4?si=IZn8RgEU6a_6DV49" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </Col>
      </Row>
    </div>
    </div>

    
  )
}

export default Landing