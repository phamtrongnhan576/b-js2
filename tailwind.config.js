/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "flowbite/plugin"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                yellow: "#FFEB00",
            },
        },
    },
    plugins: [],
};
