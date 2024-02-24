import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore } from "@reduxjs/toolkit"


const store = configureStore({
  reducer:{
    
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
