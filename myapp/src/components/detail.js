
import React, { Component } from 'react';
import detailData from '@/api/detailData.js'

import { Carousel, WingBlank } from 'antd-mobile';

class App extends Component {
  state = {
    goodsName: "",
    goodPrice: ""
  }
  render() {
    return (
          <div className="box detail_box">
            <div className="content">
                {/*需要添加返回箭头图标*/}
                <a href="javascript:history.go(-1);" className="iconfont icon-jiantou"></a>
                {/*分享有奖*/}
                <div className="fr">
                    <img src="https://www.oto178.com/images/red.png" alt=""/>
                    <p>分享有奖</p>
                </div>
                {/*需要添加二维码图标*/}
                <span className="iconfont icon-erweima"></span>

                {/*轮播*/}
                 <WingBlank style={{margin:"0",padding:"0"}}>
                        <Carousel
                            autoplay={true}
                            autoplayInterval={3000}
                            infinite={true}
                            selectedIndex={1}
                        >
                            <a href="">
                                <img style={{ display: 'inline-block', width: '100%' }} src="https://admin.oto178.com/uploads/20180325/69572027b9965ea6c458a9d7ee505b06.jpg" alt=""/>
                            </a>
                            <a href="">
                                <img style={{ display: 'inline-block', width: '100%' }} src="https://admin.oto178.com/uploads/20180325/69572027b9965ea6c458a9d7ee505b06.jpg" alt=""/>
                            </a>
                        </Carousel>
                    </WingBlank>
                {/*商品信息*/}
                <div className="pro_idea">
                    <p>野生食材车前草杀菌消炎纯天然</p>
                    <p>
                        <span>￥16.80</span>
                        <span>库存：121件</span>
                    </p>
                </div>
                <div className="pro_count">
                    <p>数量</p>
                    <p>
                        <span className="iconfont">－</span>
                        <input type="text" value="1"/>
                        <span className="iconfont">+</span>
                    </p>
                </div>
                <div className="pro_canshu">
                    <p>商品参数</p>
                    <span className="iconfont icon-jiantou1">&gt;</span>
                </div>
                <div className="pro_cart">
                    <button className="add_cart">加入购物车</button>
                    <button className="buy_now">立即购买</button>
                </div>
                <img src="https://admin.oto178.com/uploads/20180325/69572027b9965ea6c458a9d7ee505b06.jpg" alt=""/>
            </div>
          </div>

        /*<footer>
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
*/
    );
  }
  componentDidMount() {

    
  }
}

export default App;
