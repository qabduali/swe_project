import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

function Login () {
    const adminUser = {
        email: "admin@admin.com",
        password: "12345678"
    }

    const [user, setUser] = useState({email:""});
    const [error, setError] = useState("");

    const signin = details => {
        console.log(details);
    }
    const signout = () => {
        console.log("sign out");
    }
    return (
        <div className = "Login">
            {(user.email != "") ? (
                <div className="welcome">
                    <h3>Welcome, <span>{user.email}</span></h3> 
                    <button>Sign Out</button>   
                </div>
            ) : (
                <LoginForm />
            )}
        </div>
    );
}

export default Login;
