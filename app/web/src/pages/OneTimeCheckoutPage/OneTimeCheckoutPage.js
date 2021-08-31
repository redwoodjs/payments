import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OneTimeCheckoutPage = () => {
  return (
    <>
      <MetaTags
        title="OneTimeCheckout"
        // description="OneTimeCheckout description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>OneTimeCheckoutPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/OneTimeCheckoutPage/OneTimeCheckoutPage.js</code>
      </p>
      <p>
        My default route is named <code>oneTimeCheckout</code>, link to me with
        `<Link to={routes.oneTimeCheckout()}>OneTimeCheckout</Link>`
      </p>
    </>
  )
}

export default OneTimeCheckoutPage
