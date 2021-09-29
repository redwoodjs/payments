import { MetaTags } from '@redwoodjs/web'
import { useParams } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import { retrieveCheckoutSession } from '../../../../plugin/stripe/lib/retrieveCheckoutSession'
import { handleCheckoutSessionCreation } from '../../../../plugin/stripe/lib/handleCheckoutSessionCreation'
import { handleCustomerPortalSessionCreation } from '../../../../plugin/stripe/lib/handleCustomerPortalSessionCreation'

const StripeCartPage = () => {
  const { success, sessionId } = useParams()
  const [sessionData, setSessionData] = useState({})

  const onCheckoutButtonClick = () => {
    // handleCheckoutSessionCreation can accept checkout modes of "payment" or "subscription"
    handleCheckoutSessionCreation('subscription')
  }

  const onCustomerPortalButtonClick = () => {
    handleCustomerPortalSessionCreation(sessionData.customer)
  }

  useEffect(() => {
    const fetchSessionData = async () => {
      let sessionData
      if (success === 'true') {
        sessionData = await retrieveCheckoutSession(sessionId)
        console.log(sessionData)
        setSessionData(sessionData)
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

      {sessionData.mode === 'subscription' && (
        <button onClick={onCustomerPortalButtonClick}>Customer Portal</button>
      )}
    </>
  )
}

export default StripeCartPage
