// pages/index/component/searchBar/index.js
Component({
  pageLifetimes: {
    show() {
      const self = this;
      wx.getStorage({
        key: 'province',
        success(res) {
          debugger
          self.setData({
            city: res.data
          })

        }

      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {


  },

  /**
   * 组件的初始数据
   */
  data: {
    city: '未知'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // getCity() {

    // },
    toSearch() {
      console.log("to search")
      this.triggerEvent('toSearch', 1)
    },
    toMap() {
      console.log(1111)
      wx.navigateTo({
        url: '/pages/map/index',
      })
    }

  }
})