//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    address: '',
    scale: 10,
    subkey:'XEUBZ-BVQWO-CZGWK-S2HS7-XZFHZ-24BKW',
    markers: [],
    circles: []
  },
  getaddress(e) {
    this.setData({
      address: e.detail.value
    })
    this.sendRequst()
  },
  markertap(e){
    console.log(e)
  },
  sendRequst(){
    var that=this;
    app.Http.getReq('/ws/geocoder/v1/?address='+that.data.address+'&key='+that.data.subkey,function(res){
      that.setData({
        'markers[0].latitude':res.data.result.location.lat,
        'markers[0].longitude': res.data.result.location.lng,
        'circles[0].latitude': res.data.result.location.lat,
        'circles[0].longitude': res.data.result.location.lng,
      })
    })
  },
  addscale() {
    this.setData({
      scale: this.data.scale < 18 ? ++this.data.scale : this.data.scale
    })
  },
  minusscale() {
    this.setData({
      scale: this.data.scale > 5 ? --this.data.scale : this.data.scale
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var _this=this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: '../../images/icons/address.png',
            title: "哪里"

          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000,
            strokeWidth: 1
          }]

        })
      }

    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})