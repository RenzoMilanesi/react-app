
import CardWidget from "./CardWidget"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar, }from 'react-bootstrap'
import {Routes, Route ,Link} from "react-router-dom"
import ErrorPage from "../RouteError/ErrorPage"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">HerreriaDiYaYa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/idCategory">Detalle</Nav.Link>
            <Nav.Link href="#pricing"><CardWidget/></Nav.Link>
          </Nav>
        </Container>
        
      </Navbar>
      <div>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<ErrorPage/>}/>   
      </Routes>
      </div>
    </>
  );
}

export default ColorSchemesExample;