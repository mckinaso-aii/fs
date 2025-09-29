/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        finland: {
          blue: '#0066CC',
          'blue-light': '#4A90E2',
          'blue-dark': '#003D7A',
          'blue-pale': '#E3F2FD',
          'blue-gradient': '#87CEEB',
          white: '#FFFFFF',
          'white-off': '#F8FAFC',
          'white-cream': '#FEFEFE',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        }
      },
      backgroundImage: {
        'finland-primary': 'linear-gradient(135deg, #0066CC 0%, #4A90E2 100%)',
        'finland-secondary': 'linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%)',
        'finland-duotone': 'linear-gradient(135deg, #0066CC 0%, #FFFFFF 50%, #E3F2FD 100%)',
        'finland-modern': 'linear-gradient(90deg, #0066CC 0%, #4A90E2 50%, #87CEEB 100%)',
        'finland-dark': 'linear-gradient(135deg, #003D7A 0%, #0066CC 50%, #4A90E2 100%)',
        'finland-light': 'linear-gradient(135deg, #FFFFFF 0%, #E3F2FD 50%, #87CEEB 100%)',
        'finland-glass': 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'finland-school': 'linear-gradient(135deg, #0066CC 0%, #4A90E2 30%, #87CEEB 70%, #FFFFFF 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        industrial: ['Roboto', 'system-ui', 'sans-serif'],
        elegant: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'finland': '0 4px 6px -1px rgba(0, 102, 204, 0.2), 0 2px 4px -1px rgba(74, 144, 226, 0.1)',
        'finland-glow': '0 0 20px rgba(0, 102, 204, 0.3), 0 0 40px rgba(74, 144, 226, 0.2)',
        'finland-modern': '0 10px 25px -3px rgba(0, 102, 204, 0.2), 0 4px 6px -2px rgba(74, 144, 226, 0.1)',
        'finland-glass': '0 8px 32px 0 rgba(0, 102, 204, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'finland': '10px',
      }
    },
  },
  plugins: [],
}
