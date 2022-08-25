import {useState} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import './style/App.css';
import Navbar from './components/Navbar';
import { 
  Error, 
  Home, 
  Login, 
  Products,
  ProductDetails,
  Cart,
  Dashboard,
  EditItem,
  AddItem
  } from './pages';

function App() {
  const [cart,setCart] = useState({});
  const navigate = useNavigate();

  const removeItem = (id) => {
    console.log("in remove",id)
    let newCart = {...cart}
    delete newCart[id]
    setCart(newCart)
  }
  const clearCart = () => {
    setCart({});
    navigate("/store");
  }

  return (
    <div className="App">
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="store" element={<Products cart={cart} removeItem={removeItem} />} />
        <Route 
          path="products/:prodId" 
          element={<ProductDetails 
                      cart={cart} 
                      setCart={setCart}
                      removeItem={removeItem}
                      />} 
        />
        <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="add" element={<AddItem />} />
          <Route path="edit" element={<EditItem />} />
        </Route>
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
