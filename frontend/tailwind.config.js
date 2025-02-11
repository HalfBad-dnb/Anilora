// tailwind.config.js
export default {
    darkMode: 'media', // Use system dark mode preference
    content: [
      './src/**/*.{html,js,jsx}', // Tell Tailwind where to look for classes
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'], // Extend with your custom font
        },
      },
    },
    plugins: [],
  };
  