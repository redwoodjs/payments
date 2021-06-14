// const schemas = require('./src/graphql/index.js')
const schemas = require('./src/graphql/paymentIntent.sdl.js')
const services = require('./src/services/index.js')
const lib = require('./src/lib/lib.js')

module.exports = {
  schemas: { ...schemas },
  services: { ...services },
  ...lib
}
