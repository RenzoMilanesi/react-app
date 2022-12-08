import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/RouteError/ErrorPage";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartView/>}/> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

