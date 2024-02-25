import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore } from "@reduxjs/toolkit"
import cartReducer from './reducers/CartReducer.jsx'


const store = configureStore({
  reducer:{
    cart: cartReducer,
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
