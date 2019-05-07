import React, { Component } from 'react';
import { Spin } from 'antd';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import asyncComponent from './hoc/asyncComponent';
import './App.css';

const Routes = asyncComponent(() => {
  return import('./routes/Routes')
})

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends Component {
  state = {
    isLoading: true
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    const { isLoading } = this.state
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
      <div className='App'>
        <div className="container-fluid">
          <br />
          <div>
            
            {isLoading ? <Spin /> : <Routes />}
          </div>

        </div>
      </div>
      </JssProvider>
    )
  }
}
export default App;
