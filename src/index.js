import AppContainer from './components/App/AppContainer';
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
const documentElem = document.getElementById('root');
const appProps = {};
const appChildren = null;

const componentElem = React.createElement(AppContainer, appProps, appChildren);
ReactDOM.render(
    componentElem,
    documentElem,
)

