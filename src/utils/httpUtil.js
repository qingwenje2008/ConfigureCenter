/**
 * @auth create by wangzhigang on 2018-07-17
 * @email 1161909281@qq.com
 */
import { message } from 'antd';
// 异步处理函数 返回promise
export const asyncHandler = (promise) =>{
  console.log(promise)
  promise.then(res => {
    return res;
  }).catch(err => {
    message.info(err.message || err.msg || '网络连接错误');
    throw err;
  });
} 
export const urlPrase = (search)=>{
    let reg = /([^?&=]+)=([^?&=]+)/g;
        let paramObj = {};
        search.replace(reg, function () {
            // console.log(arguments[1]);
            paramObj[arguments[1]] = arguments[2];
        });
        return paramObj
  }
//复制功能
export const copyText = (text) => {
  const target = document.createElement('div');
  target.style.opacity = '0';
  target.innerText = text;
  document.body.appendChild(target);
  try {
    let range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    message.success('复制成功');
  } catch (e) {
    message.warning('复制失败,请手动复制URL');
  } finally {
    target.parentElement.removeChild(target);
  }
}