import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SERVER_URL } from "../Constants/main";
import { Router } from "./Router";
import { Auth } from "./Auth";

export const Home = createContext();

export const HomeProvider = ({ children }) => {

    const [home, setHome] = useState(null);
    const { setErrorPageType } = useContext(Router);
    const { setUser } = useContext(Auth)

    useEffect(_ => {

        axios.get(`${SERVER_URL}/stats`, { withCredentials: true })
            .then(res => {
                setHome(res.data)
            })
            .catch(err => {
                if (err?.response?.status === 401) {
                    if (err.response.data.type === 'login') {
                        window.localStorage.removeItem('user');
                        window.localStorage.removeItem('role');
                        window.localStorage.removeItem('id');
                        setUser(null);
                        window.location.href = '#login';
                    } else {
                        setErrorPageType(401);

                    }
                } else {
                    setErrorPageType(503)
                }
            });
    }, [setHome, setErrorPageType, setUser]);

    return (

        <Home.Provider value={{
            home, setHome
        }}>
            {children}
        </Home.Provider>
    )
}