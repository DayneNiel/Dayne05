import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/js/**/*.jsx',
        // './resources/js/**/*.ts',
        // './resources/js/**/*.tsx',
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
    ],
    //  content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', 'sans-serif'],
            }, 
            animation: {
                formE: 'formE 3s ease-in-out forwards',
              },
            keyframes: {
                formE: {
                  '0%': { clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', transform: 'rotate(0deg)' },
                  '25%': { clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', transform: 'rotate(90deg)' },
                  '50%': { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', transform: 'rotate(180deg)' },
                  '75%': { clipPath: 'polygon(0% 25%, 75% 25%, 75% 75%, 0% 75%)', transform: 'rotate(270deg)' },
                  '100%': { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', transform: 'rotate(360deg)' },
                },
            },
        },
    },

    plugins: [require("daisyui")],
    daisyui:{
        themes:["light"],
    }
};
