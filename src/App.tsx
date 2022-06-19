import React from 'react';
import "antd/dist/antd.css";
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Routes } from './routes/Routes';

const history = createBrowserHistory();

class App extends React.Component {
  render(): JSX.Element  {
    return(
      <div className="app">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    )
  }
}

export default App;
