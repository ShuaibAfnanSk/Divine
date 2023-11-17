import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [filterCat, setFilterCat] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleFilter = (c) => {
        setFilterCat(c)
    }

    const filteredImages = filterCat ? properties.filter((p) => p.bedrooms === filterCat) : properties;

    const handleShowAll = () => {
        setFilterCat(null)
    }
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("https://divine-pi.vercel.app/server/properties/")
            .then(result => {
                setProperties(result.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ? (
                <div className="loader">
                    <div class="typewriter">
                        <div class="slide"><i></i></div>
                        <div class="paper"></div>
                        <div class="keyboard"></div>
                    </div>
                </div>
            ) : (
                <section className="wrapper">
                    <div className="propertyWrapper border">
                        <Header />
                        <div className="title propertyTitle">
                            <h6>Our Properties</h6>
                            <h3>Find Your Place</h3>
                            <p>Here are all the properties listed in our website, Select the your new place.</p>
                        </div>
                    </div >
                    <div className="propertyBx border">
                        <div className="wpBtns">
                            <button className={`wpBtn ${filterCat === null ? 'selected' : ''}`} onClick={handleShowAll}>All</button>
                            {Array.from(new Set(properties.map((p) => p.bedrooms))).map((c) => (
                                <button className={`wpBtn ${filterCat === c ? 'selected' : ''}`} onClick={() => handleFilter(c)}>{c} Rooms</button>
                            ))}
                        </div>
                        <div className="properties">
                            {filteredImages.map((p) => (
                                <div className="property">
                                    <img src={p.image} alt="" />
                                    <div className="propertyDiv">
                                        <div className="propertyTxt">
                                            <h5>${p.price}</h5>
                                            <Link to={`/property/${p.name}`} className="link"><h6>{p.name}</h6></Link>
                                        </div>
                                        <div className="propertyTxt">
                                            <div className="stamp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path></svg>
                                                <span>{p.city}, {p.statezip}</span>
                                            </div>
                                            <div className="propertyStamps">
                                                <div className="stamp">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path></svg>
                                                    <span>{p.floors} Floors</span>
                                                </div>
                                                <div className="stamp">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24,24,0,0,1,24,24v48Z"></path></svg>
                                                    <span>{p.bedrooms} Rooms</span>
                                                </div>
                                                <div className="stamp">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M240,208H224V115.55a16,16,0,0,0-5.17-11.78l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,115.55l.11-.1L128,40l79.9,75.43.11.1V208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48ZM144,208H112V160h32Z"></path></svg>
                                                    <span>{p.sqft_living}sqft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Footer />

                </section >
            )}
        </>

    );
}

export default Properties;