

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan ini memindai file JSX/TSX Anda
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dark-bg-deep': '#0d1222',
        'dark-bg-medium': '#1a202c',
        'dark-bg-light': '#1e293b',
        'text-light': '#e2e8f0',
        'text-medium': '#cbd5e1',
        'text-dark': '#64748b',
        'blue-accent-dark': '#0056b3',
        'blue-accent-medium': '#007bff',
        'blue-accent-light': '#4a75ff',
        'cyan-accent': '#00c6ff',
        'gray-border': 'rgba(49, 56, 75, 0.7)',
      },
      boxShadow: {
        'deep': '0 15px 35px rgba(0, 0, 0, 0.5)',
        'hover': '0 20px 45px rgba(0, 0, 0, 0.7)',
        'btn': '0 5px 15px rgba(0, 0, 0, 0.3)',
        'btn-hover': '0 10px 25px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}