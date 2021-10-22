const { execAsync } = require('./cmd/lib')

const testSetup = async () => {
  console.log('Hi there! Lets get scripting')
  // TODO: Login to Stripe using API key
  execAsync('stripe login -i', (err, sout, serr) => {
    console.log(sout)
  })
  // stripe login -i

  // TODO: Get webhook secret
  // stripe listen --print-secret
  // const stripeWebhookSecretKey = await question(
  //   'What is your Stripe Webhook secret key?'
  // )
}

testSetup()
