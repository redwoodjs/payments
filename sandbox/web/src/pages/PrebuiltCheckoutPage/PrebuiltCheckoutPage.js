import { Link, routes } from '@redwoodjs/router'

const PrebuiltCheckoutPage = () => {
  return (
    <>
      <h1>PrebuiltCheckoutPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PrebuiltCheckoutPage/PrebuiltCheckoutPage.js
        </code>
      </p>
      <p>
        My default route is named <code>prebuiltCheckout</code>, link to me with
        `<Link to={routes.prebuiltCheckout()}>PrebuiltCheckout</Link>`
      </p>
    </>
  )
}

export default PrebuiltCheckoutPage
