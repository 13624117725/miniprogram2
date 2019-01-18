// pages/personalCenter/suggestion/suggestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textVal:"",
    acindex:1
  },
  // 保存
  SaveTextVal(e){
    this.data.textVal = e.detail.value.textarea;
    let postData = {
      // complaintId: this.userId,//用户id
      questionDescription: this.data.textVal,//问题描述
      // complaintIdentity: this.complaintIdentity,//投诉对象
      sourceCode: '0056013',//微信小程序
    }
    getApp().globalData.$post('agenthouseCutomer/CComplaintController/save',postData).then(res=>{
      if (res.code==0){
        this.setData({
          acindex: 2
        }) 
      }
    })
    
  },
  // 切换tab
  tabChouse(e){
    this.setData({
      acindex: e.currentTarget.dataset.acindex
    })
  }
})