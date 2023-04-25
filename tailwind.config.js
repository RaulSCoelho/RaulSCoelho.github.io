/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      app: 'linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)'
    },
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          card: 'var(--color-card)',
          button: 'var(--color-button)',
          'button-hover': 'var(--color-button-hover)'
        }
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
