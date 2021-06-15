import { Link, routes } from '@redwoodjs/router'

const CancelPage = () => {
  return (
    <>
      <h1>CancelPage</h1>
      <p>
        Find me in <code>./web/src/pages/CancelPage/CancelPage.js</code>
      </p>
      <p>
        My default route is named <code>cancel</code>, link to me with `
        <Link to={routes.cancel()}>Cancel</Link>`
      </p>
    </>
  )
}

export default CancelPage
