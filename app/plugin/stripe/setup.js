const readline = require("readline")
const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const fsx = require("fs-extra")

const appendToFileSync = (file, data, successMsg='File Updated') => {
  fs.appendFileSync(file, data, 'utf8', (err) => {
    if (err) throw err;
    console.log(successMsg)
  })
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = promisify((message, fn) => rl.question(message, result => fn(null, result)))

const pluginSetup = async () => {
  //STEPS NOT INCLUDED
  // - Installing of package

  console.log("Installing redwoodjs-stripe package")
  const stripeSecretKey = await question("What is your Stripe secret test key?")
  const stripePublicTestKey = await question("What is your Stripe public test key?")
  const stripeWebhookSecretKey = await question('What is your Stripe Webhook secret key?')

  const config = {
    sk: stripeSecretKey,
    pk: stripePublicTestKey,
    ws: stripeWebhookSecretKey
  }

  // add Stripe keys to .env
  appendToFileSync('.env',
    `STRIPE_SK=${config.sk}\nSTRIPE_PK=${config.pk}\nSTRIPE_WEBHOOK_SK=${config.ws}\n`,
    '.env was successfully updated')

  // Copy webhook fn into app
  const targetDir = path.resolve(__dirname, '../../api/src/functions/stripeWebhooks')
  const srcDir = path.resolve(__dirname, './functions/stripeWebhooks')
  await fsx.copy(srcDir, targetDir)

  rl.close()

  await new Promise(resolve => rl.on("close", () => {
    console.log('Config variables added to .env')
    resolve()
  }))
}

pluginSetup()





