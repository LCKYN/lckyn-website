/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Existing colors
                primary: '#ffa31a',
                gray: '#808080',
                darkGray: '#292929',
                darker: '#1b1b1b',
                white: '#ffffff',
                // Add a new darker color
                darkest: '#0f0f0f',
            },
        },
    },
    plugins: [],
};
