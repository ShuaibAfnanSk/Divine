import Footer from "../components/Footer";
import Header from "../components/Header";
import polaroids from "../json/polaroids";
import service from "../json/service";

const Home = () => {

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
                <div className="aboutBx">
                    <h3>Who we are</h3>
                    <p>Experience seamless real estate transactions on our user-friendly platform. Discover your dream home or sell effortlessly with our simplified process. We connect buyers and sellers, ensuring a smooth and rewarding property experience. Trust us to make your real estate journey easy and enjoyable. Your dream home or successful sale is just a click away!</p>
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
                    <div className="aboutBx">
                        <h3>Newsletter</h3>
                        <input type="email" className="subscribe" placeholder="john.doe@email.com" />
                        <a class="fancy" href="#">
                            <span class="top-key"></span>
                            <span class="text">Subscribe</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Home;