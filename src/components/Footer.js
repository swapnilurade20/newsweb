import {Link} from "react-router-dom";

function Footer()
{
    return (
        <footer>
            <div className="footerLogoBar">
                Futurex
            </div>
            <div className="footerMenus">
                <ul className="menuList">
                    <li>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                    </li>
                    <li>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                    </li>
                    <li>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                    </li>
                    <li>
                        <Link to="/about-us" >About us</Link>
                        <Link to="/contact-us" >Contact us</Link>
                        <Link to="/" >Home</Link>
                        <Link to="/about-us" >About us</Link>
                        <div className="footerIconLinks">
                            <a href="#">
                                <img src="https://i1.wp.com/zeevector.com/wp-content/uploads/2021/01/Get-It-On-Google-Play-Logo-PNG.png?resize=768%2C228&ssl=1" width="90px" alt="" />
                            </a>
                        </div>
                        <div className="footerIconLinks">
                            <a href="#">
                                <img src="https://pluspng.com/img-png/download-on-app-store-png-open-2000.png" width="90px" alt="" />
                            </a>
                        </div>
                        <div className="footerIconLinks">
                            <a href="#">
                                <i className="bi bi-facebook" width="30px"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footerBottomBar">
                Made with 🧡
            </div>
        </footer>
    )
}

export default Footer
