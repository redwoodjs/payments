// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import SandboxLayout from './layouts/SandboxLayout/SandboxLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/success" page={SuccessPage} name="success" />
      <Route path="/cancel" page={CancelPage} name="cancel" />
      <Set wrap={SandboxLayout}>
        <Route path="/payment-intent-graphql" page={PaymentIntentGraphqlPage} name="paymentIntentGraphql" />
        <Route path="/prebuilt-checkout" page={PrebuiltCheckoutPage} name="prebuiltCheckout" />
        <Route path="/custom-payment-flow" page={CustomPaymentFlowPage} name="customPaymentFlow" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
