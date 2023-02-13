module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'mid-light-blue': '#2738F5 ',
        'mid-blue': '#1E239A',
        'dark-purple': '#140B34',
        'light-purple': '#2738F5',
        'dark-text': '#232323',
        'fill-light': '#E2F2FE'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4060ab',
          secondary: '#646FD4',
          accent: '#FFD24C',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ]
};
