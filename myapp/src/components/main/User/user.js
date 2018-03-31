import React, { Component } from "react";
import ReactDOM,{ Link } from "react-router-dom";
//引入admind-model
import { List, Switch, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});
class Model extends Component {
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

    constructor(props) {
        super(props);
        this.state = {
            en: false,
            show: false,
            config: {},
        };
    }

    renderBtn(zh, en, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;

        return (
            <List.Item arrow="horizontal"
                       onClick={() => {
                           document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                           this.setState({
                               show: true,
                               config,
                           });
                       }}
            >
                {this.state.en ? en : zh}
            </List.Item>
        );
    }

    changeLanguage = () => {
        this.setState({
            en: !this.state.en,
        });
    }

    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }

    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        });
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }

    getDateExtra = date => extra[+date];
 
  render() {
    return (
      <div className="box ">
         <div className="box user-box">
         <header >
            <div className="user myHead">
                {/* 需要插入小图标*/}
               <span className="iconfont icon-shezhi"></span>
                <div className="my-Box">
                    <div className="my-Boximg">
                        <img src="http://oto178.com/images/user_header.png" alt=""/>
                    </div>
                    {/*头像*/}
                    <div className="my-Box-data">
                        <b>用户17752548160</b>
                        <p>
                           {/* 需要插入小图标*/}
                            <strong className=" iconfont icon-VIP"></strong>
                            <i>普通会员</i>
                        </p>
                    </div>
                </div>
            </div>
             {/*下面的小图标*/}

             <div className="myBox-order">
                 <div className="myBox-play">
                     <img src="http://oto178.com/images/order01.png" />
                     <em>代付款</em>
                 </div>
                 <div className="myBox-play">
                     <img src="http://oto178.com/images/order02.png" />
                     <em>代发货</em>
                 </div>
                 <div className="myBox-play">
                     <img src="http://oto178.com/images/order04.png" />
                     <em>代收货</em>
                 </div>
                 <div className="myBox-play">
                     <img src="http://oto178.com/images/order03.png" />
                     <em>已完成</em>
                 </div>
             </div>




         </header>
         <div className="content">
           <List className="calendar-list" style={{ backgroundColor: 'white' }}>
                    {this.renderBtn('线下联盟商家申请', 'Select Date Range')}
                    {this.renderBtn('我的客户', 'Select DateTime Range', { pickTime: true })}
                    {this.renderBtn('推广二维码', 'Horizontal enter', { enterDirection: 'horizontal' })}
                    {this.renderBtn('商城二维码', 'Horizontal enter', { enterDirection: 'horizontal' })}
                    {this.renderBtn('退出', 'Selected Date Range', { defaultValue: [new Date(+now - 86400000), new Date(+now - 345600000)] })}


                </List>
                <Calendar
                    {...this.state.config}
                    visible={this.state.show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    minDate={new Date(+now - 5184000000)}
                    maxDate={new Date(+now + 31536000000)}
                />
         </div>
       </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default Model;

