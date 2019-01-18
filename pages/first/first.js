// pages/first/first.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    web_src: "https://www.guoanfamily.com/guoanjiaApp/#/?from=xiaochengxu",
    titles:"",
    immgurl:"",
    path:"",

    // web_src:"https://nt.guoanfamily.com/guoanjiaAppTest/#/?from=xiaochengxu"
   
  },
  onShow() {
    
  },
  bindmessage(e){
    let n = e.detail.data.length - 1
    
    this.setData({
      titles: e.detail.data[n].shearData.title,
      imgurl: e.detail.data[n].shearData.imgurl,
      path: e.detail.data[n].shearData.path,
      stype: e.detail.data[n].shearData.tyle,
      // IsIndex: e.detail.data[n].shearData.IsIndex
    })
  },
  onShareAppMessage(options) {
    let that = this
    let path = ""
    if (this.data.stype){
      if (this.data.IsIndex){
        path = `/pages/index/index`
      }else{
        path = `/pages/index/index?Hashs=${this.data.path}`
      }   
      return {
        title: this.data.titles,
        path: path,
        imageUrl: this.data.imgurl,
        success: function (res) {
          wx.showModal({
            title: "温馨提示：",
            content: '分享成功',
          })
        }
      }
    }else{
      let return_url = options.webViewUrl //分享的当前页面的路径

      if (return_url.indexOf("from=xiaochengxu") == -1) {
        if (return_url.indexOf("?") != -1) {
          return_url = return_url + "&from=xiaochengxu"
        } else {
          return_url = return_url + "?from=xiaochengxu"
        }
      }
      path = `/pages/index/index?shareUrl=${encodeURIComponent(return_url)}` //小程序存放分享页
      return {
        title: "国安家-高品质公寓运营商",
        path: path,
        imageUrl: "https://img.guoanfamily.com/rent/static/HomePage/chuxin01.png",
        success: function (res) {
          wx.showModal({
            title: "温馨提示：",
            content: '分享成功',
          })
        }
      }
    }
   
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var app = getApp();
    var ctxPath = app.globalData.ctxPath; //内嵌网页的路径
    this.setData({
      web_src: ctxPath
    })
    app.data.webShowed = true;//标记已经显示过web-view页了
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

  }
})