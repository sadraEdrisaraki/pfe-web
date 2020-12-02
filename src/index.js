import AppContainer from './components/App/AppContainer';
import React from 'react'
import ReactDOM from 'react-dom'

const documentElem = document.getElementById('root');
const appProps = {};
const appChildren = null;

const componentElem = React.createElement(AppContainer, appProps, appChildren);
ReactDOM.render(
    componentElem,
    documentElem,
)

