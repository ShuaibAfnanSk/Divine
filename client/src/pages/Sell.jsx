import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

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
    const [show, setShow] = useState(false);
    const { user } = useContext(Context);
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-pi.vercel.app/server/sellProperties/sell/", {
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
                alert("the new property is now addded to seller properties..")
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleShow = () => {
        setShow(!show)
    }

    const handleUnShow = () => {
        setShow(!show)
    }

    return (
        <div className="sell">
            <div className="sellForm">
                <form onSubmit={handleSubmit}>

                    <Link to={'/'} className="link linkSvg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>Back to Home</Link>

                    <div className="sellTitle">
                        <div className="sellTxt">
                            <h3>SELL</h3>
                            <p>Enter details of property.</p>
                        </div>
                        <div className="help" onMouseEnter={handleShow} onMouseLeave={handleUnShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
                        </div>
                        {show ? (<div className="helpBx">
                            <h6>Enter all the required details of your property and we will add it right away in our database for selling, image should be the src of any image you want to post.</h6>
                        </div>) : null}

                    </div>

                    <div className="formStamp">
                        <div>
                            <label htmlFor="name">Property_name</label>
                            <input type="text" name="name" className="one" placeholder="" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="seller">Seller_name</label>
                            <input type="text" name="seller" id="" placeholder={user ? user.username : "john doe"} onChange={(e) => setSellerName(e.target.value)} />
                        </div>
                    </div>

                    <div className="formStamp">
                        <div>
                            <label htmlFor="yr_built">Yr_built</label>
                            <input type="text" name="yr_built" id="" placeholder="" className="two" onChange={(e) => setBuilt(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="yr_renovated">Yr_renovated</label>
                            <input type="text" name="yr_renovated" id="" placeholder="" className="two" onChange={(e) => setRenovate(e.target.value)} />
                        </div>
                    </div>

                    <div className="formStamp">
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

                    <div className="formStamp">
                        <div>
                            <label htmlFor="sqft_lot">Sqft_lot</label>
                            <input type="text" name="sqft_lot" id="" className="two" placeholder="" onChange={(e) => setLot(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="sqft_living">Sqft_living</label>
                            <input type="text" name="sqft_living" id="" className="two" placeholder="" onChange={(e) => setLiving(e.target.value)} />
                        </div>
                    </div>

                    <div className="formStamp">
                        <div>
                            <label htmlFor="sqft_above">Sqft_above</label>
                            <input type="text" name="sqft_above" id="" className="two" placeholder="" onChange={(e) => setAbove(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="sqft_basement">Sqft_basement</label>
                            <input type="text" name="sqft_basement" id="" className="two" placeholder="" onChange={(e) => setBase(e.target.value)} />
                        </div>
                    </div>

                    <div className="formStamp">
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

                    <div className="formStamp">
                        <div>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="" placeholder="" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" id="" placeholder="" onChange={(e) => setState(e.target.value)} />
                        </div>
                    </div>

                    <div className="formStamp">
                        <div>
                            <label htmlFor="mail">Email</label>
                            <input type="email" name="mail" id="" placeholder="" onChange={(e) => setMail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone" id="" placeholder="" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div className="formStamp">
                        <div>
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" id="" placeholder="" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="rent">Rent_price</label>
                            <input type="text" name="rent" id="" placeholder="" onChange={(e) => setRent(e.target.value)} />
                        </div>

                    </div>

                    <div className="single">
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" id="" placeholder="" onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <button className="button formButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Sell;