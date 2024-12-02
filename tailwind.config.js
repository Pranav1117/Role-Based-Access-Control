/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#435865",
        buttonBackground: "#e0f7ff",
        activeButtonBg: "#c7eefb"
      },
      height: {
        // Layout mobile screen
        header_m: "8vh",
        screen_m: "80vh",
        footer_m: "12vh",

        // Layout Desktop screen
        header_desk: "9vh",
        screen_desk: "82vh",
        footer_desk: "9vh",

        // Height for table
        table_desk: "68vh",
      },
      minHeight: {
        // Layout mobile screen
        screen_m: "77vh",
      },
    },
  },
  plugins: [],
}