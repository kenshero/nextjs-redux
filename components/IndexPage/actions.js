let actions = {}


actions.increment = () => {
  return { type: 'INCREMENT' }
}

actions.decrement = () => {
  return { type: 'DECREMENT' }
}

actions.onChangeProductName = (productName) => {
  return {
    type: 'ONCHANGE_PRODUCT_NAME',
    payload: productName
  }
}

actions.onChangeProductPrice = (productPrice) => {
  return {
    type: 'ONCHANGE_PRODUCT_PRICE',
    payload: productPrice
  }
}

actions.onSubmitProduct = () => (dispatch, getState) => {
  const productName = getState().indexpage.productName
  const productPrice = getState().indexpage.productPrice
  const product = {
    productName,
    productPrice
  }
  dispatch ({
    type: 'ONSUBMIT_PRODUCT',
    payload: product
  })
}

export default actions