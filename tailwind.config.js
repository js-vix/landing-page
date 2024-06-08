/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "geist-mono-bold": ['"GeistMono-Bold"', "monospace"],
      "geist-mono-vf": ['"GeistMono-VF"', "monospace"],
      "nb-architekt-light": ['"NBArchitektStd-Light"', "monospace"],
      "nb-architekt-regular": ['"NBArchitektStd-Regular"', "monospace"],
      "nb-architekt-bold": ['"NBArchitektStd-Bold"', "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
