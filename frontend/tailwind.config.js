/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        C_blue: "#003766",
        },
      
      animation: {
        'moving-blob': 'movingBlob 10s ease-in-out infinite',
        'fade-up': 'FadeUp 3s ease',
        'fade-left': 'fadeLeft 1s ease-out',
        'fade-right': 'fadeRight 1s ease-out',
      },
      keyframes: {
        movingBlob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        FadeUp: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0', // Start with 0 opacity (completely invisible)
          },
          '100%': {
            transform: 'translateY(0)', // End position upwards
            opacity: '1', // Fully visible
          },
        },
        fadeLeft: {
          '0%': {
            transform: 'translateX(-100px)', // Start from left
            opacity: '0', // Completely invisible
          },
          '100%': {
            transform: 'translateX(0)', // Move to original position
            opacity: '1', // Fully visible
          },
        },
        fadeRight: {
          '0%': {
            transform: 'translateX(100px)', // Start from right
            opacity: '0', // Completely invisible
          },
          '100%': {
            transform: 'translateX(0)', // Move to original position
            opacity: '1', // Fully visible
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.underline-animation': {
          position: 'relative',
        },
        '.underline-animation::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          backgroundColor: '#3b82f6', // Tailwind's blue-500
          bottom: '0',
          left: '0',
          transform: 'scaleX(0)',
          transformOrigin: 'bottom right',
          transition: 'transform 0.3s ease-out',
        },
        '.underline-animation:hover::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
        },
      });
    },
  ],
}