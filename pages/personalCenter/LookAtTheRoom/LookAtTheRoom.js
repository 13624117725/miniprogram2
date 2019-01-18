// pages/personalCenter/LookAtTheRoom/LookAtTheRoom.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    LookAtTheRoomShowHide:false,
    isFinished:0,
    currentPageNo:1,
    lookAtTheRoom_title:[
      {
        name:'未完成的约看',
        id:"0"
      },
      {
        name: '已完成的约看',
        id: "1"
      }
    ],
    selet:0,
    LookAtTheRoom_content_lists:[]
  },
  lookAtTheRoom_title(e){
    let $id = e.currentTarget.dataset.id;
    switch ($id){
      case "0":
        this.setData({
          selet:0,
          isFinished:"0"
        })
        this.notLookAtIt()
      break;
      case "1":
        this.setData({
          selet: 1,
          isFinished: "1"
        })
        this.notLookAtIt()
        break;
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.notLookAtIt();
  },
  notLookAtIt(){
    app.globalData.$post("agenthouseCutomer/CAppointController/getCAppointList", {
      isFinished: this.data.isFinished,
      currentPageNo: this.data.currentPageNo,
    }).then((res) => {
      let arr = res.content;
        console.log(1111111,arr)
        if (res.content.length!=0){
          this.setData({
            LookAtTheRoomShowHide:true
          })
        }else{
          this.setData({
            LookAtTheRoomShowHide:false
          })
        }
        this.setData({
          LookAtTheRoom_content_lists: arr
        })
    
      
    })
  },
  LookAtTheRoom_content_list(e){
    let $id = e.currentTarget.dataset.id;
    let $producttype = e.currentTarget.dataset.producttype;
    wx.navigateTo({
      url: '/pages/rent/rentDetails/rentDetails?id=' + $id + '&productType=' + $producttype,
    })
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
    this.notLookAtIt()
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