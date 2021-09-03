const readline = require("readline");
 var fs = require('fs');

const appendToFileSync = (file, data, successMsg='File Updated') => {
  fs.appendFileSync(file, data, 'utf8', (err) => {
    if (err) throw err;
    console.log(successMsg)
  });
}

const pluginSetup = async () => {
  //STEPS NOT INCLUDED
  // - Installing of package

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Installing redwoodjs-stripe package")

  rl.question("What is your Stripe secret test key? ", stripeSK => {
    rl.question("What is your Stripe public test key? ", stripePK => {
      rl.question('What is your Stripe Webhook secret key?', stripeWSK => {
        const config = {
          sk: stripeSK,
          pk: stripePK,
          ws: stripeWSK
        }
        appendToFileSync('.env',
          `STRIPE_SK=${config.sk}\nSTRIPE_PK=${config.pk}\nSTRIPE_WEBHOOK_SK=${config.ws}\n`,
          '.env was successfully updated')

        // Create webhook listening file

        rl.close()
      })
    })
  })

  rl.on("close", () => {
    console.log('Config variables added to .env')
    process.exit(0);
  });

}
pluginSetup();





