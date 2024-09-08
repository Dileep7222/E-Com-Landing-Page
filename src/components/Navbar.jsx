import Logo from "../assets/logo.png"
import  "./Navbar.css"
export default function Navbar(){
   return (
    <nav>
      <img src={Logo} className="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#faq" className="faq">
            FAQ
          </a>
        </li>
        <li>
          <a href="#cart" className="cart">
            Cart
            <span>0</span>
          </a>
        </li>
      </ul>
    </nav>
   )
}


