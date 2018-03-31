import React, { Component } from 'react';


class Model extends Component {
  state = {

  }
  render() {
    return (
      <div className ="box cart_box">
      {/* 头部 */}
        <header>
          <h3>购物车</h3>
          <span>编辑</span>
        </header>
        {/* 购物车内容区 */}
        <div className = "content cart_content">
          <ul className="con_Ul">
          {/* 商品列表 */}
            <li className="goodsList">
              <i className="iconfont icon-xuanze-moren"></i>
              <img src="https://admin.oto178.com/uploads/20180320/f1112eee3f5ff7494c38934c7c276825.jpg" alt=""/>
              <div className="carCon">
              {/* 商品标题 */}
                <p className="title">沐晨25蓝包原生木浆抽纸</p>
                <div className="priceAndnum">
                {/* 商品价格 */}
                  <span className="price">
                    ￥
                    <em>39.90</em>
                  </span>
                  {/* 商品数量 */}
                  <span className="num">
                    x
                    <em>1</em>
                  </span>
                  {/* 增加商品数量 */}
                  <div className="number">
                    <span className="iconfont icon-jian"></span>
                    <input type="text" value="1"/>
                    <span className="iconfont icon-jiahao"></span>
                  </div>
                </div>
              </div>
            </li>
          {/* 循环 */}
          <li className="goodsList">
              <i className="iconfont icon-xuanze-moren"></i>
              <img src="https://admin.oto178.com/uploads/20180320/f1112eee3f5ff7494c38934c7c276825.jpg" alt=""/>
              <div className="carCon">
              {/* 商品标题 */}
                <p className="title">沐晨25蓝包原生木浆抽纸</p>
                <div className="priceAndnum">
                {/* 商品价格 */}
                  <span className="price">
                    ￥
                    <em>39.90</em>
                  </span>
                  {/* 商品数量 */}
                  <span className="num">
                    x
                    <em>1</em>
                  </span>
                  {/* 增加商品数量 */}
                  <div className="number">
                    <span className="iconfont icon-jian"></span>
                    <input type="text" value="1"/>
                    <span className="iconfont icon-jiahao"></span>
                  </div>
                </div>
              </div>
            </li>


          </ul>
          {/* 商品结算区 */}
          <div className="goodsFooter">
            <i className="iconfont icon-xuanze-moren"></i>
            {/* 完成时界面 */}
            <span>
              合计：
              <em>￥00.00</em>
            </span>
            {/* 编辑时界面 */}
            <span className="allSelect">全选</span>
            <button>结算</button>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){

  }
}

export default Model;