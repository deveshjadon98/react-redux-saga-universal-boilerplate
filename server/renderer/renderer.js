import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
// import our main App component
import AppLayout from '../../src/layouts/AppLayout/AppLayout'

const path = require("path");
const fs = require("fs");

export default (store) => (req, res, next) => {

 // point to the html file created by CRA's build tool
 const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

 fs.readFile(filePath, 'utf8', (err, htmlData) => {
  if (err) {
   console.error('err', err);
   return res.status(404).end()
  }

  // render the app as a string
  const html = ReactDOMServer.renderToString(
   <Provider store={store}>
    <StaticRouter basename="/">
     <AppLayout />
    </StaticRouter>
   </Provider>);

  // get the stringified state
  const reduxState = JSON.stringify(store.getState());

  // inject the rendered app into our html and send it
  return res.send(
   htmlData.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
   )
    .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
  );
 });
}