const terminalTab = require('terminal-tab')
const exec = require('child_process').exec;

const isRunning = (query) => {
  return new Promise((resolve, reject) => {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
        case 'win32' : cmd = `tasklist`; break;
        case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
        case 'linux' : cmd = `ps -A`; break;
        default: break;
    }
    exec(cmd, (err, stdout, stderr) => {
      console.log(stdout)
        resolve(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
  })
}


const webhookListener = async () => {
  console.log('\n===================== WEBHOOK LISTENER ======================================')

  await isRunning('stripe').then(status => {
    console.log('Stripe is ccurrently running', status)
  })


console.log('\n+++++++++++++++++++++++ WEBHOOK LISTENER END +++++++++++++++++++++++++++++++++++')
// terminalTab.open(`stripe status && stripe listen --forward-to localhost:8911/stripe-webhooks`)
  process.exit()
}

webhookListener()







