import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import CategoryView from './views/CategoryView';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h2>tienda Online</h2>

        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/category/:catName" element={<CategoryView />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/contact" element={<ContactView />} />
          <Route exact path="/ecomerce.html" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


