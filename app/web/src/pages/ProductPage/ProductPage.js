import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProductPage = () => {
  return (
    <>
      <MetaTags
        title="Product"
        // description="Product description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>ProductPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProductPage/ProductPage.js</code>
      </p>
      <p>
        My default route is named <code>product</code>, link to me with `
        <Link to={routes.product()}>Product</Link>`
      </p>
    </>
  )
}

export default ProductPage
