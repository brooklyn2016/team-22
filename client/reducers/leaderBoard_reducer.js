import {
  FETCH_LEADERBOARD
} from '../actions/types'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_LEADERBOARD:
      return { ...state, data: action.payload.data };
  }

  return state;
}
