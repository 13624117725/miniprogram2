// pages/personalCenter/lesseeContractDetailsPay/lesseeContractDetailsPay.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[],
    rentMoney:'',
    showHide:false,
    title_list:[
      { name: "支付次数" },
      { name: "支付金额" },
      { name: "支付日期" },
      { name: "支付状态" },
    ],
    content_list:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options)
  },
  getData(options){
    app.globalData.$post("agenthouseCutomer/RentContractController/getPayReceiptList", {
      receiptPlanId: options.receiptPlanId,
      saleContractId: options.saleContractId
    }).then((res) => {
      console.log(res)
      console.log(options)
      this.setData({
        rentMoney: res.data.receiptPlan.differencesRent,
        content_list: res.data.receiptList
      })
      if (options.listShowHide == "0"){
          this.setData({
            showHide:"0"
          })
      }
      if (options.listShowHide == "1") {
        this.setData({
          showHide: "1"
        })
      }

      let details = [
        {
          name:"合同编号:",
          content:''
        },
        {
          name: "物业地址:",
          content: ''
        },
        {
          name: "租金期数:",
          content: ''
        },
        {
          name: "已交次数:",
          content: ''
        },
        {
          name: "应缴金额:",
          content: ''
        },
        {
          name: "已抵扣:",
          content: ''
        },
        {
          name: "已使用红包:",
          content: ''
        },
        {
          name: "已交金额:",
          content: ''
        },
      
      ];
      let content = [res.data.contractInfo.saleContractId, res.data.contractInfo.houseAddress, res.data.receiptPlan.number, res.data.receiptPlan.submitCount + ' 次', '¥ ' + res.data.receiptPlan.planRent, '¥ ' + res.data.receiptPlan.discount, '¥ ' + res.data.receiptPlan.couponsDiscount, res.data.receiptPlan.realRent+' 元'];
      for (let i = 0; i < details.length;i++){
        details[i].content = content[i]
      }
      this.setData({
        details: details
      })
      
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