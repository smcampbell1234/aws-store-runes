import {BrowserRouter, Routes, Route} from "react-router-dom";
import './style/App.css';
import Navbar from './components/Navbar';
import { Error, Home, Login, Products,ProductDetails} from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="store" element={<Products />} />
          <Route path="products/:prodId" element={<ProductDetails />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
