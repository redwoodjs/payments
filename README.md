# redwoodjs-stripe POC


A place to work on the Proof of Concept for an integration between Redwood and Stripe based off of a proposal. (WIP)

The official repo lives here : [redwoodjs-stripe](https://github.com/chrisvdm/redwoodjs-stripe)

Proposal doc : [redwoodjs-stripe Readme](https://docs.google.com/document/d/14IagrLRbuTT8H6-aOKL7aBbf2zGKVnMeazjmFZPf0-0/edit?usp=sharing) (Viewing only)


### Try it out
Some of the functionality can be used as more gets available this section will be updated. The commands used are placeholders for when/if API wishlist items can be fulfilled.

_Disclaimer: Do not try to break it. Literally held together with spit and wishful thinking ;)_

1. [Install Stripe CLI](https://stripe.com/docs/stripe-cli#install)
   
   `brew install stripe/stripe-cli/stripe`
2. "Install" package and setup Stripe keys

   `yarn rw-setup-plugin-stripe`
   
   What you should see:
   - a webhooks function being added  to the api functions folder
   - prompts for Stripe API keys 
   - collected keys being added to .env file
   
   Missing from this step
   - hooking webhook listening command into <code>yarn rw dev</code>
   
3. "Install" payment flow
   "checkout-mode" refers to the Stripe checkout session mode, this is used to determined the payment flow. It can be either "payment" (for once-off payments) or "subscription" (for subscriptions)

   `yarn rw-g-stripe-checkout <checkout-mode>`

   What you should see for all checkout-modes:
   - add createCheckoutSession and retrieveCheckoutSession functions to api functions folder
   - adds a StripeCart page ([localhost:8910/stripe-cart](http://localhost:8910/stripe-cart))
   - retrieves checkout session data on successful payment visible in console
   - only for subcription payment flow ("subscription" checkout-mode)
      - adds a createCustomerPortalSession function to api functionc folder
      - after checking out successfully, a button to go to the Customer Portal will appear on the StripeCart page
   
4. Run app
  
    `yarn rw-dev`
    
    What you should be able to do:
    - Make one time purchase via Stripe Checkout using dummy data in api side by clicking checkout button in StripeCartPage ([localhost:8910/stripe-cart](http://localhost:8910/stripe-cart))
    - Watch for webhooks in terminal
    - See success or cancel status in location bar after checkout
    - See the session object in console after successful payment

### Extra

`yarn rw-d-stripe-checkout <checkout-mode>`

Destroys all code in app relating to a specific payment-flow/ checkout-mode


## Get Involved
So you would like to be part of this project. At this point in time here's how:
- Read the proposal doc and offer feedback
- Go through the API Wishlist and see what's possible([issue #1](https://github.com/redwoodjs/payments/issues/1))
- Play with the POC (Try not to break it because it will. It's held together with spit and wishful-thinking) and give feedback ([issue #2](https://github.com/redwoodjs/payments/issues/2))

If there is a way that you think you could help that isn't mentioned above do not hesitate to contact me :)

## Thank you
Super huge thank you for making it this far and for showing an interest.
