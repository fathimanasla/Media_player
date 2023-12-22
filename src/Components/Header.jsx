import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'./'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-cloud-arrow-up fa-beat-fade fa-xl me-4" style={{color:' #385a94'}}></i>{' '}
             <span style={{fontSize:'25px'}}>Play Videos</span>
          </Navbar.Brand>
          </Link>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header