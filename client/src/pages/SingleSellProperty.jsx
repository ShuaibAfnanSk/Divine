import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";

const Hero = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const SingleSellProperty = () => {

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
    const [rent, setRent] = useState();
    const [floor, setFloor] = useState();
    const [base, setBase] = useState();
    const [above, setAbove] = useState();
    const [renovate, setRenovate] = useState();
    const [built, setBuilt] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [image, setImage] = useState();
    const [sellerName, setSellerName] = useState();
    const [mail, setMail] = useState();
    const [phone, setPhone] = useState();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("https://divine-pi.vercel.app/server/sellProperties/" + path)
            .then((result) => {
                setName(result.data.name)
                setPhone(result.data.phone)
                setSellerName(result.data.sellerName)
                setMail(result.data.mail)
                setState(result.data.statezip)
                setImage(result.data.image)
                setCity(result.data.city)
                setBuilt(result.data.yr_built)
                setRenovate(result.data.yr_renovated)
                setCondition(result.data.condition)
                setLiving(result.data.sqft_living)
                setLot(result.data.sqft_lot)
                setPrice(result.data.price)
                setRent(result.data.rent)
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


    return (
        <div className="spContainer">
            <Hero className="spHero border" img={image}>
                <Header />
                <div className="spTitle">
                    <h6>{city}</h6>
                    <h2>{name}</h2>
                    <p>A Property Located in {city}, {state} in USA</p>
                </div>
            </Hero>
            <div className="spContentAlt border">
                <div className="spImgBx">
                    <img src={image} alt="" />
                </div>
                <div className="spTxtBxAlt">
                    <div className="spTableAlt">
                        <div className="table" style={{ borderRadius: "8px" }}>
                            <h5 style={{ fontSize: "1.5em", textTransform: "uppercase", fontFamily: "pacifico", marginBottom: "2em" }}>Property Details</h5>
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
                                <span>floors</span>
                                <span>{floor}</span>
                            </div>
                            <div className="row">
                                <span>bedrooms</span>
                                <span>{bedroom}</span>
                            </div>
                            <div className="row">
                                <span>bathrooms</span>
                                <span>{bathroom}</span>
                            </div>
                            <div className="row">
                                <span>View</span>
                                <span style={{ display: "flex", alignItems: "center", gap: ".5em" }}>{view} </span>
                            </div>
                            <div className="row">
                                <span>Condition</span>
                                <span style={{ display: "flex", alignItems: "center", gap: ".5em" }}>{condition}</span>
                            </div>
                            <div className="row">
                                <span>Waterfront</span>
                                <span>{waterfront === 1 ? ("Available") : ("Not Available")}</span>
                            </div>
                            <div className="row">
                                <span>Year Built</span>
                                <span>{built}</span>
                            </div>
                            <div className="row">
                                <span>Year Renovated</span>
                                <span>{renovate ? (`${renovate}`) : ("Not Renovated")}</span>
                            </div>
                            <div className="row">
                                <span>SQFT Above</span>
                                <span>{above}</span>
                            </div>
                            <div className="row">
                                <span>SQFT Basement</span>
                                <span>{base}</span>
                            </div>
                            <div className="row">
                                <span>SQFT Lot</span>
                                <span>{lot}</span>
                            </div>
                            <div className="row">
                                <span>SQFT Living</span>
                                <span>{living}</span>
                            </div>
                            <div className="row">
                                <span>Rent</span>
                                <span>${rent}</span>
                            </div>
                            <div className="row lastrow">
                                <span>Price</span>
                                <span>${price}</span>
                            </div>
                        </div>
                        <div className="table tableAlt" style={{ borderRadius: "8px" }}>
                            <h5 style={{ fontSize: "1.5em", textTransform: "uppercase", fontFamily: "pacifico", marginBottom: "2em" }}>Seller Details</h5>
                            <div className="row">
                                <span>Name</span>
                                <span>{sellerName}</span>
                            </div>
                            <div className="row">
                                <span>Email</span>
                                <span>{mail}</span>
                            </div>
                            <div className="row lastrow">
                                <span>Phone</span>
                                <span>{phone}</span>
                            </div>
                            <button className="button">Contact Seller</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SingleSellProperty;