import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CartPage = () => {
  return (
    <>
      <MetaTags
        title="Cart"
        // description="Cart description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>CartPage</h1>
      <p>
        Find me in <code>./web/src/pages/CartPage/CartPage.js</code>
      </p>
      <p>
        My default route is named <code>cart</code>, link to me with `
        <Link to={routes.cart()}>Cart</Link>`
      </p>
    </>
  )
}

export default CartPage
