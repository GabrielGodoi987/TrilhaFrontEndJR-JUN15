/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // estamos usando o esquema de cores gray do tailwind css
    theme: {
        extend: {
            colors: {
                primary: {
                    '800': '#1f2937',
                    '900': '#111827',
                    '950': '#030712'
                },
                second: {
                    '50': '#f9fafb',
                    '300': '#d1d5db',
                    '600': '#4b5563',
                }
            },
        }
    },
    plugins: [],
}

