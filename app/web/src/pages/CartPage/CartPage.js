import { MetaTags } from '@redwoodjs/web'

import {handleCheckoutSessionCreation} from '../../../../plugin/stripe/lib/handleCheckoutSessionCreation'

const CartPage = () => {
  const onCheckoutButtonClick = () => {
    handleCheckoutSessionCreation()
  }

  return (
    <>
      <MetaTags
        title="Cart"
        // description="Cart description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>CartPage</h1>
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
