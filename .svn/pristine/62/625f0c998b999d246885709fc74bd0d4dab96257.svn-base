 // pages/personalCenter/LookAtTheRoom/LookAtTheRoom.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lookAtTheRoom_title: [
      {
        name: '定金合同',
        id: "0"
      },
      {
        name: '承租合同',
        id: "1"
      }
    ],
    selet: 0,
    LookAtTheRoom_content_list: [],
    contractType:1,
    showHide:true
  },
  lookAtTheRoom_title(e) {
    console.log(e)
    let $id = e.currentTarget.dataset.id;
    switch ($id) {
      case "0":
        this.setData({
          selet: 0,
          contractType: 1
        })
        this.notLookAtIt()
        break;
      case "1":
        this.setData({
          selet: 1,
          contractType: 2
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
  notLookAtIt() {
    app.globalData.$post("agenthouseCutomer/RentContractController/getContractList", {
      contractType: this.data.contractType
    }).then((res) => {
      console.log(res.data)
      if (this.data.contractType == "1"){
        if(res.code==-1){
          this.setData({
            showHide:true
          })
        }
        if (res.data == undefined) {
          this.setData({
            showHide: true
          })
        } else {
          this.setData({
            LookAtTheRoom_content_list: res.data.depositList,
            showHide:false
          })
          console.log(res.data.depositList)
        }
      } else if (this.data.contractType == "2"){
        if (res.data == undefined) {
          this.setData({
            showHide: true
          })
        } else {
          this.setData({
            LookAtTheRoom_content_list: res.data.rentContractList,
            showHide: false
          })
        }
      }
      
    })
  },
  LookAtTheRoom_content_list(e) {
    console.log(e)
    let $id = e.currentTarget.dataset.id;
    if (this.data.contractType == "1"){
      wx.navigateTo({
        url: '/pages/personalCenter/contractDetails/contractDetails?id=' + $id
      })
    } else if (this.data.contractType == "2"){
      wx.navigateTo({
        url: '/pages/personalCenter/lesseeContractDetails/lesseeContractDetails?id=' + $id
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