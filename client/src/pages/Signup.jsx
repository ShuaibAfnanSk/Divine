import { useState } from "react";
import video from "../assets/login.mp4";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [passwordAlt, setPasswordAlt] = useState();
    const [error, setError] = useState();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://divine-phi.vercel.app/auth/signup", { username, email, password })
            .then(result => {
                console.log(result)
                window.location.replace("/login")
            })
            .catch(err => {
                console.log(err)
                setError(err.response?.data?.error || 'An unexpected error occurred');
            })
    }

    return (
        <div className="wrapper videoWrapper">
            <div className="video">
                <video src={video} loop muted autoPlay />
            </div>
            <div className="formWrapper">
                <form className="authForm" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="john doe" onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="johndoe@email.com" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" minLength={8} name="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="passwordAlt">Confirm Password</label>
                        <input type="password" minLength={8} name="passwordAlt" onChange={(e) => setPasswordAlt(e.target.value)} required />
                    </div>

                    {password !== passwordAlt ? (<span>passwords do not match</span>) : (null)}
                    {error && <span>{error}</span>}

                    <button className="button" type="submit">signup</button>
                    <span>Already have an account? <Link to={"/login"} className="link">login</Link></span>
                </form>
            </div>
        </div>
    );
}

export default Signup;