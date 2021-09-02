module.exports = {
    purge: ["./src/*{.js}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            theme: {
                fontFamily: {
                    sans: ['"PT Sans"', "sans-serif", "calibri"],
                    serif: ["calibri"],
                },
            },
            colors: {
                reddit_dark: {
                    DEFAULT: "#6c757d",
                    brighter: "#1a1a1a",
                    brightest: "#272728",
                },
                reddit_head: {
                    DEFAULT: "#212529",
                },
                reddit_border: {
                    DEFAULT: "#212529",
                },
                reddit_text: {
                    DEFAULT: "rgb(215, 218, 220)",
                    darker: "#818384",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};