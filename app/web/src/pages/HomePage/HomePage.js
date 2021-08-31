import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="redwoodjs-stripe POC"
        description="Proof of Concept for the Redwood + Stripe integration package"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>redwoodjs-stripe POC</h1>
      <p>This is a proof of concept for the redwoodjs-stripe package based off of a proposal doc</p>
      <ul>
        <li><Link to={routes.oneTimeCheckout()}>One-time Checkout Payment Flow</Link></li>
        <li><Link to={routes.subscriptionCheckout()}>Subscription Checkout Payment Flow</Link>
</li>
      </ul>

    </>
  )
}

export default HomePage
