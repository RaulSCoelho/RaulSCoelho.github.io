/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacity }) => {
    if (opacity === undefined) return `rgb(var(${variableName}))`
    return `rgba(var(${variableName}), ${opacity})`
  }
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      app: 'linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)'
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted')
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          card: withOpacity('--color-card'),
          button: withOpacity('--color-button'),
          'button-hover': withOpacity('--color-button-hover')
        }
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill')
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
