/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'integer-shadow':'0px 20px 60.57143px 0px #E5E9F6',
      },
      backgroundImage: {
        'purple-pink': 'linear-gradient(91deg, #5F21E9 60.06%, #FA00FF 103.73%)',
      },
    },
    fontFamily:{
      'gilrow':'gilroy',
      'konexy':'konexy',
      'inter':'inter'
    }
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

