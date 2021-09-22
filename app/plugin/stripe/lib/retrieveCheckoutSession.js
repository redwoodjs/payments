export const retrieveCheckoutSession = async (id) => {
  const response = await global.fetch(`${global.__REDWOOD__API_PROXY_PATH}/retrieveCheckoutSession`, {
    method: "POST",
    body: JSON.stringify({id: id})
  })
  return response.json()
}
