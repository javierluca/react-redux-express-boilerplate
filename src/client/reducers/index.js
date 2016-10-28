import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { postsBySubreddit, selectedSubreddit } from './reddit'


const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer