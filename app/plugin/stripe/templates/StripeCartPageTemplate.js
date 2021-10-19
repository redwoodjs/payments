import { MetaTags } from '@redwoodjs/web'
import { useParams } from '@redwoodjs/router'
import { useEffect } from 'react'
import { retrieveCheckoutSession } from '../../../../plugin/stripe/lib/retrieveCheckoutSession'
import { handleCheckoutSessionCreation } from '../../../../plugin/stripe/lib/handleCheckoutSessionCreation'

const StripeCartPage = () => {
  const { success, sessionId } = useParams()

  const onCheckoutButtonClick = () => {
    handleCheckoutSessionCreation(STRIPE_MODE)
  }

  useEffect(() => {
    const fetchSessionData = async () => {
      let sessionData
      if (success === 'true') {
        sessionData = await retrieveCheckoutSession(sessionId)
        console.log(sessionData)
      }
    }
    fetchSessionData()
  }, [success])

  return (
    <>
      <MetaTags
        title="Stripe Cart"
        description="A cart page for trying out the Stripe checkout"
      />

      <h2>Stripe Cart</h2>
      <p>Click the checkout button below to try out the Stripe Checkout</p>
      <ul className="cart-drop-down__list list--no-style">
        <li className="cart-drop-down__list__item">Item 1</li>
        <li className="cart-drop-down__list__item">Item 2</li>
      </ul>
      <button onClick={onCheckoutButtonClick}>Checkout</button>
    </>
  )
}

export default StripeCartPage
