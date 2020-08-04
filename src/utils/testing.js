import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../store/RootReducer'
import thunk from 'redux-thunk'

export const render = (ui, initialStore = {}, options = {}) => {
  const store = createStore(rootReducer, initialStore, applyMiddleware(thunk))
  const Providers = ({ children }) => {
    return <Provider store={store}>{ children }</Provider>
  }
  return rtlRender(ui, { wrapper: Providers, ...options })
}