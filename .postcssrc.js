var tailwindcss = require('tailwindcss')

// module.exports = {
//   plugins: {
//     autoprefixer: {}
//   }
// }

module.exports = {
  plugins: [
    tailwindcss('src/clue-ui/assets/tailwind.js'),
    require('autoprefixer')
  ]
}
