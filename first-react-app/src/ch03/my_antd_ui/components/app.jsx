import React, {Component} from 'react';
import {Button, Toast} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

export default class App extends Component {
  handleClick = () => {
    Toast.success('ok')
  }
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.handleClick}>提交</Button>
      </div>
    )
  }
}