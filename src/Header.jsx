import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
    function handleClick() {
        alert("Coming Soon.....");
    }

    return (
        <div className="header">
            <Navbar expand="lg">
                <Container>
                    <Link to="/home">
                        <img
                            className="header__logo"
                            src={logo}
                            alt="reBliss Logo"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{ marginLeft: "-5px" }}
                    >
                        <Nav className="me-auto navbarToggle">
                            <div id="google_translate_element" />
                            <Link to="/">
                                <div className="header__option">
                                    <span className="header__optionName">
                                        Home
                                    </span>
                                </div>
                            </Link>
                            <Link to="/aboutUs">
                                <div className="header__option">
                                    <span className="header__optionName">
                                        About Us
                                    </span>
                                </div>
                            </Link>
                            <Link to="/blog">
                                <div className="header__option">
                                    <span className="header__optionName">
                                        Blogs
                                    </span>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="header__option">
                                    <span
                                        className="header__optionName"
                                        onClick={handleClick}
                                    >
                                        Training
                                    </span>
                                </div>
                            </Link>
                            <Link to="/contactus">
                                <div className="header__option">
                                    <span className="header__optionName">
                                        Contact Us
                                    </span>
                                </div>
                            </Link>

                            <NavDropdown
                                className="navdropdown btn ml-4 "
                                title="Login"
                                id="basic-nav-dropdown"
                                variant="success"
                                style={{
                                    overflow: "inherit",
                                    height: "42px",
                                    zIndex: "9999",
                                }}
                            >
                                <NavDropdown.Item>
                                    <Link to="/registeration">
                                        <p>Registration</p>
                                    </Link>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item>
                                    <Link to="/userdashboard">
                                        <p> UserDashboard</p>
                                    </Link>
                                </NavDropdown.Item> */}

                                <NavDropdown.Item>
                                    <Link to="/userlogin">
                                        <p>Login</p>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <a
                                    className="header_empl"
                                    href="http://103.127.29.253/payroll/Emplogin.aspx?id=29"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Employee Login
                                </a>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
