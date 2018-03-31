
import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box register_box">
            <header>
                <h3>注册</h3>
                <a href="javascript:history.go(-1);" className="iconfont icon-jiantou"></a>
                <a href="" className="go_login">登录</a>
            </header>
              <div className="content">
                  <div className="login-logo login-logo2">
                      <img src="img/logo.png" alt=""/>
                  </div>
                  <form>
                      <ul className="login-form">
                          {/*推荐人手机号*/}
                          <li className="login-input">
                              <label htmlFor="phoneID" className="iconfont">
                                  <img src="img/id.png" alt="icon"/>
                              </label>
                              <input id="phoneID" type="text" placeholder="请输入推荐人手机号"/>
                          </li>
                          {/*你的手机号*/}
                          <li className="login-input">
                              <label htmlFor="phone" className="iconfont">
                                  <img src="img/phone.png" alt="icon"/>
                              </label>
                              <input id="phone" placeholder="请输入您的手机号" type="number"/>
                          </li>
                          {/*手机短信验证码*/}
                          <li className="login-input">
                              <label htmlFor="yzm" className="iconfont">
                                  <img src="img/yzm.png" alt="icon"/>
                              </label>
                              <input id="yzm" placeholder="请输入短信验证码" type="number"/>
                                  <button id="fetchCode" className="fr login-yzm" type="button">获取验证码</button>
                          </li>
                          {/*登录密码*/}
                          <li className="login-input">
                              <label htmlFor="password" className="iconfont">
                                  <img src="img/password.png" alt="icon"/>
                              </label>
                              <input id="password" placeholder="请设置您的登录密码" type="password"/>
                          </li>
                          {/*确认密码*/}
                          <li className="login-input">
                              <label htmlFor="password2" className="iconfont">
                                  <img src="img/password.png" alt="icon"/>
                              </label>
                              <input id="password2" placeholder="再次确认登录密码" type="password"/>
                          </li>
                          {/*注册按钮*/}
                          <li className="login-btn">
                              <button id="login" className="loginbtn" type="button">注册</button>
                          </li>
                          <li className="login-div">
                              注册即表示您已同意<a href="#">《用户注册协议》</a>
                          </li>
                      </ul>
                  </form>
              </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
