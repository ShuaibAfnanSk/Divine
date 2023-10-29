import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import video from "../assets/loginAlt.mp4"
import { Context } from "../context/Context";

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const { dispatch, isFetching } = useContext(Context);

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        axios.post("https://divine-phi.vercel.app/server/sellers/login/", {
            username,
            password
        })
            .then(result => {
                const user = result.data.user;
                dispatch({ type: "LOGIN_SUCCESS", payload: user });
                window.location.replace('/');
            })
            .catch(err => {
                setError(err.response?.data?.error || 'An unexpected error occurred');
                dispatch({ type: "LOGIN_FAILURE" });
            });
    };



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
                        <label htmlFor="password">Password</label>
                        <input type="password" minLength={8} name="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {error && <span>{error}</span>}

                    <button className="button" type="submit" disabled={isFetching}>Login</button>
                    <span>Already have an account? <Link to={"/signup"} className="link">signup</Link></span>
                </form>
            </div>
        </div>
    );
}

export default Login;