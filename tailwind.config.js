module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins', "sans-serif"],
      "montserrat": ["Montserrat, sans-serif"]
    },
    transitionProperty: {
      "animationLineBefore": ["all 0.3s ease-in-out 0s"]
    },
    borderRadius: {
      "middle": ["50%"],
      "skill-card": ["3px"],
    },
    height: {
      'line-title': '2px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
