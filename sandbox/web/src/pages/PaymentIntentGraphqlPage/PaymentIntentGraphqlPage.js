import { useMutation } from '@redwoodjs/web'
import { useState} from 'react'

// import { createPaymentIntent } from 'rw-stripe'

const CREATE_PAYMENT_INTENT = gql`
  mutation createPaymentIntent($input: PaymentIntentInput!) {
    createPaymentIntent(input: $input) {
      id
    }
  }
`

const PaymentIntentGraphqlPage = () => {
  const [paymentIntentionId, setPaymentIntentionID] = useState('')
  const [create] = useMutation(CREATE_PAYMENT_INTENT, {
    onCompleted: (stuff) => {
      console.log(stuff)
    }
  })

  const handleOptionAButtonClick = () => {
    create({
      variables: {
        input: {
          amount: 5000,
          currency: 'usd',
          payment_method_types: ['card'],
          receipt_email: 'apple@oranges.com',
        },
      }
    })
  }
  return (
    <>
      <h2>PaymentIntentGraphqlPage</h2>
      <p>Creating a payment intent using GraphQL API</p>
      <button onClick={() => handleOptionAButtonClick()}>Create Payment Intention</button>
    </>
  )
}

export default PaymentIntentGraphqlPage
