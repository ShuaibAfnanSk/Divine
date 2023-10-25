import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Linker = styled.div``

const Dropdown = styled.div``

const Header = () => {

    const [hover, setHover] = useState(false);

    return (
        <header className="header">
            <div className="headerNavs">
                <Link to={`/`} className="link"><span className="nav">Home</span></Link>
                <Linker className="link" onMouseEnter={() => setHover(true)}><span className="nav">Properties</span></Linker>
                {
                    hover ? <Dropdown onMouseLeave={() => setHover(false)} className="dropdown">
                        <div className="dropdownDiv">
                            <span className="nav"><Link to={`/properties`} className="link">Our Properties</Link></span>
                            <span className="nav"><Link to={`/sellProperties`} className="link">Seller Properties</Link></span>
                        </div>
                    </Dropdown> : null
                }
                <Link to={`/shop`} className="link"><span className="nav">Shop</span></Link>
                <Link to={`/sell`} className="link"><span className="nav">Sell</span></Link>
                <Link to={`/contact`} className="link"><span className="nav">Talk to Us</span></Link>
            </div>
        </header>
    );
}

export default Header;