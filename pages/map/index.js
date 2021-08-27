const amapFile = require('../../common/vendor/amap-wx')
const myAmapFun = new amapFile.AMapWX({
  key: '464a0cab002db834b7e292f45b9f68ef'
})
// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yourCity: '',
    markers: '',
    markPointIndex: 0,
    latitude: '',
    longitude: ''
  },

  getRegeoFn() {
    var that = this;
    myAmapFun.getRegeo({
      success: function (data) {
        if (data[0]) {
          var _yourCity = data[0].regeocodeData.addressComponent.province;
          that.setData({
            yourCity: _yourCity
          });
          console.log(data[0].regeocodeData.addressComponent, "-----------");
        }
      },
      fail(err) {
        debugger
        console.log(err, "-!!!!!!!!!!!!")
      }
    })





    myAmapFun.getPoiAround({
      iconPathSelected: '../../resources/images/marker_checked.png',
      iconPath: '../../resources/images/marker.png',
      querykeywords: '美食',
      location: '纬度,经度 ',
      success(data) {
        var markersData = data.markers;
        debugger
        that.setData({
          markers: markersData,
          markPointIndex: 0,
          latitude: markersData[0].latitude,
          longitude: markersData[0].longitude
        });
      },
      fail(info) {
        wx.showModal({
          title: info.errMsg
        })
      }
    });

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const key = "464a0cab002db834b7e292f45b9f68ef";
    debugger
    this.getRegeoFn()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})