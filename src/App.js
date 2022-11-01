
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar/Navbar"
import Salu2 from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Salu2 greeting="Esto se deberia mostrar por pantalla" color="red"/>
      
      
    </div>
  );
}

export default App;
