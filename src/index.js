import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 读取loacl 中保存user ,保存到内存
import opreactStroage from './utils/opreactStroage';
import memoryUtils from './utils/memoryUtils';
const user = opreactStroage.getUser();
console.log(user);
memoryUtils.user = user;

ReactDOM.render(<App />, document.getElementById('root'));
