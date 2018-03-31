
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className=" box login_box">
            <header>
                <h3>登录</h3>
                <a href="javascript:history.go(-1);" className="iconfont icon-jiantou"></a>
            </header>
              <div className="content">
                  <div className="login-logo">
                      <img src="img/logo.png" alt=""/>
                  </div>
                  <form>
                      <ul className="login-form">
                          <li className="login-input">
                              <label htmlFor="number" htmlFor="phone" className="iconfont">
                                  <img src="img/phone.png" alt="icon"/>
                              </label>
                              <input id="phone" placeholder="请输入您的账号" type="number"/>
                          </li>
                          <li className="login-input">
                              <label htmlFor="password" className="iconfont">
                                  <img src="img/password.png" alt="icon"/>
                              </label>
                              <input id="password" placeholder="请输入您的密码" type="password"/>
                          </li>
                          <li className="login-password div_clearFloat">
                              <p htmlFor="pwd"><i className="iconfont icon-pwd icon-xuanze-duoxuan" style={{color:'#e60012'}}></i>记住密码</p>
                              <a href="forgetPwd.html" className="fr a_jump">忘记密码？</a>
                          </li>
                          <li className="login-btn">
                              <button id="login" className="loginbtn" type="button">登录</button>
                          </li>
                          <li className="login-p">
                              还没有账号？<a href="register.html">去注册</a>
                          </li>
                      </ul>
                  </form>
              </div>
          </div>
        </div>   
      </div>
    );
  }
  componentDidMount(){
    console.log(this)
    console.log(this.props.location.state)
  }
}

export default App;
