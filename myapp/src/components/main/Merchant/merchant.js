import React, { Component } from "react";

class Model extends Component {
  state = {};
  // 方法

  // 方法结束
  render() {
    return (
      <div className="box merchant_box">
        <header>
          <div className="merchantTop">
            <span className="iconfont icon-search" />
            <input type="text" placeholder="请搜索您感兴趣的商品" />
          </div>
          <p>搜索</p>
        </header>
        {/* 商家页面内容区 */}
        <div className="content merchant_content">
          <ul className="merDetail_ul">
            <li className="merItem_li">
              <a href="#">
                <div className="itemImg">
                  <img src="https://admin.oto178.com/uploads/20180131/f85ef9d973831c41ee37bc95f2fd7dad.jpg" alt=""/>
                </div>
                <div className="itemCon">
                  {/* 详情文字介绍 */}
                  <div className="itemTxt">
                    <p>老干妈旗舰店  辣椒酱、腐乳、豆豉 火锅/香锅料、调味料、调味酱、酱菜、腐乳、腌料</p>
                    <span>贵州省贵阳市</span>
                  </div>
                  {/* 店铺详情按钮 */}
                  <button type="button">店铺详情</button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default Model;
