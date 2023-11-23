import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [show, setShow] = useState(false);
    axios.defaults.withCredentials = true;

    const { user } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-pi.vercel.app/server/messages/send/", { name, email, message })
            .then(result => {
                console.log(result)
                alert("Thanks for your valuable feedback, your message has been delivered..")
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
        <div className="contact">
            <div className="sellForm contactForm">
                <form onSubmit={handleSubmit}>
                    <Link to={'/'} className="link linkSvg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>Back to Home</Link>
                    <div className="sellTitle contactTitle">
                        <div className="sellTxt">
                            <h3>CONTACT</h3>
                            <p>Enter your query.</p>
                        </div>
                        <div className="help" onMouseEnter={handleShow} onMouseLeave={handleUnShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
                        </div>
                        {show ? (<div className="helpBx">
                            <h6>Have a Query?, Contact us through this form and our support staff will help you with it.</h6>
                        </div>) : null}

                    </div>
                    <div className="single singleAlt">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" placeholder={user ? user.username : "john doe"} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="single singleAlt">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="single">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;