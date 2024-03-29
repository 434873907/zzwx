import {openidCache} from "./cache"
import {getAppid} from "./util"

// const APPID = "wxa49f90b4ff678ef2";

export default (cb) => {
  // .replace()
  let href = location.href;
  let redirect_uri = encodeURIComponent(href);
  // let jumpTo = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=${COMPONENT_APPID}#wechat_redirect`;

  let query = url("?"), hash = url("#");
  let UA = window.navigator.userAgent.toLocaleLowerCase();

  /*微信打开*/
  if (/micromessenger/.test(UA)) {
    /*本地有openid*/
    let openid = openidCache.get() || (query && query.openid) || (hash && hash.openid) || null;
    if (openid) {
      openidCache.set(openid);
      cb();
    }
    /*本地无openid*/
    else {
      let callback = location.href;
      let APPID = getAppid();
      callback = encodeURIComponent(callback);
      location.replace(`http://test-zheer-wx.hztywl.cn/dev_oauth2/?appid=${APPID}&callback=${callback}`);
    }
  }
  /*非微信打开*/
  else {
    // console.log("openid:" + openid);
    cb();
  }
}
