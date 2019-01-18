// pages/personalCenter/Myintegral/Myintegral.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showData:{}
  },
  onShow(){
    let Postdata = {
      getPointRecord: '0',
      agenttype: "1",
      userid: ""
    }
    getApp().globalData.$post('commonPoint/pointDailController/getAllPoint', Postdata,'integral').then(res=>{
      console.log(111,res);
      if(res.code==200){
        let showData = res.obj;
        showData.pointDailyMonthModelList.forEach(item=>{
          if (item.month != "本月") {
            item.month = item.month.split('.')[0] + '年' + item.month.split('.')[1] + '月'
          }
          item.lists.forEach(its => {
            its.createtime = its.createtime.substring(0, 10);
            its.createtime = its.createtime.split('-')[1] + "." + its.createtime.split('-')[2]
          })
        })
        this.setData({
          showData: showData
        })
      }
    })
  },
  // 积分说明
  showMsg(){
    getApp().globalData.turnRouter("#/integralExplan?")
  },
  // 提现
  ToWithdrawals(){
    wx.navigateTo({
      url: '/pages/personalCenter/Withdrawals/Withdrawals',
    })
  }
})