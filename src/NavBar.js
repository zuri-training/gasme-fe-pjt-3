import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
    return(
        <ul>

            <li>
                <Link to="/customer dashboard">Customer Dashboard</Link>
            </li>
            <li>
                <Link to="/seller dashboard">Seller Dashboard</Link>
            </li>
            
        </ul>
    )
}
export default NavBar;