module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            top: '0'
          },
          '100%': {
            opacity: '1',
            top: '50%',
            transform: 'translate(-50%,-50%)'
          }
        },
        'fade-out-up': {
          '0%': {
            opacity: '1',
            // top: '50%',
            // transform: 'translate(-50%,-50%)'
          },
          '100%': {
            opacity: '0',
            // top: '0'
          }
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 2s ease-out',
      }
    },
  },
  plugins: [],
}
