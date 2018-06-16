import React, { Component } from 'react';
import '../../style/theme/default.scss';
import './Reg.scss';

import fetch from 'isomorphic-fetch';

class Reg extends Component {
  constructor(props) {
      super(props);
      this.state = { // 初始化state
          username: '',
          password: ''
      }
      this.saveUser = this.saveUser.bind(this);
  }

　stateChange(e) {
　　   const target = e.target;
       this.setState({
           [target.name]: target.value
       })
　}
  saveUser() {
      const {
        username,
        password
      } = this.state;
      if(!username) return alert('用户名不能为空！');
      if(!password) return alert('密码不能为空！');
// http://192.168.3.122/D:/workspace/react/jiweb/src/components/Login
      fetch('./data.json', {
          method: 'GET',
          mode: "cors",
          headers: {
          "Content-Type": "application/json"
          }
      }).then( res => {return res;} ).then( res => {
        // 成功，处理逻辑
        this.props.history.push('Login');
        alert('恭喜您注册成功！');

      })
  }
  render() {
    return (
      <div className="div" onChange={(e)=>this.stateChange(e)}>
          <input name="username"  value={this.state.username} placeholder="请输入用户名"/>
          <input name="password" value={this.state.password} placeholder="请输入密码"/>
          <button onClick={ () => this.saveUser() }>立即注册</button>
      </div>
    );
  }
}

export default Reg;