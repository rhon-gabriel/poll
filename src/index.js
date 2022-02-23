import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const WidgetDivs = document.querySelectorAll('.poll_widget')

const question = document
    .querySelector(".poll_widget")
    .getAttribute("data-question");

const options = JSON.parse(document
.querySelector(".poll_widget")
.getAttribute("data-options"))


WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <App question={question} options={options}/>
    </React.StrictMode>,
    Div
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
