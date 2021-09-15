import {handleCheckoutSessionCreation} from '../../../../plugin/stripe/lib/index.js'

const CartDropDown = () => {
  const onCheckoutButtonClick = () => {
    handleCheckoutSessionCreation()
    // console.log('uuhhhh')
  }

  return (<div className='cart-drop-down'>
    <h3>Cart</h3>
    <ul className='cart-drop-down__list list--no-style'>
      <li className='cart-drop-down__list__item'>Item 1</li>
      <li className='cart-drop-down__list__item'>Item 2</li>
    </ul>
    <button onClick={onCheckoutButtonClick}>
      Checkout
    </button>
</div>)
}

export default CartDropDown
