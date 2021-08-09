import config from "../../config";
export default class HttpRequest {


  fetch(options) {

    if (!options && !Object.keys(options).length) throw (new Error("请求参数错误"))
    if (options.laoding) {
      wx.showLoading({
        title: "加载中...",
        mask: true

      })
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.baseUrl + options.url,
        data: options.data,
        methods: options.method,
        success: (res) => {
          // console.log)
          if (options.laoding) {
            wx.hiddenLoading();
          }
          resolve(res.data);
        },
        fail: (error) => {
          if (options.laoding) {
            wx.hiddenLoading();
          }
          reject(error)
        }
      })
    })

  }
  get(url, data, laoding) {
    let options = {
      url,
      data,
      laoding,
      methods: "GET"
    }
    return this.fetch(options)
  }
  post(url, data, laoding) {
    let options = {
      url,
      data,
      laoding,
      methods: "POST"
    }
    return this.fetch(options)
  }

}