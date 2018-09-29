import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
import './styles/main.scss';


const App = () => (
  <div>
    <Content/>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


