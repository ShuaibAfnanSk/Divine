import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/Context";

const Linker = styled.div``

const Dropdown = styled.div``

const Topbar = styled.header`
    @media (max-width: 850px) {
        display: ${({ show }) => (show ? "block" : "none")};
    }
`;

const Header = () => {

    const [hover, setHover] = useState(false);
    const { user, dispatch } = useContext(Context);
    const [show, setShow] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 850);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const handleMenu = (click) => {
        if (click === "open") {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    return (
        <>
            <div className="hiddenBtn" onClick={() => handleMenu('open')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="menu" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
            </div>
            <Topbar className="header" show={show}>
                <div className="headerDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleMenu('close')} className="menu" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                    <Link to={`/`} className="link"><h4 className="headerLogo">Divine</h4></Link>
                    <div className="headerNavs">
                        {!isSmallScreen && (
                            <Linker className="link" onMouseEnter={() => !isSmallScreen && setHover(true)}>
                                <span className="nav">Properties</span>
                            </Linker>
                        )}
                        {hover && !isSmallScreen && (
                            <Dropdown onMouseLeave={() => setHover(false)} className="dropdown">
                                <div className="dropdownDiv">
                                    <span className="nav">
                                        <Link to={`/properties`} className="link">Our Properties</Link>
                                    </span>
                                    <span className="nav">
                                        <Link to={`/sellProperties`} className="link">Seller Properties</Link>
                                    </span>
                                </div>
                            </Dropdown>
                        )}
                        <Link to={`/properties`} className="link hidden"><span className="nav">Properties</span></Link>
                        <Link to={`/sellProperties`} className="link hidden"><span className="nav">Seller Properties</span></Link>
                        <Link to={`/shop`} className="link"><span className="nav">Shop</span></Link>
                        <Link to={`/sell`} className="link"><span className="nav">Sell</span></Link>
                        <Link to={`/contact`} className="link"><span className="nav">Talk to Us</span></Link>
                    </div>
                    <div className="authBox">
                        {user ? (<button className="auth" onClick={handleLogout}>Logout</button>) :
                            (
                                <Link className="link" to="/login"><button className="auth">LOGIN</button></Link>
                            )}
                    </div>
                </div>
            </Topbar>
        </>
    );
}

export default Header;