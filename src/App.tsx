import React from 'react';
import "antd/dist/antd.css";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends React.Component {
  render(): JSX.Element  {
    return(
      <div className="app">
        App
      </div>
    )
  }
}

export default App;
