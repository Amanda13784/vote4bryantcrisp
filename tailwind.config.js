/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Option 1: Professional & Trustworthy
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        
        // Option 2: Modern & Clean
        'modern': ['Poppins', 'system-ui', 'sans-serif'],
        
        // Option 3: Traditional & Authoritative
        'traditional': ['Playfair Display', 'Georgia', 'serif'],
        
        // Option 4: Friendly & Approachable
        'friendly': ['Open Sans', 'system-ui', 'sans-serif'],
        
        // Option 5: Bold & Confident
        'bold': ['Montserrat', 'system-ui', 'sans-serif'],
        
        // Option 6: Classic Political
        'political': ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} 