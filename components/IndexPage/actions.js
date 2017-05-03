let actions = {}


actions.increment = () => {
  return { type: 'INCREMENT' }
}

actions.decrement = () => {
  return { type: 'DECREMENT' }
}

export default actions