const readline = require("readline");
 var fs = require('fs');

const appendToFile = (file, data) => {
  console.log(data)
  fs.appendFileSync(file, data, 'utf8', (err) => {
    if (err){
      console.log(err)
    return}
    else
      // throw err;
          {console.log('check env')}
  });
}

const pluginSetup = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Installing redwoodjs-stripe package")
  console.log("(Not really but it will)")
  console.log('We are going to ask you a few questions about your Stripe account')

  rl.question("What is your Stripe secret test key? ", function (stripeSK) {
    rl.question("What is your Stripe public test key? ", function (stripePK) {
      rl.question('What is your Stripe Webhook secret key?', (stripeWSK) => {
        const config = {
          sk: stripeSK,
          pk: stripePK,
          ws: stripeWSK
        }
        // console.log(config)
           appendToFile('.env',
          `\n
          STRIPE_SK=${config.sk}
          STRIPE_PK=${config.pk}
          STRIPE_WEBHOOK_SK=${config.ws}\n
        `)
        rl.close()
      })
    })
  })


  rl.on("close", function () {


    console.log('All Done!!!');
    process.exit(0);
  });

}
pluginSetup();





