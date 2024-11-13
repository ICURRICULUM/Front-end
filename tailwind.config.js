/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 2px 8px 0px #00000040',
        icon: '0px 0px 8px 0px rgba(0, 125, 206, 1)',
      },
      borderRadius: {
        five: '5px',
      },
      backgroundImage: {
        'large-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #00AFEC 50.5%)',
        'small-gradient': 'linear-gradient(180deg, #42BBEE 0%, #005BAC 50.5%)',
      },
    },
  },
  plugins: [],
};
