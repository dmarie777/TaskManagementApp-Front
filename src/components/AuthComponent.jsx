import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const token = cookies.get("TOKEN");

export default function AuthComponent() {
    const [message, setMessage] = useState("")

    useEffect(() => {
        const configuration = {
            method: "get",
            url: "http://localhost:8000/auth-endpoint",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios(configuration)
        .then((result) => {
            setMessage(result.data.message)
        })
        .catch((error) => {
            error = new Error();
        });
    }, [])

    const logout = () => {
        cookies.remove("TOKEN", { path: "/"})
        window.location.href = "/"
    }

    return (
        <div>
            <h1 className="text-center">Auth Component</h1>
            <h3 className="text-center text-danger" >{message}</h3>
            <button type="submit" onClick={() => logout()}>
                Logout
            </button>
        </div>
    )
}