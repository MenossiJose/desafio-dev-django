/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['ADLaM Display'], // Adicione sua fonte personalizada aqui
      },
    },
  },
  plugins: [],
};
