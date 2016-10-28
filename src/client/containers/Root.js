import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from '../components/Footer'
import Picker from './Picker'
import Posts from './Posts'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </div>

          <Picker />
          <Posts />
        </div>
      </Provider>
    )
  }
}
