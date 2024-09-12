import './header.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'; 

function Header() {

  return(
  <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#">E-commerce</a>
    <button class="navbar-toggler" type="button" 

    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About Us</Link>
        </li>
    

        <li class="nav-item">
          <Link class="nav-link" to="/Services">Services</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
        </li>

       
 

      </ul>

    </div>
  </div>
</nav>
  
)}
export default Header;
