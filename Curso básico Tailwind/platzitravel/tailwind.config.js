const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    theme: {
        colors: {
            'primary':"#CC2D4A",
            'secondary':"#8FA206",
            'tertiary':"#61AEC9",
            'white' : "#FFFFFF",
            'black' : "#000000",
            'gray' : {
                900: '#111827;',
                800: '#1F2937',
                700: '#374151',
                300: '#D1D5DB;',
            }
        },
        fontFamily: {
            Montserrat: ["Monserrat", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                'bali' : "url('../img/bali.jpg')",
                'chicago' : "url('../img/chicago.jpg')",
                'europe' : "url('../img/europe.jpg')",
                'iceland' : "url('../img/iceland.jpg')",
                'la' : "url('../img/LA.jpg')",
                'miami' : "url('../img/miami.jpg')",
                'newYork' : "url('../img/new_york.jpg')",
                'norWay' : "url('../img/norway.jpg')",
                'sanFrancisco' : "url('../img/sanFrancisco.jpg')",
                'sanFranciscoDesktop' : "url('../img/sanFranciscoDesktop.jpg')",
                'seattle' : "url('../img/seattle.jpg')",
                'switzerland' : "url('../img/switzerland.jpg')",
                'sydney' : "url('../img/sydney.jpg')",
                'yosemite' : "url('../img/yosemite.jpg')",
            }
        },
    },
    variants: {
        width: ['responsive', 'hover', 'focus', 'group-hover'],
        extend: {},
    },
    content: ['./public/index.html', './src/**/*.{html,js}'],
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
};