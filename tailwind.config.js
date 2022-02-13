module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts}','./src/**/**/*.{vue,js,ts}'],
    content: ['./src/**/*.{vue,js,ts}', './src/**/**/*.{vue,js,ts}'],
    darkMode: false,
    theme: {
      container: {
        center: true,
      },
      extend: {
        animation: {
          'spin-slow': 'spin 10s linear infinite',
          'ping-slow': 'ping 2s linear infinite',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  