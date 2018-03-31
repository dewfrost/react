import React, { Component } from 'react';
import homeData from '@/api/homeData.js';
import {Link} from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
class Model extends Component {
  state = {
      data: [],
      imgHeight: 176,
      slideIndex: 0,
  }
  // 方法
  componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
  }
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
            {/*----------------------------------------------轮播图---------------------------------------------------*/}
            <WingBlank>
                <Carousel
                    autoplay={true}
                    autoplayInterval={3000}
                    infinite={true}
                    selectedIndex={1}
                    /*beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}*/
                >
                    <a href="">
                        <img style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }} src="https://admin.oto178.com/uploads/news/20180210/b280692289691db23f8c2496ec4dc536.jpg" alt=""/>
                    </a>
                    <a href="">
                        <img style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }} src="https://admin.oto178.com/uploads/news/20180210/c4fd08db0531dd087384ea1f595ede14.jpg" alt=""/>
                    </a>
                    {/*{this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}*/}
                </Carousel>
            </WingBlank>
            {/*------------------------------------------------导航---------------------------------------------------*/}
            <ul className="index-nav">
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
                <li>
                    <a href="platformIntro.html" className="a_jump">
                        <img src="img/indexnav01.png" alt="平台简介"/>
                        <span>平台简介</span>
                    </a>
                </li>
            </ul>
            {/*-------------------------------------------------首页滚动新闻-------------------------------------------*/}
            <div className="index-news">
                <div className="index-newsTitle">
                    <span>联创</span>
                    <img src="img/news.png" alt=""/>
                </div>
                <WingBlank>
                    <Carousel className="my-carousel"
                              vertical
                              dots={false}
                              dragging={false}
                              swiping={false}
                              autoplay
                              infinite
                    >
                        <div className="v-item">恭喜会员 188****8708 成为第一！</div>
                        <div className="v-item">恭喜会员 189****8109 成为第二！</div>
                        <div className="v-item">恭喜会员 133****8109 成为第三！</div>
                    </Carousel>
                </WingBlank>
                {/*<div className="fl index-newsbox">
                    <div className="swiper-container mybox-news swiper-container-horizontal swiper-container-free-mode swiper-container-android">
                        <div className="swiper-wrapper swiper-container-free-mode" id="kuaiB" style="transform: translate3d(-4356px, 0px, 0px); transition-duration: 8000ms;"><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="19" style="width: 242px;">恭喜会员 159****9214 成为联创！</div>
                            <div className="swiper-slide" data-swiper-slide-index="0" style="width: 242px;">恭喜会员 188****8708 成为联创！</div>
                            <div className="swiper-slide" data-swiper-slide-index="1" style="width: 242px;">恭喜会员 189****8109 成为联创！</div>
                    </div>
                </div>*/}
            </div>
            {/*----------------------------------------商品的大标题---------------------------------------------------*/}
            <div className="index_goodsTitle">
                <img src="img/lc.png" alt=""/>
                <a href="shopListzd.html?type=1" className="a_jump">
                    更多<i className="iconfont icon-gengduo"></i>
                </a>
            </div>
            {/*-----------------------------------------商品列表------------------------------------------------------*/}
            <ul className="index-goodsUl">
                <li>
                    <a href="">
                        <img src="https://s3.mogucdn.com/mlcdn/c45406/180110_28agc65k6ac4k6fj1k965ecf1i5e9_640x960.jpg" alt=""/>
                        <p>福迪野生纯生正山好酸好酸2瓶直发包邮</p>
                        <p>￥300.00</p>
                        <span>佣金红包：100.00元</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="https://s3.mogucdn.com/mlcdn/c45406/180110_28agc65k6ac4k6fj1k965ecf1i5e9_640x960.jpg" alt=""/>
                        <p>福迪野生纯生正山好酸好酸2瓶直发包邮</p>
                        <p>￥300.00</p>
                        <span>佣金红包：100.00元</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="https://s3.mogucdn.com/mlcdn/c45406/180110_28agc65k6ac4k6fj1k965ecf1i5e9_640x960.jpg" alt=""/>
                        <p>福迪野生纯生正山好酸好酸2瓶直发包邮</p>
                        <p>￥300.00</p>
                        <span>佣金红包：100.00元</span>
                    </a>
                </li>
            </ul>

        </div>
      </div>
    )
  }
  componentDidMount() {
   
  }
}

export default Model;