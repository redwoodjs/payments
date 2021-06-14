
import { Link, routes } from '@redwoodjs/router'


const HomePage = () => {
  // const handleOptionBButtonClick = () => {
  //   createPaymentIntent({
  //     input: {
  //       amount: 5000,
  //       currency: 'usd',
  //       payment_method_types: ['card'],
  //       receipt_email: 'apple@oranges.com'
  //     },
  //     return: ['id', 'client_secret']
  //   })
  // }

  return (
    <>
      <nav>
        <ul>
          <li><Link to={routes.customPaymentFlow()}>Custom Payment Flow</Link></li>
          <li><Link to={routes.prebuiltCheckout()}>Prebuilt Checkout Page</Link></li>
          <li><Link to={routes.paymentIntentGraphql()}>Payment Intent with GraphQL</Link></li>
        </ul>
      </nav>
      {/* <button onClick={() => handleOptionBButtonClick()}>OptionB</button> */}
    </>
  )
}

export default HomePage
