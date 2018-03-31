// 保存数据的地方


import { createStore } from 'redux';

import reducer from './reducer/index.js'

// 创建单一的store，reducer只可能有一个（纯函数）
const store = createStore(reducer);

export default store;