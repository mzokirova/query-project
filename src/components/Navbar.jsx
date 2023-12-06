import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

function Navbar() {
    const Nav = styled('nav')({
      padding:'2rem 0'
        
    });
    return ( 
        <Nav>
            <ul>
            
            <li style={{listStyle:'none'}}><NavLink style={{color:'darkblue',fontSize:'24px'}} to={"/"}>Home</NavLink></li>
        </ul>

        </Nav>
     );
}

export default Navbar;