import { Link, routes } from '@redwoodjs/router'

const CustomPaymentFlowPage = () => {
  return (
    <>
      <h1>CustomPaymentFlowPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/CustomPaymentFlowPage/CustomPaymentFlowPage.js
        </code>
      </p>
      <p>
        My default route is named <code>customPaymentFlow</code>, link to me
        with `<Link to={routes.customPaymentFlow()}>CustomPaymentFlow</Link>`
      </p>
    </>
  )
}

export default CustomPaymentFlowPage
