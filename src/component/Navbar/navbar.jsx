import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../Logintoolkit/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../cart";
import Megahome from '../megamenu/megahome';
import Megafoxkit from '../megamenu/megafoxkit';
import Megapages from '../megamenu/megapages';
import Megaproduct from '../megamenu/megaproduct';
import Megashop from '../megamenu/megashop';
import '../../assets/style/style.css';
const Navbar = () => {
  const [cartstate, setCartstate] = useState(null)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.items)
  const lout = () => {
    dispatch(logout());
    nav("/");
  };

  const showcart = () => {
    setCartstate(<Cart />)

  }
  let [show, setShow] = useState(null);
  const display = () => {
    setShow(<Megahome />)
  }
  const display1 = () => {
    setShow(<Megapages />)
  }
  const display2 = () => {
    setShow(<Megashop />)
  }
  const display3 = () => {
    setShow(<Megaproduct />)
  }
  const display4 = () => {
    setShow(<Megafoxkit />)
  }
  const hide = () => {
    setShow(null)
  }
  return (
    <>
      {/* <input type="checkbox" id='inp' hidden />
        <label for="inp" id='bar'><FaBars /></label> */}

      <div style={{ position: "absolute", float: "right" }}>
        {cartstate}

      </div>
      <div id="nav">
        <ul>
          <li>
            <Link to="/regler">
              <img src="https://next.minimog.co/cdn/shop/files/logo_f5707eeb-188f-4303-bbec-08f2c6e2a65d.png?v=1631802647&width=500" alt="" /></Link>
          </li>
        </ul>

        {/* <Link to="/"></Link> */}
        <div><Link to="/home" onMouseEnter={display}>Home</Link></div>
        <div><Link to="/pages" onMouseEnter={display1}>Pages</Link></div>
        <div><Link to="/shop" onMouseEnter={display2}> Shop </Link></div>
        <div><Link to="/product" onMouseEnter={display3}> Product </Link></div>
        <div><Link to="/home" onMouseEnter={display4}> Foxkit </Link></div>


        {/* <li>log</li>  */}
        {/* <li id="car" onClick={showcart}>&nbsp;cart{cart.length}</li>   */}
        <Link to={`/cart`}>cart{cart.length}</Link>
        
        {" "} 
         <button onClick={lout}>logout</button>
      </div>

        
        



        <div onMouseLeave={hide} >{show}</div>



      {/* <section id="nav">
        <div><Link to="/"><img src="https://next.minimog.co/cdn/shop/files/logo_f5707eeb-188f-4303-bbec-08f2c6e2a65d.png?v=1631802647&width=500" alt="" /></Link></div>
        <div><Link to="/home" onMouseEnter={display}>Home</Link></div>
        <div><Link to="/pages" onMouseEnter={display1}>Pages</Link></div>
        <div><Link to="/Shops" onMouseEnter={display2}>Shops</Link></div>
        <div><Link to="/products" onMouseEnter={display3}>Products</Link></div>
        <div><Link to="/foxkit" onMouseEnter={display4}>Foxkit</Link></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <div onMouseLeave={hide} >{show}</div>  */}
      {/* style={{position:"absolute" ,top:"100px",width:"100%",backgroundColor:"white",height:"400px"}} */}

    </>

  )
}
export default Navbar;