import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js,ts}'
import { db } from 'src/lib/db'
import services from 'src/services/**/*.{js,ts}'

// const rwStripe = require('rw-stripe')

// ORIGINAL
// export const handler = createGraphQLHandler({
//   schema: makeMergedSchema({
//     schemas,
//     services: makeServices({ services })
//   }),
//
//   onException: () => {
//     // Disconnect from your database with an unhandled exception.
//     db.$disconnect()
//   }
// })

// API DIY
// ======================
// ...
const rwPayments = require('rw-payments')
const allServices = { ...services, plugin: rwPayments.services }
const allSchemas = { ...schemas, payments_sdl: rwPayments.schemas }

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas: allSchemas,
    services: makeServices({ services: allServices }),
  }),

  onException: () => {
    db.$disconnect()
  },
})

// API CLI
// ========================
// stripe api keys are saved to env variables on setup
// ...
// import { pluginsSchemas, pluginsServices } from '@redwoodjs/plugins'
//
//  export const handler = createGraphQLHandler({
//   schema: makeMergedSchema({
//     schemas: {...schemas, ...pluginsSchemas},
//     services: makeServices({{ ...services, ...pluginsServices }})
//   }),
//
//   onException: () => {
//     db.$disconnect()
//   }
// })

// CLI setup command
// yarn rw setup plugin rw-stripe
//    OR
// yarn rw setup rw-stripe
//
//
// npm redwoodjs-payments
