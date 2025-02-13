import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
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
import HomeProduct from'./components/HomeProduct'
import Dashboardlayout from './Dashboard/Dashboardlayout.jsx'
import DashboardView from './Dashboard/DashboardView'
import { ThemeProvider } from './Dashboard/Theme';
import Newproduct from "./Dashboard/Newproduct";


function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/Blog" element={<Blog />} />   
        <Route path="/HomeProduct" element={<HomeProduct />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="category/:id" element={<SinglePage/>} />
        <Route path="/" element={<Dashboardlayout />} />
        <Route index element={<DashboardView />} />
        </Route>
        <Route path="/" element={<Dashboardlayout />}>
        <Route path="/dashboard" index element={<DashboardView/>} />
        <Route path="/Newproduct" element={<Newproduct />} />
         </Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;