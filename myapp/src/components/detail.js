
import React, { Component } from 'react';
import detailData from '@/api/detailData.js'


class App extends Component {
  state = {
    goodsName: "",
    goodPrice: ""
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <header>
              详情头部
            </header>
            <div className="content">
              <h2>{this.state.goodsName}</h2>
              <p>{this.state.goodPrice}</p>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>
              <a href="#">
                <p>收藏</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>店铺</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>加入购物车</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>立即购买</p>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
  componentDidMount() {

    
  }
}

export default App;
