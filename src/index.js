import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import utils from './utils'

//ini the utils
utils.ini()
// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
}

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </AlertProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
