import axios from "axios";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    axios.defaults.withCredentials = true;

    const {user} = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-phi.vercel.app/server/messages/send/", {name,email,message})
            .then(result => {
                console.log(result)
                alert("Thanks for your valuable feedback, your message has been delivered..")
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="contact">
            <Header />
            <div className="contactBx">
                <div className="contactLeft">
                    <h3>Contact</h3>
                    <p>Have a Query?, Contact us through this form and our support staff will help you with it.</p>
                    <h5>divine.alchemy@gmail.com</h5>
                    <h5>+91-7075818209</h5>
                </div>
                <div className="contactRight">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" placeholder={user ? user.username : "john doe"} onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="8" placeholder="enter your message" onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;