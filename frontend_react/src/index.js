import React from 'react';
import ReactDOM from 'react-dom'; // help us connect to our html file

import App from './App';
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root')); // Connect the entire App inside the body of the html file "index.html"
                                                          // thanks to id="root" of the div inside the body
