import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const VisitImg = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Visit = () => {

    const path = location.pathname.split('/')[2];
    const [fullName, setFullName] = useState();
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();

    useEffect(() => {
        axios.get("http://divine-phi.vercel.app/server/properties/" + path)
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
        axios.post("http://divine-phi.vercel.app/server/visits/send/", { fullName, email, phone, date, name, city, state })
            .then(result => {
                console.log(result)
                window.location.replace('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <VisitImg className="visit" img={image}>
            <Header />
            <div className="contactBx">
                <div className="contactLeft">
                    <h3>{name}</h3>
                    <p>Enter all the required details & schedule your visit as per your flexibility.</p>
                </div>
                <div className="contactRight">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="fullName" placeholder="john doe" onChange={(e) => setFullName(e.target.value)} />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="john.doe@email.com" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Phone</label>
                        <input type="text" name="phone" id="" placeholder="+49 176 123 456 79" onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor="email">Date</label>
                        <input type="date" name="date" onChange={(e) => setDate(e.target.value)} id="" />
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </VisitImg>
    );
}

export default Visit;