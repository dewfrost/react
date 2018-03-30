import React, { Component } from 'react';
import homeData from '@/api/homeData.js';
import {Link} from 'react-router-dom'

class Model extends Component {
  state = {
    
  }
  // 方法

  // 方法结束
  render() {
    return (
      <div className="box home_box">
        <header>
          <div className="homeTop">
            <span className="iconfont icon-search"></span>
            <input type="text" placeholder="请搜索您感兴趣的商品"/>
          </div>
          <p className="iconfont icon-saoyisao1"></p>
        </header>
        <div className="content">
          首页
        </div>
      </div>
    )
  }
  componentDidMount() {
   
  }
}

export default Model;