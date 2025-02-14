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
import Inventory from './Dashboard/Inventory.jsx'
import Order from './Dashboard/Order.jsx'
import Shipping from './Dashboard/Shipping.jsx'
import Return from './Dashboard/Return.jsx'
import CustomerList from './Dashboard/Customerlist.jsx'
import Review from './Dashboard/Review.jsx'
import SalesAnalytics from './Dashboard/SalesAnalytics.jsx'
import Traffic from './Dashboard/Traffic.jsx'
import Message from './Dashboard/Message.jsx'



function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Vendors" element={<Vendors />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/HomeProduct" element={<HomeProduct />} />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route path="category/:id" element={<SinglePage />} />
          </Route>

          {/* Dashboard Routes */}
           <Route path="/" element={<Dashboardlayout />}>
            <Route path="/dashboard" index element={<DashboardView />} />
            <Route path="/newproduct" element={<Newproduct />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/return" element={<Return />} />
            <Route path="/customerlist" element={<CustomerList />} />
            <Route path="/review" element={<Review />} />
            <Route path="/sales" element={<SalesAnalytics />} />
            <Route path="/traffic" element={<Traffic/>} />
            <Route path="/messages" element={<Message/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
