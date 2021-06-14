## API CLI
Uses CLI to setup

yarn rw setup plugin rw-stripe

requires a ./plugin command module that does the following:
- read config file in package
- gets env variables and prompts
- gets schemas, services, etc if needed and saves to a plugins obj
- writes to files if needed

## API DIY
User has to import services and schemas themselves in './api/src/functions/grphql.js'. However for the most part that would be the only place an import is needed      
