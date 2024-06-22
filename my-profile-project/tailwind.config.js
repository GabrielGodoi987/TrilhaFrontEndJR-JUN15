/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // estamos usando o esquema de cores gray do tailwind css
    theme: {
        extend: {
            colors: {
                primary: {
                    '800': '#000000',
                    '900': '#1f2937'
                },
                second: {
                    '50': '#f9fafb',
                    '100': '#f2f2f2',
                    '500': '#6b7280'
                },
                accent: {
                    '100': '#e53939',
                }
            },
        }
    },
    plugins: [],
}

