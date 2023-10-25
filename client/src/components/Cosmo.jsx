import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Swiper = styled.div`
    transform: translatex(${props => props.swiper * -100}%);
    transition: 1s ease-in-out;
`

const Swipe = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Cosmo = () => {

    const [cosmo, setCosmo] = useState([]);
    const [swiper, setSwiper] = useState(0);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://divine-phi.vercel.app/server/properties/cosmo")
            .then(result => setCosmo(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = (direction) => {
        if (direction === "left") {
            setSwiper(swiper > 0 ? swiper - 1 : 0)
        } else {
            setSwiper(swiper < 13 ? swiper + 1 : 13)
        }
    }

    return (
        <div className="cosmo border">
            <div className="title">
                <h6>Cosmo Lofts</h6>
                <h3>Breathtaking Panoramic View's</h3>
            </div>
            <div className="cosmoSwiperWrapper">
                <Swiper className="cosmoSwiper" swiper={swiper}>
                    {cosmo.map((c) => (
                        <Swipe className="cosmoBx" img={c.image}>
                            <div className="cosmoTxt">
                                <Link className="link" to={`/property/${c.name}`}><h5>{c.name}</h5></Link>
                                <h5>${c.price}</h5>
                            </div>
                        </Swipe>
                    ))}
                </Swiper>
                <div className="cosmobtns">
                    <div className="btn" onClick={() => handleClick("left")}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg></div>
                    <div className="btn" onClick={() => handleClick("right")}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"></path></svg></div>
                </div>
            </div>
        </div>
    );
}

export default Cosmo;