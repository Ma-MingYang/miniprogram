var ApiUrl = 'https://apis.map.qq.com';
var header = {
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': 'application/json',
  'Authorization': null,
}
function getReq(url, callback) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: ApiUrl + url,
    header: header,
    method: 'GET',
    success(res) {
      wx.hideLoading();
      return typeof callback == 'function' && callback(res)
    },
    fail(res) {
      wx.hideLoading()
      wx.showModal({
        title: '网络错误',
        content: res.data,
        showCancel: false
      })
      return typeof callback == 'function' && callback(false)
    },
    complete(res) {

    }
  })
}
function postReq(url, data, callback) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: ApiUrl + url,
    header: header,
    method: 'POST',
    data: data,
    success(res) {
      wx.hideLoading();
      return typeof callback == 'function' && callback(res)
    },
    fail(res) {
      wx.hideLoading()
      wx.showModal({
        title: '网络错误',
        content: '网络出错了，请刷新重试',
        showCancel: false
      })
      return typeof callback == 'function' && callback(false)
    },
    complete(res) {

    }
  })
}

module.exports = {
  getReq: getReq,
  postReq: postReq,
  header: header,
}
