import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const WidgetDivs = document.querySelectorAll('.poll_widget')
const poll = {
  question: 'How do you feel today :',
  options: ['Brilliant! I have so much energy', 'Always can be worse', 'Please, end my misery']
}

WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <App poll={poll}/>
    </React.StrictMode>,
    Div
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
