/**
 * Tailwind CSS configuration file.
 *
 * This configuration adds custom fonts to the Tailwind CSS theme.
 * The 'title' font is set to 'Pacifico', a cursive font, for use in headings or titles.
 * The font stack falls back to a generic cursive font if 'Pacifico' is unavailable.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"], // Custom font for titles or headings
      },
    },
  },
  plugins: [],
};
