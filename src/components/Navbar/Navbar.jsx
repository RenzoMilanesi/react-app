
import CardWidget from "./CardWidget"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar, }from 'react-bootstrap'
import {BrowserRouter,Routes, Route ,Link} from "react-router-dom"
import ErrorPage from "../RouteError/ErrorPage"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';

function ColorSchemesExample() {
  return (
    <>
    <BrowserRouter>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">HerreriaDiYaYa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/Interiores">Interiores</Nav.Link>
            <Nav.Link as={Link} to="/category/Banquetas">Banquetas</Nav.Link>
            <Nav.Link as={Link} to="/category/Patio">Patio</Nav.Link>
            
            <Nav.Link href="#pricing"><CardWidget/></Nav.Link>
          </Nav>
        </Container>
        
      </Navbar>
      <div>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/category/:idCategory" element={<ItemListContainer/>}/>  
      <Route path="*" element={<ErrorPage/>}/>   
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default ColorSchemesExample;