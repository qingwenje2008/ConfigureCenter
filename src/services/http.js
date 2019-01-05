/**
 * @auth create by wangzhigang on 2018-07-11
 * @email 1161909281@qq.com
 */

import fetch from 'dva/fetch';
import { Modal } from 'antd';
const confirm = Modal.confirm;
let isLogin = true;
export default class Fetch {
  // 默认参数
  DEFAULT_CONFIG = {
    headers: {
      'Accept': '*/*',
      // 'Content-Type': 'multipart/form-data'
    },
    credentials: 'include',
    basePath: '/app_oa_manager'
  };

  // 初始化
  constructor(options = {}) {
    this.globalConfig = { ...this.DEFAULT_CONFIG, ...options };
  }

  // 请求拦截器
  requestInjector(fetchConfig) {
    // const username = localStorage.getItem('username') && JSON.parse(localStorage.getItem('username')) || {};
    // const cutTp = new Date().valueOf();
    // if (fetchConfig.url == '/restapi/v1/login') 
    //   return fetchConfig
    // if (isLogin) {

    //   if (!username.tp || username.tp && ((cutTp - username.tp) / 1000 >= 1800)) {
    //     isLogin = false;
    //     confirm({
    //       title: '温馨提示',
    //       content: '登陆超时，请重新登陆',
    //       okText: "确认",
    //       cancelText: "取消",
    //       onOk() {
    //         localStorage.removeItem('username');
    //         location.href = '/login';
    //         return false;
    //       },
    //       onCancel() { 
    //         isLogin = true;
    //       },
    //     });
    //     throw { code: -10009, msg: '登陆超时，请重新登陆' };
    //   }
    // }
    // if (!isLogin) return false;
    return fetchConfig;
  }

  // 返回拦截器
  responseInjector = async response => {
    const resText = await response.text();
    // // 校验是否是对象
    // if (/^(\{|\[)+[\w\W]*(\]|\})+$/.test(resText)) {
    //   const json = JSON.parse(resText);
    //   if (json.processStatus == 'grim_0000') {
    //     return json;
    //   } else {
    //     throw json;
    //   }
    // }
    return resText;
  }

  // 请求错误
  onError = async (response) => {
    const resText = await response.text();
    const json = JSON.parse(resText);
    throw json;
  }

  // 格式化参数
  queryString(params) {
    let str = '';
    for (let key in params)
      str += `${key}=${params[key]}&`;

    return str.substr(0, str.length - 1);
  }

  // 请求
  async fetch(params) {
    const { basePath, responseInjector = () => { }, requestInjector = () => { } } = this.globalConfig;
    // 请求参数
    let fetchConfig = { ...this.globalConfig, ...params };
    // get或head
    if (fetchConfig.method.toLowerCase() == 'get' || fetchConfig.method.toLowerCase() == 'head') {
      // 字符串拼接
      fetchConfig.url = Object.keys(fetchConfig.params).length > 0
        ? `${fetchConfig.url}?${this.queryString(fetchConfig.params)}`
        : fetchConfig.url;
    }
    // 请求拦截
    fetchConfig = requestInjector(fetchConfig) || this.requestInjector(fetchConfig);
    // 获取url和请求参数
    const { url, ...config } = fetchConfig;
    // 发起请求
    const response = await fetch(`${basePath}${url}`, config);
    // 请求成功
    if (response.ok)
      return responseInjector(response) || this.responseInjector(response);

    // 请求失败
    return this.onError(response);
  }

  // get
  get = (url, params = {}) =>
    this.fetch({
      url,
      method: 'get',
      params
    });

  //post
  post = (url, body = JSON.stringify({})) =>
    this.fetch({
      url,
      method: 'post',
      body
    });

  delete = (url, body = {}) =>
    this.fetch({
      url,
      method: 'delete',
      body
    });
}