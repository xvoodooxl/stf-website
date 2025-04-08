/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
      './app/**/*.{js,jsx,ts,tsx,md,mdx}',
      './content/**/*.{md,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
              sans: ['var(--font-inter)'],
              mono: ['var(--font-roboto-mono)'],
            },
            backgroundImage: {
                'hero-image': "url('/public/bg-main.png')"
              }
          },
    },
    plugins: []
  }