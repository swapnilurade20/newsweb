import "../App.css";
import {Link} from "react-router-dom";

function NavBar()
{
    // SCROLL EVENT LISTENER
    window.addEventListener("scroll",() =>
    {
        let header=document.querySelector("header");
        header.classList.toggle("navBarAnimate",window.scrollY>=350)
    })

    return (
        <nav>
            <section className="topStatusBar">
                We are up on the cloud
            </section>
            <header className="navBar">
                <Link to="/" className="logo">Futurex</Link>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about-us" >About us</Link></li>
                    <li><Link to="/contact-us" >Contact us</Link></li>
                </ul>
            </header>
        </nav>
    )
}

export default NavBar
