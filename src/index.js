import React from 'react';
// import { hydrate, render } from "react-dom";
// import { Provider } from 'react-redux'
// import store from './app/redux/store'
import registerServiceWorker from './registerServiceWorker';

import App from './app';
import './index.css';

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Provider store={store}>
//         <App />
//     </Provider>
//   , rootElement)
// } else {
//   render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//   , rootElement)
// }

// registerServiceWorker()



import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
