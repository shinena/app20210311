import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import AppRouter from './router'
import "./app.less"
import store from './store'

class App extends React.Component{
  render() {
    return (
        <Provider {...store}>
          <AppRouter/>
        </Provider>
    )
  }
}
ReactDOM.render(
    <App />,
  document.getElementById('app')
);
