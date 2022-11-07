import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export const Header = ()=>{
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const mystyle = {
      marginLeft:"10px", 
      backgroundColor: "#B2B2B2",
    };
    return(
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">Toko Buku Asadel</div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">New Arrival</a>
            </li>
          </ul>
          <form action="" className="search">
                <input type="search" placeholder="Search Here" onChange={(e)=> setText(e.target.value)}></input>
                <button style={mystyle} onClick={() => { navigate("/"+text) }} type="submit">Search</button>
                <script>console.log(text)</script>
            </form>
        </div>
      </nav>
    </>
  ) 
}