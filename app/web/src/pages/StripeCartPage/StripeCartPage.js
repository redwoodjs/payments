import { MetaTags } from '@redwoodjs/web'

import {handleCheckoutSessionCreation} from '../../../../plugin/stripe/lib/handleCheckoutSessionCreation'

const CartPage = () => {
  const onCheckoutButtonClick = () => {
    handleCheckoutSessionCreation()
  }

  return (
    <>
      <MetaTags
        title="Stripe Cart"
        description="A cart page for trying out the Stripe checkout"

      />

      <h2>Stripe Cart</h2>
      <p>Click the checkout button below to try out the Stripe Checkout</p>
      <ul className='cart-drop-down__list list--no-style'>
      <li className='cart-drop-down__list__item'>Item 1</li>
      <li className='cart-drop-down__list__item'>Item 2</li>
    </ul>
    <button onClick={onCheckoutButtonClick}>
      Checkout
    </button>
    </>
  )
}

export default CartPage
