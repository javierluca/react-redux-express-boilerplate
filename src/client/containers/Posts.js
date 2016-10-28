import { connect } from 'react-redux'
import Posts from '../components/Posts'

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