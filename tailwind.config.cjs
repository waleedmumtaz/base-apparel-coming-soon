const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        'pattern-desktop': 'url(/assets/bg-pattern-desktop.svg)',
        'white-to-whitish':
          'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        'pink-to-orangish':
          'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
      },
      colors: {
        cstm: {
          primary: {
            'desaturated-red': 'hsl(0, 36%, 70%)',
            'soft-red': 'hsl(0, 93%, 68%)',
          },
          neutral: {
            'dark-grayish-red': 'hsl(0, 6%, 24%)',
          },
        },
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
