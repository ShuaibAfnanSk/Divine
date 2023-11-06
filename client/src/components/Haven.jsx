import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Swiper = styled.div`
    transform: translatex(${props => props.swiper * -700}px);
    transition: 1s ease-in-out;

    @media only screen and (max-width:1285px) {
        transform: translatex(${props => props.swiper * -750}px);
    }

    @media only screen and (max-width:750px) {
        transform: translatex(${props => props.swiper * -610}px);
    }

    @media only screen and (max-width:400px) {
        transform: translatex(${props => props.swiper * -100}%);
    }
`

const Swipe = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Haven = () => {

    const [haven, setHaven] = useState([]);
    const [swiper, setSwiper] = useState(0);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("https://divine-pi.vercel.app/server/properties/haven")
            .then(result => setHaven(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = (direction) => {
        const isSmallScreen = window.innerWidth < 400;
        if (direction === "left") {
            setSwiper(swiper > 0 ? swiper - 1 : (isSmallScreen ? 19 : 11));
        } else {
            setSwiper(swiper < (isSmallScreen ? 19 : 11) ? swiper + 1 : 0);
        }
    };


    return (
        <div className="haven border">
            <div className="title">
                <h6>Cluster Two</h6>
                <h3>Elite, Class & Luxe Home</h3>
            </div>
            <div className="swiperWrapper">
                <div className="swipebtns">
                    <div className="swipebtn" onClick={() => handleClick("left")}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg></div>
                    <div className="swipebtn" onClick={() => handleClick("right")}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"></path></svg></div>
                </div>
                <div className="swiperBx">
                    <Swiper className="swiper" swiper={swiper}>
                        {haven.map(c => (
                            <Swipe className="swipe" img={c.image}>
                                <div className="swipeTxt">
                                    <Link className="link" to={`/property/${c.name}`}><h4>{c.name}</h4></Link>
                                </div>
                                <div className="swipeStamp">
                                    <span>${c.price}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" viewBox="0 0 256 256"><path d="M229.5,113,166.07,90,143,26.5a16,16,0,0,0-30,0L90,89.93,26.5,113a16,16,0,0,0,0,30l63.43,23L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30Zm-68.93,38a16,16,0,0,0-9.54,9.54L128,223.9l-23-63.33A16,16,0,0,0,95.43,151L32.1,128l63.33-23A16,16,0,0,0,105,95.43L128,32.1l23,63.33a16,16,0,0,0,9.54,9.54l63.33,23Z"></path></svg>
                                </div>
                            </Swipe>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
}

export default Haven;