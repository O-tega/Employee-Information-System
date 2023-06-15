export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM sans"],
      },
      fontSize: {
        normal: "14px",
        big: "32px",
        average: "24px",
      },
      colors: {
        primary: "#F05423",
        primaryDark: "#a32802",
      },
    },
  },
  plugins: [],
};
