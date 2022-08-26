import { useState, useEffect } from 'react';
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
  import {url} from './api/storeApi';

function App() {
  const [cart,setCart] = useState({});
  const [items,setItems] = useState([])
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      let response = await fetch(url);
      const data = await response.json();
      setItems(data.Items)
    } catch (err) {
      console.log("Failed to retrieve items to edit.")
    }
  }

  useEffect(() => {
    fetchProducts()
  },[])

  const removeItem = (id) => {
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
        <Route path="store" element={<Products cart={cart} removeItem={removeItem} items={items} />} />
        <Route path="products/:prodId" element={<ProductDetails cart={cart} setCart={setCart} removeItem={removeItem} items={items} />} />
        <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<EditItem items={items} setItems={setItems} />} />
          <Route path="edit" element={<EditItem items={items} setItems={setItems} />} />
          <Route path="add" element={<AddItem />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
