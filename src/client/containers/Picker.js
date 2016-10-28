import { connect } from 'react-redux'
import Picker from '../components/Picker'
import { selectSubreddit } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.selectedSubreddit,
    options: [ 'reactjs', 'frontend' ]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (nextSubreddit) => {
      dispatch(selectSubreddit(nextSubreddit))
    }
  }
}

const PickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker)

export default PickerContainer