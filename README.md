# redwoodjs-stripe POC


A place to work on the Proof of Concept for an integration between Redwood and Stripe based off of a proposal. (WIP)


### Try it out
Some of the functionality can be used as more gets available this section will be updated. The commands used are placeholders for when/if API wishlist items can be fulfilled.

Payment flow generator command has not been added yet but you should be able to make one time purchase. 

_Disclaimer: Code not to be taken seriously because none of it works properly ;). 99 Bugs_

1. Install Stripe CLI
2. "Install" package and setup Stripe keys

   `yarn rw-setup-plugin-stripe`
   
   What you should see:
   - a webhooks function being added  to the api functions folder
   - prompts for Stripe API keys 
   - collected keys being added to .env file
   
   Missing from this step
   - hooking webhook listening command into <code>yarn rw dev</code>
   
3. Run app
  
    `yarn rw-dev`
    
    What you should be able to do:
    - Make one time purchase via Stripe Checkout using dummy data in api side by clicking checkout button in dropdown ( `<CartDropDown/>` )
    - Watch for webhooks in terminal
    - See success or cancel status in location bar after checkout
    - Play around in 'functions/createCheckoutSession' 




## Get Involved
So you would like to be part of this project. At this point in time here's how:
- Read the proposal doc and offer feedback
- Go through the API Wishlist and see what's possible(issue #1)
- Play with the POC (Try not to break it because it will. It's held together with spit and wishful-thinking) and give feedback (issue #2)

If there is a way that you think you could help that isn't mentioned above do not hesitate to contact me :)

### Thank you
Super huge thank you for making it this far and for showing an interest.
