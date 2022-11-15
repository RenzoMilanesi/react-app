
import './App.css';
import NavBar from "./components/Navbar/Navbar"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import ErrorPage from "./components/RouteError/ErrorPage"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
function App() {
  return (
    
    <div className="App"> 
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/category/:idCategory" element={<ItemListContainer/>}/>  
      <Route path="*" element={<ErrorPage/>}/>   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
