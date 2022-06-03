import { createTheme } from "@mui/material";

const primaryTheme = createTheme({
    palette: {
        type: "light",

        primary: {
            main: "#e64343",
        },
        secondary: {
            main: "#F3CA40",
        },
    },
    typography: {
        h1: {
            color: "white",
            fontFamily: "var(--ff-accent)",
            WebkitTextStroke: "2px var(--red-700)",
            lineHeight: ".9em",
            letterSpacing: ".03em",
            fontSize: "4rem",
        },
        h2: {
            color: "var(--gray-700)",
            fontFamily: "Oxanium",
        },
        h3: {
            color: "white",
            fontFamily: "Oxanium",
        },
        h4: {
            // fontFamily: "Oxanium",
        },
        h5: {
            color: "var(--color-primary)",
            fontFamily: "Oxanium",
            fontWeight: "bold",
        },
        h6: {
            color: "var(--gray-700)",

            fontSize: "1.2rem",
        },
        p: {
            color: "var(--color-primary)",
        },
    },
    components: {
        //Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontSize: "1.2rem",
                    border: 0,
                    padding: ".6em 1.5em",
                    textDecoration: "none",

                    "&:hover": {},
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                // Name of the slot
                root: {
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    border: "1px solid var(--color-primary-dark)",

                    "&:hover": {
                        transition: "3000ms",
                        background:
                            "linear-gradient(-45deg, #FE6B8B 30%, #FF8E53 90%)",
                    },
                },
            },
        },
    },
});

export { primaryTheme };
