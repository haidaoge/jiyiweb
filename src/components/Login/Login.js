import React, { Component } from 'react';
// import './Reg.scss';
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
        
      fetch('http://123.206.99.172:3005/reg',{

        method: 'GET',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json"
        },
        body: { username, password}

      }).then( res => res.json() ).then(res => {
        // 成功，处理逻辑

        alert('恭喜您注册成功！');

      })
  }
  render() {
    return (
      <div onChange={(e)=>this.stateChange(e)}>
          <input name="username" value={this.state.username} placeholder="请输入用户名"/>
          <input name="password" value={this.state.password} placeholder="请输入密码"/>
          <button onClick={ () => this.saveUser() }>立即注册</button>
      </div>
    );
  }
}

export default Reg;