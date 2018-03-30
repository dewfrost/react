
import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/components/main/Home/home.js';
import Merchant from '@/components/main/Merchant/merchant.js';
import Cart from '@/components/main/Cart/cart.js';
import Wallet from '@/components/main/Wallet/wallet.js';
import User from '@/components/main/User/user.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/merchant" component={Merchant} />
            <Route path="/cart" component={Cart} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/user" component={User} />
            <Redirect to={{ pathname: "/home" }} />
          </Switch>
        </div>
        <footer>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                <span className="iconfont icon-shouye02"></span>
                <p>首页</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/merchant" activeClassName="active">
                <span className="iconfont icon-shangjia"></span>
                <p>商家</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName="active">
                <span className="iconfont icon-gouwuche02"></span>
                <p>购物车</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/wallet" activeClassName="active">
                <span className="iconfont icon-qianbao"></span>
                <p>钱包</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" activeClassName="active">
                <span className="iconfont icon-wode"></span>
                <p>我的</p>
              </NavLink>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
