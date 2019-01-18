// pages/personalCenter/Myorder/Myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList: [],
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getList()
  },
  // 获取列表数据
  getList(n = "") {
    let phone = wx.getStorageSync("phoneNum");
    getApp().globalData.$get(`user/AppointmentController/getAllListByUserId?size=100`).then(res => {
      if (res.code==200){
        let showList = res.data.appointmentList
        showList.forEach(item=>{
          item.picture = `https://img.guoanfamily.com/${item.picture}`
        })
        
        this.setData({
          showList
        })
        
      }
        
    })
  },
  // 打电话
  Call(){
    wx.makePhoneCall({
      phoneNumber: '4009002225' //仅为示例，并非真实的电话号码
    })
  }

})