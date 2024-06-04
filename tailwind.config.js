// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
