import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./favicon.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='#395f74 fw-bold'>HOME</Nav.Link>
            <Nav.Link href="#about" className='#395f74 fw-bold'>ABOUT</Nav.Link>
            <Nav.Link href="#service" className='#395f74 fw-bold'>SERVICE</Nav.Link>
            <Nav.Link href="#portfolio" className='#395f74 fw-bold'>PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact" className='#395f74 fw-bold'>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;