import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#fea928",
                secondary: "#ed8900",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                },
            },
        },
    },

    plugins: [forms],
};
