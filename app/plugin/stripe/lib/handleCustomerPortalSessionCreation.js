// TODO: remove customer id after creating wway to save session info
export const handleCustomerPortalSessionCreation = async (customer) => {
  const response = await global.fetch(
    `${global.__REDWOOD__API_PROXY_PATH}/createCustomerPortalSession`,
    {
      method: 'POST',
      body: JSON.stringify({ customer: customer }),
    }
  )

  const session = await response.json()
  window.location.href = session.url

  if (session.error) {
    console.log(session.error.message)
  }
}
