import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import rootReducers from "./reducers/"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(
	rootReducers,
	{},
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
	<Provider store={ store }>
    	<App />
  	</Provider>,
  document.getElementById('root')
);
