import React from 'react';
import "antd/dist/antd.css";
import { createBrowserHistory } from 'history';
import {Input} from './components/dataEntry/Input/Input';

const history = createBrowserHistory();

class App extends React.Component {
  render(): JSX.Element  {
    return(
      <div className="app">
        <Input name="Input"/>
      </div>
    )
  }
}

export default App;
