import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "../features/user/userSlice";
import { auth, provider } from "../firebase";

const LoginButton = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                console.log(result.user);
                const user = {
                    id: result.user.uid,
                    name: result.user.displayName,
                    photoURL: result.user.photoURL,
                };
                console.log(user);
                dispatch(updateUser(user));
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <Button sx={{ color: "white" }} onClick={handleLogin}>
            Log In
        </Button>
    );
};

export default LoginButton;
