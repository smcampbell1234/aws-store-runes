import './style/App.css';
import Navbar from './components/Navbar';
import {
  Error,
  Home,
  Login,
  Products,
  ProductDetails
} from './pages'

function App() {
  return (
    <div className="App">
      <h2>App Page</h2>
      <Navbar />
      <Home />
      <Login />
      <Products />
      <ProductDetails />
      <Error />
    </div>
  );
}

export default App;
