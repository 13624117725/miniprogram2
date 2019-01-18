// pages/personalCenter/Withdrawals/Withdrawals.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPoints:"",//共有积分
    depositpoint:"",//可提现积分
    iscanwithdraw: "不可提",//是否可提现
    maxMoney:""//最多提现
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    let toupdated = {
      agenttype: "1",
      userid: ""
    };
    getApp().globalData.$post('commonPoint/pointAccountController/getInfoPointAccount', toupdated, "integral").then(res=>{
      console.log(123456789,res);
      if (res.code == 2002) {
        this.setData({
          myPoints: res.obj.totalpoint,
          depositpoint: res.obj.depositpoint,
          iscanwithdraw: res.obj.iscanwithdraw,
          maxMoney: res.data.data
        })
      }
    })
  },  
})