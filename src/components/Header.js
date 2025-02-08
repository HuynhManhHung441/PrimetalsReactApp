import logo from '../assets/images/PrimetalsLogo.png'

function Header() {
    return (
        <header className="container">
        <div className="logo">
            <img src={logo} alt="logo" srcset=""/>
        </div>
        <div className="navBar">
            <nav className="hide">
                <div className="languages"><i className="bi bi-globe2"></i></div>
                <div className="search"><i className="bi bi-search"></i></div>
                <div className="menu"><i className="bi bi-list"></i></div>
            </nav>
            <div className="navMain">
                <ul>
                    <li className="navMain-dropdown-item portfolio-dropdown">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="navMain-dropdown-item__name">Portfolio</span>
                            <i className="bi bi-chevron-down"></i>
                        </a>
                        <ul className="portfolio-list">
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Agglomeration</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Ironmaking</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Steelmaking</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Continuous Casting</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Hot Rolling Long</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Hot Rolling Flat</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Cold Rolling</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Non Ferrous Rolling</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Processing</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Endless Casting & Rolling</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>MiniMills</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Technology Packages</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Automation & Digital Plants</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Smart Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>ECO Solutions</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-chevron-compact-right"></i>
                                    <span>Integrated Plants & Solutions</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navMain-dropdown navMain-dropdown-item">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="navMain-dropdown-item__name">E-services</span>
                            <i className="bi bi-chevron-down"></i>
                        </a>
                    </li>
                    <li className="navMain-dropdown navMain-dropdown-item">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="navMain-dropdown-item__name">Careers</span>
                        </a>
                    </li>
                    <li className="navMain-dropdown navMain-dropdown-item">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="navMain-dropdown-item__name">About Us</span>
                            <i className="bi bi-chevron-down"></i>
                        </a>
                    </li>
                    <li className="navMain-dropdown navMain-dropdown-item">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="navMain-dropdown-item__name">News & Media</span>
                            <i className="bi bi-chevron-down"></i>
                        </a>
                    </li>
                    <li className="navMain-dropdown navMain-dropdown-item">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="navMain-dropdown-item__name">Contact us</span>
                            <i className="bi bi-chevron-down"></i>
                        </a>
                    </li>
                </ul>    
            </div>
        </div>
    </header>
    );
}

export default Header