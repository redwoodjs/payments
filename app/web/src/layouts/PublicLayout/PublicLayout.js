import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

import SiteWrapper from 'src/components/SiteWrapper/SiteWrapper'
import CartDropDown from 'src/components/CartDropDown/CartDropDown'

const PublicLayout = ({ children }) => {
  const [cartVisibility, setCartVisibilty] = useState(false);

  const onCartButtonClick = () => {
    setCartVisibilty(!cartVisibility)
  }

  return <>
     <MetaTags
        title="The Farm Stall"
        description="Proof of Concept for the Redwood + Stripe integration package"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
    <header className='site-header'>
      <SiteWrapper>
        <div className='row space-between bottom-border'>
          <Link to={routes.home()}><h1>The Farm Stall</h1></Link>
          <button className='cart-btn' onClick={() => onCartButtonClick()}>cart</button>
        </div>
        {cartVisibility && (
      <CartDropDown/>
    )}
      </SiteWrapper>
    </header>

    <main>
      <SiteWrapper>
        {children}
      </SiteWrapper>
    </main>

  </>
}

export default PublicLayout
