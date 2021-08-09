// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    let p = new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          console.log(res);

          // wx.request({
          //   url: `http://172.20.38.142:9999/login2`,
          //   method: 'GET',
          //   data: {
          //     code: res.code,
          //     hello: "111"
          //   },
          //   success: function (res) {
          //     console.log(res.data)
          //     resolve(res.data)

          //   }
          // })
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.request({
            url: `http://172.20.38.142:9999/login`,
            method: 'POST',
            header: "Content-type: application/json",
            data: {
              code: res.code,
              hello: "111"
            },
            success: function (res) {
              console.log(res.data)
            }
          })
        }
      })
    })
    // 登录
    p.then(res => {
      console.log(res)
    });

  },
  globalData: {
    userInfo: null
  }
})