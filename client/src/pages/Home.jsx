import Footer from "../components/Footer";
import Header from "../components/Header";
import polaroids from "../json/polaroids";
import about from "../json/about";
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
            <div className="about border">
                <div className="aboutBx">
                    <div className="aboutTxt">
                        <h5>We are Alchemy</h5>
                        <p>Discover dream homes or sell effortlessly on our user-friendly platform. We simplify real estate, connecting buyers and sellers for a smooth and rewarding property experience."</p>
                    </div>
                    <div className="aboutStamps">
                        {about.map((a) => (
                            <div className="aboutStamp">
                                <span>{a.count}</span>
                                <span>{a.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aboutImg">
                    <img src="https://images.unsplash.com/photo-1531319365875-059b2a3a6f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1943&q=80" alt="" />
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
            <Footer />
        </section>
    );
}

export default Home;