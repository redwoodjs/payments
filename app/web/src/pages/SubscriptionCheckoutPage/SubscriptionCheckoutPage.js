import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SubscriptionCheckoutPage = () => {
  return (
    <>
      <MetaTags
        title="SubscriptionCheckout"
        // description="SubscriptionCheckout description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>SubscriptionCheckoutPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/SubscriptionCheckoutPage/SubscriptionCheckoutPage.js
        </code>
      </p>
      <p>
        My default route is named <code>subscriptionCheckout</code>, link to me
        with `
        <Link to={routes.subscriptionCheckout()}>SubscriptionCheckout</Link>`
      </p>
    </>
  )
}

export default SubscriptionCheckoutPage
