import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";

const Sell = () => {

    const [name, setName] = useState();
    const [sellerName, setSellerName] = useState();
    const [phone, setPhone] = useState();
    const [rent, setRent] = useState();
    const [mail, setMail] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [city, setCity] = useState();
    const [statezip, setState] = useState();
    const [floors, setFloors] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [condition, setCondition] = useState();
    const [view, setView] = useState();
    const [waterfront, setWaterfront] = useState();
    const [sqft_living, setLiving] = useState();
    const [sqft_lot, setLot] = useState();
    const [sqft_basement, setBase] = useState();
    const [sqft_above, setAbove] = useState();
    const [yr_built, setBuilt] = useState();
    const [yr_renovated, setRenovate] = useState();
    // const [random, setRandom] = useState(null);
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-phi.vercel.app/server/sellProperties/sell/", {
            name,
            price,
            image,
            city,
            floors,
            statezip,
            bedrooms,
            bathrooms,
            condition,
            view,
            waterfront,
            sqft_above,
            sqft_basement,
            sqft_living,
            sqft_lot,
            yr_built,
            yr_renovated,
            sellerName,
            phone,
            mail,
            rent
        })
            .then(result => {
                console.log(result)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    // const handlePredict = () => {
    //     const max = 75000;
    //     const min = 45000;
    //     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    //     const isAllValuesPresent = [
    //         name,
    //         city,
    //         floors,
    //         statezip,
    //         bedrooms,
    //         bathrooms,
    //         condition,
    //         view,
    //         waterfront,
    //         sqft_above,
    //         sqft_basement,
    //         sqft_living,
    //         sqft_lot,
    //         yr_built,
    //         yr_renovated
    //     ].every(value => value !== undefined && value !== null);

    //     if (isAllValuesPresent) {
    //         setRandom(randomNum);
    //     } else {
    //         setRandom(null);
    //     }
    // };


    return (
        <div className="sell">
            <Header />
            <div className="contactBx">
                <div className="contactLeft">
                    <h3>Sell</h3>
                    <p>Enter all the required details of your property and we will add it right away in our database for selling.</p>
                    {/* {random ? (<h4>Predicted Price : {random}</h4>) : (<button className="button" onClick={handlePredict}>Predict</button>)} */}
                </div>
                <div className="sellRight">
                    <form onSubmit={handleSubmit}>

                        <div className="formTwo">
                            <div>
                                <label htmlFor="name">Property_name</label>
                                <input type="text" name="name" className="one" placeholder="" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="seller">Seller_name</label>
                                <input type="text" name="seller" id="" placeholder="" onChange={(e) => setSellerName(e.target.value)} />
                            </div>
                        </div>



                        <div className="formTwo">
                            <div>
                                <label htmlFor="yr_built">Yr_built</label>
                                <input type="text" name="yr_built" id="" placeholder="" className="two" onChange={(e) => setBuilt(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="yr_renovated">Yr_renovated</label>
                                <input type="text" name="yr_renovated" id="" placeholder="" className="two" onChange={(e) => setRenovate(e.target.value)} />
                            </div>
                        </div>

                        <div className="formThree">
                            <div>
                                <label htmlFor="floors">Floors</label>
                                <input type="text" maxLength={1} name="floors" className="three" id="" placeholder="" onChange={(e) => setFloors(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="bedrooms">Bedrooms</label>
                                <input type="text" maxLength={1} name="bedrooms" className="three" id="" placeholder="" onChange={(e) => setBedrooms(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="bathrooms">Bathrooms</label>
                                <input type="text" maxLength={1} name="bathrooms" className="three" id="" placeholder="" onChange={(e) => setBathrooms(e.target.value)} />
                            </div>

                        </div>

                        <div className="formTwo">
                            <div>
                                <label htmlFor="sqft_lot">Sqft_lot</label>
                                <input type="text" name="sqft_lot" id="" className="two" placeholder="" onChange={(e) => setLot(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="sqft_living">Sqft_living</label>
                                <input type="text" name="sqft_living" id="" className="two" placeholder="" onChange={(e) => setLiving(e.target.value)} />
                            </div>
                        </div>

                        <div className="formTwo">
                            <div>
                                <label htmlFor="sqft_above">Sqft_above</label>
                                <input type="text" name="sqft_above" id="" className="two" placeholder="" onChange={(e) => setAbove(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="sqft_basement">Sqft_basement</label>
                                <input type="text" name="sqft_basement" id="" className="two" placeholder="" onChange={(e) => setBase(e.target.value)} />
                            </div>
                        </div>

                        <div className="formThree">
                            <div>
                                <label htmlFor="view">View</label>
                                <input type="text" maxLength={1} name="view" className="three" id="" placeholder="" onChange={(e) => setView(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="condition">Condition</label>
                                <input type="text" maxLength={1} name="condition" className="three" id="" placeholder="" onChange={(e) => setCondition(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="waterfront">Waterfront</label>
                                <input type="text" maxLength={1} name="waterfront" className="three" id="" placeholder="" onChange={(e) => setWaterfront(e.target.value)} />
                            </div>
                        </div>

                        <div className="formTwo">
                            <div>
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" id="" placeholder="" onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="state">State</label>
                                <input type="text" name="state" id="" placeholder="" onChange={(e) => setState(e.target.value)} />
                            </div>
                        </div>

                        <div className="formTwo">
                            <div>
                                <label htmlFor="mail">Email</label>
                                <input type="email" name="mail" id="" placeholder="" onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name="phone" id="" placeholder="" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>

                        <div className="formTwo">
                            <div>
                                <label htmlFor="price">Price</label>
                                <input type="text" name="price" id="" placeholder="" onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="rent">Rent_price</label>
                                <input type="text" name="rent" id="" placeholder="" onChange={(e) => setRent(e.target.value)} />
                            </div>

                        </div>

                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" id="" placeholder="" onChange={(e) => setImage(e.target.value)} />

                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sell;