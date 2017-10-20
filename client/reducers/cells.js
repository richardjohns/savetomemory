import beerData from '../../data/cells'

const initialState = beerData.beers

const beers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default beers
