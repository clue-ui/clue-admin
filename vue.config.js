// vue.config.js
const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/variables.scss";`
      }
    }
  }
}
