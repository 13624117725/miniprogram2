 // pages/personalCenter/contractDetails/contractDetails.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    housedata:{},
    imgSrc:"",
    houseName:'',//房间名
    roomName:'',//房间类型
    buildNo:'',//楼号
    buildUnitNo:'',//单元号
    buildFloor:'',//楼层
    area:'',//房间面积数
    advantageTags:'',//标签
    rentPrice:'',//房间价格
    ownerName:'',//下定金人姓名
    signDateTime:'',//支付时间
    amount:'',//支付金额
    depositId:'',//合同编号
    dealCodeName:'',//是否履行
    remark:'',//留言
    advantageTagsArr:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getData(options)
  },
  getData(options){
    app.globalData.$post("agenthouseCutomer/RentContractController/getDepositDetail", {
      depositId: options.id
    }).then((res) => {
      console.log(res)
      this.setData({
        imgSrc: 'http://img.guoanfamily.com/' + res.data.picImage,
        houseName: res.data.houseName,//房间名
        roomName: res.data.roomName,//房间类型
        buildNo: res.data.buildNo,//楼号
        buildUnitNo: res.data.buildUnitNo,//单元号
        buildFloor: res.data.buildFloor,//楼层
        area: res.data.area,//房间面积数
        advantageTags: res.data.advantageTags,//标签
        rentPrice: res.data.rentPrice,//房间价格
        ownerName: res.data.ownerName,//下定金人姓名
        signDateTime: res.data.signDateTime,//支付时间
        amount: res.data.amount,//支付金额
        depositId: res.data.depositId,//合同编号
        dealCodeName: res.data.dealCodeName,//是否履行
        remark: res.data.remark,//留言,
        
        advantageTagsArr: res.data.advantageTags.split(",",6),
        housedata: res.data
      })
      console.log(this.data.advantageTagsArr)
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