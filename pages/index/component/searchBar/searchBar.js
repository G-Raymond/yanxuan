// pages/index/component/searchBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {


  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
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