import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Login from "./Pages/Login/Login";
import Login from "./page/Login/Login";
import Navbar from "./component/Navbar/navbar";
import Regler from "./page/regler/regler";
import Home from "./page/Home/home";
import Foxkit from "./page/Foxkit/foxkit";
import Pages from "./page/Pages/pages";
import Product from "./page/Product/product";
import Shop from "./page/Shop/shop";
import Cart from "./component/cart";
import { useSelector } from "react-redux";
import './assets/style/style.css';
import Footer from "./component/Footer/footer";
function App() {

  const lstate = useSelector((state)=>state.auth.isAuth)
  console.log(lstate)
  return (
   <>
   <BrowserRouter>
   {(lstate)?<Navbar/>:null}
   <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={(lstate)?<Home/>:<Login/>}></Route>
      <Route path="/shop" element={(lstate)?<Shop/>:<Login/>}></Route>
      <Route path="/product" element={(lstate)?<Product/>:<Login/>}></Route>
      <Route path="/cart" element={(lstate)?<Cart/>:<Login/>}></Route>

      {/* <Route path="/regler" element={(lstate)?<Regler/>:<Login/>}></Route> */}
      <Route path="/regler" element={<Regler/>}></Route>
      {/*<Route path="/home" element={<Home/>}></Route> */}
      <Route path="/foxkit" element={<Foxkit/>}></Route>
      <Route path="/pages" element={<Pages/>}></Route>
      {/* <Route path="/product" element={<Product/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route> */}
   </Routes>
    <Footer/>    
   </BrowserRouter>
  
   </>
  );
}

export default App;
