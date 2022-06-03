import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from "../features/counter/counterSlice";
import { updateUser, selectUser } from "../features/user/userSlice";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    linkWithCredential,
    onAuthStateChanged,
    signInAnonymously,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, provider } from "../firebase";

const settings = ["Settings", "Logout"];

const Profile = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const count = useSelector(selectCount);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");

    const incrementValue = Number(incrementAmount) || 0;

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setCurrentUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
        return () => {};
    }, []);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        // console.log(user);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuClick = (e) => {
        switch (e.target.innerHTML) {
            case "Settings":
                console.log("Settings");
                setAnchorElUser(null);
                break;
            case "Logout":
                auth.signOut().then(dispatch(updateUser(null)));
                setAnchorElUser(null);
                break;
            default:
                return;
        }
    };

    const handleLogin = async () => {
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

        setAnchorElUser(null);
    };

    return (
        <>
            {user && (
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt={user ? user.name : ""}
                                src={
                                    user
                                        ? user.photoURL
                                        : "/static/images/avatar/2.jpg"
                                }
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleMenuClick}>
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            )}
        </>
        // <div>
        //     <div className={styles.row}>
        //         <button
        //             className={styles.button}
        //             aria-label="Decrement value"
        //             onClick={() => dispatch(decrement())}
        //         >
        //             -
        //         </button>
        //         <span className={styles.value}>{count}</span>
        //         <button
        //             className={styles.button}
        //             aria-label="Increment value"
        //             onClick={() => dispatch(increment())}
        //         >
        //             +
        //         </button>
        //     </div>
        //     <div className={styles.row}>
        //         <input
        //             className={styles.textbox}
        //             aria-label="Set increment amount"
        //             value={incrementAmount}
        //             onChange={(e) => setIncrementAmount(e.target.value)}
        //         />
        //         <button
        //             className={styles.button}
        //             onClick={() => dispatch(incrementByAmount(incrementValue))}
        //         >
        //             Add Amount
        //         </button>
        //         <button
        //             className={styles.asyncButton}
        //             onClick={() => dispatch(incrementAsync(incrementValue))}
        //         >
        //             Add Async
        //         </button>
        //         <button
        //             className={styles.button}
        //             onClick={() => dispatch(incrementIfOdd(incrementValue))}
        //         >
        //             Add If Odd
        //         </button>
        //     </div>
        // </div>
    );
};

export default Profile;
