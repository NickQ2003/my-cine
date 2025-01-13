/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "F59E0B",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        fade: "fadeOut 3s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
}
