if (process.env.NODE_ENV === 'production') {
    module.exports = {
      plugins: [
        require('autoprefixer'),
        require('cssnano'),
        // All postCSS plugins you want to add
      ],
    };
  }
  