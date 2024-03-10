import { createContext, useEffect, useState } from "react";
import HomeIndex from '../Components/Home/Index.jsx';
import FruitsIndex from '../Components/Fruits/Index.jsx';
import Login from '../Components/Auth/Login.jsx'
import Page404 from "../Components/Page404.jsx";


export const Router = createContext();

export const RouterProvider = ({ children }) => {


    const [route, setRoute] = useState(_ => {
        let hash = window.location.hash || '#home';
        return hash.split('/').shift()
    }
    );
    const [params, setParams] = useState(_ => {
        const hash = window.location.hash.split('/');
        hash.shift();
        return hash;
    });

    useEffect(_ => {

        const handleHashChange = _ => {

            const hash = window.location.hash.split('/');
            setRoute(hash.shift());
            setParams(hash)
        }


        window.addEventListener('hashchange', handleHashChange);
        return _ => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const routes = [
        { path: '#home', component: <HomeIndex /> },
        { path: '#fruits', component: <FruitsIndex /> },

        { path: '#login', component: <Login /> }

    ];

    const routeComponent = routes.find(r => r.path === route)?.component || <Page404 />;


    return (
        <Router.Provider value={params}>{routeComponent}</Router.Provider>
    )
}