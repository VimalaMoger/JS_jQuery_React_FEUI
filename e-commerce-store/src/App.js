//import logo from './logo.svg';
import './App.css';
import React from "react";
import { getCategories } from './fetcher';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ProductDetail from './components/productDetail';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
import OrderConfirmation from './components/orderConfirmation';
import SearchResults from './components/searchResults';


function App() {
  const [categories, setCategories] = React.useState({errMessage: '', data: []});

  React.useEffect(() => {    
    const fetchData = async () => {
      const responseObj = await getCategories();
      setCategories(responseObj);
    } 
    fetchData();
  }, []) 

  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout categories={categories}/>}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orderConfirmation" element={<OrderConfirmation />} />
          <Route path="search" element = {<SearchResults />} />
          <Route path="categories/:categoryId" element={<Category />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
