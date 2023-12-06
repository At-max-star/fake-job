/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "text-shadow-drop-br": "text-shadow-drop-br 0.6s ease   both"
      },
      keyframes: {
          "text-shadow-drop-br": {
              "0%": {
                  "text-shadow": "0 0 0 transparent"
              },
              to: {
                  "text-shadow": "6px 6px 18px rgba(0, 0, 0, .35)"
              }
          }
      }
    },
  },
  plugins: [],
}
