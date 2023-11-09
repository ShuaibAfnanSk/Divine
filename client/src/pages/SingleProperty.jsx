import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import notlisted from "../json/notlisted";

const Hero = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Neighbor = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const SingleProperty = () => {

    const path = location.pathname.split('/')[2];
    const [name, setName] = useState();
    const [waterfront, setWaterfront] = useState();
    const [condition, setCondition] = useState();
    const [view, setView] = useState();
    const [bathroom, setBathroom] = useState();
    const [bedroom, setBedroom] = useState();
    const [lot, setLot] = useState();
    const [living, setLiving] = useState();
    const [price, setPrice] = useState();
    const [floor, setFloor] = useState();
    const [base, setBase] = useState();
    const [above, setAbove] = useState();
    const [renovate, setRenovate] = useState();
    const [built, setBuilt] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [neighbors, setNeighbors] = useState([]);
    const [image, setImage] = useState();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("https://divine-pi.vercel.app/server/properties/" + path)
            .then((result) => {
                setName(result.data.name)
                setNeighbors(result.data.neighbors)
                setState(result.data.statezip)
                setImage(result.data.image)
                setCity(result.data.city)
                setBuilt(result.data.yr_built)
                setRenovate(result.data.yr_renovated)
                setCondition(result.data.condition)
                setLiving(result.data.sqft_living)
                setLot(result.data.sqft_lot)
                setPrice(result.data.price)
                setFloor(result.data.floors)
                setBedroom(result.data.bedrooms)
                setBathroom(result.data.bathrooms)
                setView(result.data.view)
                setWaterfront(result.data.waterfront)
                setAbove(result.data.sqft_above)
                setBase(result.data.sqft_basement)
            })
            .catch(err => console.log(err))
    }, [path])

    const handleRefresh = () => {
        setTimeout(() => {
            window.location.reload()
        }, [500])
    }

    return (
        <>
            <div className="spContainer">
                <Hero className="spHero border" img={image}>
                    <Header />
                    <div className="spTitle">
                        <h6>{city}</h6>
                        <h2>{name}</h2>
                        <p>A Property Located in {city}, {state} in USA</p>
                    </div>
                </Hero>
                <div className="spContent border">
                    <div className="spTxtTitle">
                        <h5>Property Details</h5>
                    </div>
                    <div className="spTxtBx">
                        <div className="spTxt">
                            <h3>Description About property</h3>
                            <p>Discover a charming {bedroom} bedroom, {bathroom} bathroom home with {living} sqft of living space and This property offers a view rating of {view}</p>
                            <p>This {floor} floors residence, is built in {built}, offers a cozy yet spacious environment. Embrace the comfort of two well-appointed bedrooms and bathrooms.</p>
                            <p>The open living area, spanning {above} sqft above ground, is complemented by a {base} sqft basement. A generous {lot} sqft lot surrounds the property, providing ample outdoor space.</p>
                            <p>The home balances tranquility with accessibility. Enjoy the timeless appeal of a property that marries classic architecture with contemporary comforts. The home has been rated {condition} for its condition based on it's general maintenance and upkeep of the home.</p>
                        </div>
                        <div className="spTable">
                            <div className="table">
                                <div className="row">
                                    <span>Name</span>
                                    <span>{name}</span>
                                </div>
                                <div className="row">
                                    <span>City</span>
                                    <span>{city}</span>
                                </div>
                                <div className="row">
                                    <span>statezip</span>
                                    <span>{state}</span>
                                </div>
                                <div className="row">
                                    <span>Waterfront</span>
                                    <span>{waterfront === 1 ? ("Available") : ("Not Available")}</span>
                                </div>
                                <div className="row">
                                    <span>Year Renovated</span>
                                    <span>{renovate ? (`${renovate}`) : ("Not Renovated")}</span>
                                </div>
                                <div className="row lastrow">
                                    <span>Price</span>
                                    <span>${price}</span>
                                </div>
                                <Link to={`/visit/${name}`} className="link"><button className="button">Plan a Visit</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {neighbors.length === 0 ? (
                    <div className="neighbors">
                        {notlisted.map((n) => (
                            <Neighbor className="neighbor" img={n.image}>
                                <div className="neighborBx">
                                    <div className="neighborTitle">
                                        <h3>{n.name}</h3>
                                        <p>A Property Located in {n.city}, {n.state} in USA</p>
                                    </div>
                                    <div className="neighborStamps">
                                        <div className="neighborSpans">
                                            <span>{n.floors} floors</span>
                                            <span>{n.bedrooms} bedrooms</span>
                                        </div>
                                        <Link to={`/property/${n.name}`} onClick={handleRefresh}><button className="button neighborBtn">Explore</button></Link>
                                    </div>
                                </div>
                            </Neighbor>
                        ))}
                    </div>
                ) : (
                    <div className="neighbors">
                        {neighbors.map((n) => (
                            <Neighbor className="neighbor" img={n.image}>
                                <div className="neighborBx">
                                    <div className="neighborTitle">
                                        <h3>{n.name}</h3>
                                        <p>A Property Located in {n.city}, {n.state} in USA</p>
                                    </div>
                                    <div className="neighborStamps">
                                        <div className="neighborSpans">
                                            <span>{n.floors} floors</span>
                                            <span>{n.bedrooms} bedrooms</span>
                                        </div>
                                        <Link to={`/property/${n.name}`} onClick={handleRefresh}><button className="button neighborBtn">Explore</button></Link>
                                    </div>
                                </div>
                            </Neighbor>
                        ))}
                    </div>
                )
                }

            </div >
            <Footer />
        </>
    );
}

export default SingleProperty;