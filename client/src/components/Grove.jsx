import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Slider = styled.div`
    transform: translatex(${props => props.slider * -700}px);
    transition: .5s ease;

    @media only screen and (max-width:650px) {
        transform: translatex(${props => props.slider * -390}px);
    }
`

const Grove = () => {

    const [grove, setGrove] = useState([]);
    const [slider, setSlider] = useState(0);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://divine-phi.vercel.app/server/properties/grove")
            .then(result => setGrove(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = (direction) => {
        const isSmallScreen = window.innerWidth < 800;

        if (direction === "left") {
            setSlider(slider > 0 ? slider - 1 : (isSmallScreen ? 11 : 9));
        } else {
            setSlider(slider < (isSmallScreen ? 11 : 9) ? slider + 1 : 0);
        }
    };

    return (
        <div className="grove border">
            <div className="title">
                <h6>Tranquil Grove</h6>
                <h3>Dive-In Oasis Retreat</h3>
            </div>
            <div className="sliderWrapper">
                <Slider className="slider" slider={slider}>
                    {grove.map((p) => (
                        <div className="slide">
                            <Image className="slideBx" img={p.image}>
                                <div className="slideStamps">
                                    <Link className="link" to={`/property/${p.name}`}><h5>{p.name}</h5></Link>
                                    <h5>${p.price}</h5>
                                </div>
                            </Image>
                        </div>
                    ))}
                </Slider>
                <div className="btns">
                    <div className="btn" onClick={() => handleClick("left")}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg></div>
                    <div className="btn" onClick={() => handleClick("right")}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"></path></svg></div>
                </div>
            </div>
        </div>
    );
}

export default Grove;