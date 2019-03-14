const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const atImport = require('postcss-import')

module.exports = {
  plugins: [
    require('postcss-cssnext'),
    atImport(),
    tailwindcss('./tailwind.js'),

    //Only add purgecss in production
    process.env.NODE_ENV === 'production' ? purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.vue',
      ],
    }) : '',
  ],
}
