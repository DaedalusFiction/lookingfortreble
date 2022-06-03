import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Landing from "./routes/Landing";
import About from "./routes/About";
import Register from "./routes/Register";
import NoPage from "./routes/NoPage";

import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInAnonymously,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, selectUser } from "./features/user/userSlice";
import Discover from "./routes/Discover";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                const newUser = {
                    id: user.uid,
                    name: user.displayName,
                    photoURL: user.photoURL,
                };
                dispatch(updateUser(newUser));
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
        return () => {};
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="discover" element={<Discover />} />
                    <Route path="about" element={<About />} />
                    <Route path="register" element={<Register />} />

                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
