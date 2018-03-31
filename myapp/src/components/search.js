import React, { Component } from "react";

class Model extends Component {
  state = {};
  render() {
    return (
      <div className="box search_box">
        <header>
          <div className="searchTop">
            <span className="iconfont icon-search" />
            <input type="text" placeholder="请搜索您感兴趣的商品" />
          </div>
          <p>取消</p>
        </header>
        <div className="content search_content">
          <div className="tag">
            <h6>
              <img src="img/hot.png" alt=""/>
              <span>热门搜索</span>
            </h6>
            <ul>
              <li><a href="#">积分壹区</a></li>
              <li><a href="#">精品超市</a></li>
              <li><a href="#">积分贰区</a></li>
              <li><a href="#">积分叁区</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default Model;
