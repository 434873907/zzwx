import {API_URL} from "./config"

/**
 * 生成指定长度随机数
 * @param length
 * @returns {string}
 */
export function makeRandom(length) {
  let str = "0123456789", ret = "";
  for (let i = 0; i < length; i++) {
    ret += str.substr(Math.floor(Math.random() * str.length), 1);
  }
  return ret;
}

/**
 * 根据条件返回数组指定元素
 * @param array
 * @param fn
 * @returns {null}
 */
export function arrayFind(array, fn) {
  let index = array.findIndex(fn);
  return index > -1 ? array[index] : null;
}

/**
 * 判断浏览器类型
 * @param name
 * iphone
 * android
 * micromessenger
 * @returns {boolean}
 */
export function isBrower(name) {
  let UA = window.navigator.userAgent.toLowerCase();
  return UA.indexOf(name) > -1;
}

/**
 * 获得api_url
 * @param callback
 * @returns {string}
 */
export function getApiUrl() {
  let hostname = url("hostname");
  let api_url = "";
  for (let key in API_URL) {
    if (hostname == key) {
      api_url = API_URL[key].api;
    }
  }
  if (!api_url) {
    api_url = API_URL[Object.keys(config.api_url)[0]].api;
  }
  return api_url;
}


export function getAppid() {
  let hostname = url("hostname");
  let api_url = "";
  for (let key in API_URL) {
    if (hostname == key) {
      api_url = API_URL[key].appid;
    }
  }
  if (!api_url) {
    api_url = API_URL[Object.keys(config.api_url)[0]].appid;
  }
  return api_url;
}




/**
 * 生成返回URL
 * @param options
 * @returns {string}
 */
export function makeUrl(options) {
  let url = "";
  if (options.protocol) {
    url += options.protocol + "://"
  }
  if (options.hostname) {
    url += options.hostname
  }
  if (options.port && options.port != 80) {
    url += options.port
  }
  if (options.path) {
    url += options.path
  }
  if (options.query) {
    let q = "";
    for (let key in options.query) {
      if (options.query[key]) {
        q += `&${key}=${options.query[key]}`
      } else {
        q += `&${key}`
      }

    }
    q = q.substr(1);
    url += "?" + q
  }
  if (options.hash) {
    url += "#" + options.hash;
  }
  return url;
}
