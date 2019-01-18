 // pages/personalCenter/contractDetails/contractDetails.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: "",
    buildNo: "",//房源楼
    buildUnitNo: "",//房源单元
    endDate: "",//合同结束日期
    houseNo: "",//门牌号
    houseRoom: "",//房源名称
    jointRentName: "",//合租人姓名
    jointRentPhone: "",//合租人电话
    ownerPhone: "",//租客电话
    realRentMoney: "",//租金
    receiptCycleName: "",//付款周期
    roomName: "",//房间名称
    saleContractId: "",//合同id
    validDate: "",//合同生效日期
    payStatus: "",//支付状态
    number: "",//第几期
    isDelivery: "",//物业交割状态
    picImage: "",//图片路径
    renterName: "",//租客姓名
    statusName: "",//履行中
    receiptPlanId: "",//收款计划id
    unbind: true,//解约显示不同标签
    androidOrIos: true,	//默认为安卓登录
    tags: "",
    changeRoomNo: "",
    coveredArea: "",//房间面积
    houseBuildNo: "",//房间楼层
    validDate:'',//租期开始时间
    endDate:'',//租期结束时间
    jointRentName:'',
    jointRentPhone:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getData(options)
  },
  getData(options) {
    app.globalData.$post("agenthouseCutomer/RentContractController/getRentContractDetail", {
      saleContractId: options.id
    }).then((res) => {
      console.log(res)
      this.setData({
        imgSrc: 'http://img.guoanfamily.com/' + res.data.picImage,
        saleContractId:res.data.saleContractId,//合同id
        buildNo:res.data.buildNo,//房源楼
        buildUnitNo:res.data.buildUnitNo,//房源单元
        endDate:res.data.endDate,//合同结束日期
        houseNo:res.data.houseNo,//门牌号
        houseRoom:res.data.houseRoom,//房源名称
        jointRentName: res.data.jointRentName==null?"":res.data.jointRentName,//合租人姓名
        jointRentPhone: res.data.jointRentPhone==null?"":res.data.jointRentPhone,//合租人电话
        ownerPhone:res.data.ownerPhone,//租客电话
        realRentMoney:res.data.realRentMoney,//realRentMoney
        receiptCycleName:res.data.receiptCycleName,//付款周期
        roomName:res.data.roomName,//房间名称
        saleContractId:res.data.saleContractId,//合同id
        validDate:res.data.validDate,//合同生效日期
        number:res.data.number,//第几期
        advantageTagsArr: res.data.advantageTags.split(","),
        renterName:res.data.renterName,//租客姓名
        statusName:res.data.statusName,//履行中
        receiptPlanId:res.data.receiptPlanId,//收款计划id
        coveredArea:res.data.coveredArea,//房间面积
        houseBuildNo: res.data.buildFloor,//房间楼层
        validDate:res.data.validDate,//租期开始时间
        endDate:res.data.endDate,//租期结束时间
      })
      if (res.data.advantageTags == ""){
          this.setData({
            advantageTagsArr:[]
          })
      }else{
        if (res.data.advantageTags.indexOf(",") == -1){
          let arr = [];
          arr[0] = res.data.advantageTags;
          this.setData({
            advantageTags:arr
          })
        }else{
          this.setData({
            advantageTags: res.data.advantageTags.split(",")
          })
        }
        
      }
      console.log(this.data.advantageTagsArr)
      if (res.data.statusName == "已解约") {
          this.setData({
            unbind: false
          })
      } else {
          this.setData({
            unbind: true
          })
      }
      if (res.data.payStatus == 0) { //支付状态
        this.setData({
          payStatus:"待支付"
        })
      } else {
        this.setData({
          payStatus:"已支付"
        })      
      };
      if (res.data.isDelivery == 0) { //物业交割状态
        this.setData({
          isDelivery:"未交割"
        })
      } else {
        this.setData({
          isDelivery: "已交割"
        })
      };
    })
  },
  lease(){
      wx.navigateTo({
        url: '/pages/contractPay/contractPay?receiptPlanId=' + this.data.receiptPlanId + "&saleContractId=" + this.data.saleContractId,
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