// pages/personalCenter/myCleaning/myCleaning.js
const app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    myCleaningContent:[],
    currentPageNo: "1",
    totalPageNo: "",//总页数
    arr:[],
    scrollerShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyCleaningContent();
    console.log(this.data.myCleaningContent)
  },
  getMyCleaningContent(){
    app.globalData.$post("agenthouseCutomer/CleanupOrderController/getCleanupOrderList", {
      "currentPageNo": this.data.currentPageNo,
      "pageCount": "",
    },{
        interfaceType:"integral"
    }).then((res) => {
      console.log(res)
      let arr = [];
      if (res.code === 0) {
        this.setData({
          totalPageNo:res.data.totalPageNo
        })
        console.log(this.data.totalPageNo)
          if (res.data.content.length === 0) {
            this.setData({
              scrollerShow: false
            })
          } else {
          res.data.content.map((item, index) => {
            this.data.arr.push(item)
          })
            
        }
        this.setData({
          myCleaningContent: this.data.arr
        })
      }




    })
  },
  refresh(e) {//下拉刷新
    console.log(e)
    this.setData({
      arr: [],
      currentPageNo: "1"
    })
    this.getMyCleaningContent();
  },
  lower(e){
    console.log(e)
    if (this.data.currentPageNo < this.data.totalPageNo){
      this.data.currentPageNo++
      app.globalData.$post("agenthouseCutomer/CleanupOrderController/getCleanupOrderList", {
        "currentPageNo": this.data.currentPageNo,
        "pageCount": "",
      }, {
          interfaceType: "integral"
        }).then((res) => {
          console.log(res)
          if (res.code === 0) {
              if (res.data.content.length === 0) {
              } else {
              res.data.content.map((item, index) => {
                this.data.arr.push(item)
              })
              this.setData({
                myCleaningContent: this.data.arr
              })
            }
            
          }
        })
    }
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
      console.log("1")
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