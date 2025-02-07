import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home.jsx'
import Shop from './components/Shop'
import Contact from './components/Contact.jsx'
import Account from './components/Account'
import Vendors from './components/Vendors'
import Blog from './components/Blog'
import './App.css'
import SinglePage from './components/SinglePage.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {
  return (
    <Routes>..
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/Blog" element={<Blog />} />   
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="category/:id" element={<SinglePage/>} />
       </Route>
    </Routes>
  );
}

export default App;