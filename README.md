# Payments
A place to play around with a payment platform integration. 

This is a work in progress. Code not to be taken seriously

## Setup

/rw-payments:
```
$  yarn link
```

/sandbox
```
$  yarn link rw-payments
```

/sandbox/.env
Add following variables:
```
STRIPE_SK_TEST=<STRIPE_SECRET_KEY>
STRIPE_PK_TEST=<STRIPE_PUBLIC_KEY>
```
