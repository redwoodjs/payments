import { logger } from 'src/lib/logger'
import handleStripeWebhooks from '../../../../plugin/stripe/lib'
//  import handleStripeWebhooks from 'plugins/stripe/lib'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event, context) => {
  logger.info('Invoked stripeWebhooks function')
  // Will look something like this
  // const results = await handleStripeWebhooks(event, {
  //   'checkout.session.completed': (e) => logger.info(e.type),
  //   'checkout.session.async_payment_succeeded': (e) => logger.info(e.type),
  //   'checkout.session.async_payment_failed': (e) => logger.info(e.type)
  // })

  return {
    statusCode: 200,
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'bleh',
    }),
  }
}
