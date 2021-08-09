// index.js
// 获取应用实例
// const app = getApp()
import {
  getHomeData
} from '../../utils/request/api'
Page({
  data: {
    imageUrls: ['https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg', 'https://pic1.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg'],
    categories: [{
      url: '',
      text: '居家'
    }, {
      url: '',
      text: '餐厨'
    }, {
      url: '',
      text: '配件'
    }, {
      url: '',
      text: '服装'
    }, {
      url: '',
      text: '更多'
    }],
    banners: [],
    channels: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 去搜索
  toSearch(value) {
    console.log('this is index to search', value)
  },

  onLoad() {
    getHomeData().then(res => {
      this.setData({
        banners: res.banner
      });
      this.setData({
        channels: res.channel
      })
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})