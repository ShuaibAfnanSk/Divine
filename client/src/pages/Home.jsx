import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import polaroids from "../json/polaroids";
import service from "../json/service";
import { useState } from "react";
import about from "../json/about";
import styled from "styled-components";

const Slider = styled.div`
    transform: translatex(${props => props.slider * -100}%);
    transition: .5s ease-in-out;
`

const Home = () => {

    const [email, setEmail] = useState();
    const [slider, setSlider] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-pi.vercel.app/server/newsletter/request/", { email })
            .then(result => {
                console.log(result)
                alert("Thanks for subscribing our newsletter..")
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlider(slider > 0 ? slider - 1 : 0)
        } else {
            setSlider(slider < 2 ? slider + 1 : 2)
        }
    }

    return (
        <section className="wrapper">
            <div className="hero border">
                <Header />
                <div className="heroTitle">
                    <h2>Divine Alchemy</h2>
                    <p>An official <i style={{ fontWeight: "500" }}>Alchemy</i> property selling and buying store.</p>
                </div>
            </div>
            <div className="polaroidBx border">
                <div className="polaroidTitle">
                    <h3>Explore serene retreats & blissful abodes.</h3>
                </div>
                <div className="polaroids">
                    {polaroids.map((p) => (
                        <div className="polaroid">
                            <img src={p.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="about">
                <Slider className="aboutSlider" slider={slider}>
                    {about.map((a) => (
                        <div className="aboutDiv">
                            <div className="aboutCard">
                                <div className="overlay">
                                    <img src={a.image} alt="" />
                                </div>
                                <div className="cardTxt">
                                    <div className="cardDesc">
                                        <p>{a.desc}</p>
                                    </div>
                                    <div className="cardStamps">
                                        <div className="stampLeft">
                                            <h5>{a.name}</h5>
                                            <h6>{a.role}</h6>
                                        </div>
                                        <div className="stampRight">
                                            <h3>{a.rating}.0</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="aboutBtns">
                    <button onClick={() => handleClick("left")}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg></button>
                    <button onClick={() => handleClick("right")}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></button>
                </div>
            </div>

            <div className="serviceWrapper border">
                <div className="title">
                    <h6>Our Services</h6>
                    <h3>Let's Bridge Dream's Together</h3>
                    <p>At Divine we help you find your dream property and also sell your property at best possible price.</p>
                </div>
                <div className="services">
                    {service.map((s) => (
                        <div className="service">
                            <img src={s.image} alt="" />
                            <div className="serviceTxt">
                                <h5>{s.title}</h5>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="aboutWrapper">
                <div className="title">
                    <h6>Newsletter</h6>
                    <p>Subscribe to stay updated.</p>
                </div>
                <div className="about aboutAlt">
                    <form className="aboutBx" onSubmit={handleSubmit}>
                        <h3>Newsletter</h3>
                        <input type="email" className="subscribe" onChange={(e) => setEmail(e.target.value)} required placeholder="john.doe@email.com" />
                        <button type="submit" class="fancy">
                            <span class="top-key"></span>
                            <span class="text">Subscribe</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Home;