const readline = require("readline");

const pluginSetup = () => {
  console.log("Installing redwoodjs-stripe package")
  console.log("(Not really but it will)")
  console.log('We are going to ask you a few questions about your Stripe account')
  const config = {}
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("What is your Stripe secret test key? ", function (stripeSK) {
    rl.question("What is your Stripe public test key? ", function (stripePK) {
      rl.question('What is your Stripe Webhook secret key?', (stripeWSK) => {
        config['STRIPE_SK'] = stripeSK
        config['STRIPE_PK'] = stripePK
        config['STRIPE_WEBHOOK_SK'] = stripeWSK
        rl.close()
    })
      })

  })

  rl.on("close", function() {
    console.log('All Done!!!');
    process.exit(0);
  });

}
pluginSetup();

