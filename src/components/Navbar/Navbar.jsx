import CardWidget from './CardWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            HerreriaDiYaYa
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/category/Interiores'>
              Interiores
            </Nav.Link>
            <Nav.Link as={Link} to='/category/Banquetas'>
              Banquetas
            </Nav.Link>
            <Nav.Link as={Link} to='/category/Patio'>
              Patio
            </Nav.Link>
            <Nav.Link as={Link} to='/cart'>
              <CardWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div></div>
    </>
  );
}

export default ColorSchemesExample;
