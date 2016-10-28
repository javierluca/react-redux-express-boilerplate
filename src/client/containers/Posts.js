import { connect } from 'react-redux'
import Posts from '../components/Posts'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'


const mapStateToProps = (state) => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

const PostsContainer = connect(
  mapStateToProps
)(Posts)

export default PostsContainer