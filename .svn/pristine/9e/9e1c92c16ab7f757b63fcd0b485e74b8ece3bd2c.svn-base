// pages/personalCenter/myLease/myLease.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saleContractId:"",//合同编号
    houseAddress:'',//物业地址
    validDateAndEndDate:'',//合约期
    realRentMoney:'',//租金
    receiptCycleName:"",//付款方式
    currentNumber:'',//本期
    rentHouseNumber:[],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular: true,
    index:0,
    goodsList:[],
    show:"0",
    hide:"1"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    this.getData()
  },
  getData(){
    app.globalData.$post('agenthouseCutomer/RentContractController/getUserLease', {}, {
    }).then((res) => {
      if(res.data.length!=0){
          this.setData({
            myLeaseShowHide:true
          })
      }else{
        this.setData({
          myLeaseShowHide:false
        })
      }
      this.setData({
        rentHouseNumber:res.data
      })
   
      this.setData({
        goodsList: res.data[this.data.index].receiptPlanList
      })
    });
  },
  SwiperChange(e){
      this.setData({
        index: e.detail.current
      })
    this.getData()
  },
  payDetails(e){
    wx.navigateTo({
      url: '/pages/personalCenter/lesseeContractDetailsPay/lesseeContractDetailsPay?receiptPlanId=' + e.currentTarget.dataset.receiptplanid + "&saleContractId=" + e.currentTarget.dataset.salecontractid + '&listShowHide=' + e.currentTarget.dataset.listshowhide
    })
  },
  paywayClick(e){
    wx.navigateTo({
      url: '/pages/contractPay/contractPay?receiptPlanId=' + e.currentTarget.dataset.receiptplanid + "&saleContractId=" + e.currentTarget.dataset.salecontractid + '&listShowHide=' + e.currentTarget.dataset.listshowhide
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