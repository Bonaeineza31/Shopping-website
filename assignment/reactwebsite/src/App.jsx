import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/Home.jsx'
import Shop from './components/shop'
import Contact from './components/Contact.jsx'
import Account from './components/Account'
import Vendors from './components/Vendors'
import './App.css'

function App() {
  return (
    <Routes>..
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Vendors" element={<Vendors />} />
      </Route>
    </Routes>
  );
}

export default App;