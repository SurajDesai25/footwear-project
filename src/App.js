import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Men from "./components/Men";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Women from "./components/Women";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Adminlogin from "./components/Admin/Adminlogin";
import Layout from "./components/Admin/Layout";
import Dashboard from "./components/Admin/Dashboard";
import Addproducts from "./components/Admin/Addproducts";
import Products from "./components/Admin/Products";
import Allproducts from "./components/Allproducts";
import Productdescription from "./components/Productdescription";
import Checkout from "./components/Checkout";
import Thankyou from "./components/Thankyou";

// import Adminlogin from "./components/Admin/Adminlogin";

function App() {
  return (
    <div>

      <BrowserRouter>
        
      <Header />
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/allproducts" element={<Allproducts />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
        <Route path="/productdescription/:id" element={<Productdescription/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="thankyou" element={<Thankyou/>} />
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        
        {/* <Route path="/admin" element={<Adminlogin/>}/> */}

        <Route path="/admin" element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/admin/addproduct" element={<Addproducts/>}/>
        <Route path="/admin/addproducts/:id" element={<Addproducts/>} />
        <Route path="/admin/products" element={<Products/>}/>

        
        </Route>
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
