import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const VisitImg = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Visit = () => {

    const path = location.pathname.split('/')[2];
    const { user } = useContext(Context);
    const [fullName, setFullName] = useState();
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("https://divine-pi.vercel.app/server/properties/" + path)
            .then((result) => {
                setName(result.data.name)
                setCity(result.data.city)
                setState(result.data.state)
                setImage(result.data.image)
            })
            .catch(err => console.log(err))
    }, [path])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-pi.vercel.app/server/visits/send/", { fullName, email, phone, date, name, city, state })
            .then(result => {
                console.log(result)
                alert("your visit request has been received")
                window.location.replace('/')
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
        <VisitImg className="contact" img={image}>
            <div className="sellerForm contactForm">
                <form onSubmit={handleSubmit}>
                    <Link to={'/'} className="link linkSvg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>Back to Home</Link>
                    <div className="sellTitle">
                        <div className="sellTxt">
                            <h3>Visit</h3>
                            <p>Plan your visit.</p>
                        </div>
                        <div className="help" onMouseEnter={handleShow} onMouseLeave={handleUnShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
                        </div>
                        {show ? (<div className="helpBx">
                            <h6>Schedule your visit as per your convinience we will reach out to you with details through mail.</h6>
                        </div>) : null}

                    </div>
                    <div className="single">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="fullName" placeholder={user ? user.username : "john doe"} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="single">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="single">
                        <label htmlFor="email">Phone</label>
                        <input type="text" name="phone" id="" placeholder="+49 176 123 456 79" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Date</label>
                        <input type="date" name="date" onChange={(e) => setDate(e.target.value)} id="" />
                    </div>
                    <button className="button formButton" type="submit">Submit</button>
                </form>
            </div>

        </VisitImg>
    );
}

export default Visit;