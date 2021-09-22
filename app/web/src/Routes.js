// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PublicLayout from 'src/layouts/PublicLayout/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/stripe-cart" page={StripeCartPage} name="stripeCart" />
      <Route path="/stripe-test" page={StripeTestPage} name="stripeTest" />
      <Route path="/stripe-test-page" page={StripeTestPagePage} name="stripeTestPage" />
      <Set wrap={PublicLayout}>
      <Route path="/cart" page={StripeCartPage} name="cart" />
      <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
