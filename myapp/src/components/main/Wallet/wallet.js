import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Model extends Component {
  state = {

  }
  render() {
    return (
      <div className ="box wallet-box">
        <header>
            <h3>我的钱包</h3>
            <a href="javascript:history.go(-1);" className="iconfont icon-jiantou"> </a>
            <h2 id="shareAmount">0</h2>
            <p>预计收益</p>
        </header>
        <div className = "content">
            <div className="accountLiangbox">
                <ul className="div_displayFlex">
                    <li className="div_borderBox">
                        <p>我的红包</p>
                        <h2 id="myLP">0.00</h2>
                    </li>
                    <li className="div_borderBox">
                        <p>未到红包</p>
                        <h2 id="myNLP">0.00</h2>
                    </li>
                </ul>
            </div>
            <WingBlank>
                <span className="iconfont icon-tixing"></span>
                <Carousel className="my-carousel"
                          vertical
                          dots={false}
                          dragging={false}
                          swiping={false}
                          autoplay
                          infinite
                >
                    <div className="v-item">恭喜会员 176****4567 获得297.00红包！</div>
                    <div className="v-item">恭喜会员 176****4567 获得297.00红包！</div>
                    <div className="v-item">恭喜会员 136****9381 获得297.00红包！</div>
                </Carousel>
            </WingBlank>
            <div className="hongbao">
                <span className="iconfont icon-hongbao"></span>
                我的红包
            </div>
            <div className="accountNav">
                <a href="#">
                    <img src="img/acc01.png" alt=""/>
                        <span>提现</span>
                </a>
                <a href="#">
                    <img src="img/acc02.png" alt=""/>
                        <span>分享奖</span>
                </a>
                <a href="#">
                    <img src="img/acc05.png" alt=""/>
                        <span>收支明细</span>
                </a>
            </div>
            <div className="mybox_list">
                <div>
                    <p>
                        <span className="iconfont icon-jifen"></span>
                        我的积分
                    </p>

                    <span className="iconfont icon-gengduojiantou"></span>
                </div>
                <div>
                    <p>
                        <span className="iconfont icon-renminbi4"></span>
                        积分区块链交易
                    </p>
                    <span className="iconfont icon-gengduojiantou" ></span>
                </div>
                <div>
                    <p>
                        <span className="iconfont icon-qianbao"></span>
                        我的充值卡
                    </p>
                    <span className="iconfont icon-gengduojiantou" ></span>
                </div>
            </div>
        </div>
      </div>
    )
  }
  componentDidMount(){

  }
}

export default Model;