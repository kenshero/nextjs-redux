export default function indexpage(state = {
  count: 0,
  products: [],
  productName: "",
  productPrice: "",
  productCategory: ""
}, action) {
  switch(action.type) {
  case "INCREMENT":
    return {
      ...state,
      count: state.count + 1
    }
  case "DECREMENT":
    return {
      ...state,
      count: state.count - 1
    }
  case "ONCHANGE_PRODUCT_NAME":
    return {
      ...state,
      productName: action.payload.productName
    }
  case "ONCHANGE_PRODUCT_PRICE":
    return {
      ...state,
      productPrice: action.payload.productPrice
    }
  case "ONSUBMIT_PRODUCT":
    return {
      ...state,
      products: state.products.concat(action.payload)
    }
  default:
    return state
  }
}