// pages/personalCenter/setUp/setUp.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderArr: ["男","女"],
    index: 0,
    region: ["全部","全部","全部"],
    regionOne:"",
    address:'',//详细地址
    card:"",//身份证号
    customItem: '全部',
    name:"",
    sex:'',
    phone:'',
    bankName:'',
    bankCardNumber:'',
    defaultSex:true,
    
  },
  getData(){
    let token = wx.getStorageSync("token");
    return app.globalData.$get("user/userInfoController/getUserInfo", {
      Authorization: token
    }).then((res) => {
      let userInfo = wx.getStorageSync("userInfo")
      wx.setStorageSync("realName", res.data.accountListEntity.realName);
      userInfo.infoByUserIdList.quyu = res.data.quyu
      userInfo.infoByUserIdList.sex = res.data.sex
      userInfo.infoByUserIdList.card = res.data.card
      userInfo.infoByUserIdList.address = res.data.address
      wx.setStorageSync("userInfo", userInfo);
      if (!res.data.quyu){
        res.data.quyu = '全部 全部 全部'
      }
      let arr = res.data.quyu.split(" ");
      
      let sexArr = [];
      sexArr.push(res.data.sex)
      console.log(arr)
      this.setData({
        bankCardNumber: res.data.accountListEntity.bankCardNumber ? res.data.accountListEntity.bankCardNumber : "",
        bankName: res.data.accountListEntity.bankName,
        region: arr,
        address: res.data.address,
        card: res.data.card,
        sex: res.data.sex == "" ? "男" : res.data.sex,
        index: this.data.genderArr.indexOf(res.data.sex == "" ? "男" : res.data.sex)
      })     
      
    });
  },
  bindPickerChange: function (e) {//选择性别
    let N = Number(e.detail.value);
    this.setData({
      index:N,
      defaultSex:true
    })
    this.data.sex = this.data.genderArr[N]
  
  },
  bindRegionChange: function (e) {//选择区域
    let arr = e.detail.value;
    let arrString = arr.join(" ");
    this.setData({
      region: e.detail.value,
      regionOne: arrString

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getData();
      let names = wx.getStorageSync("realName");
      let phoneNum = wx.getStorageSync("phoneNum");
      console.log(names)
      this.setData({
        name: names,
        phone: phoneNum,
      })
  },
  save(){
    let pData= {
      address: this.data.address,
      bankCardNumber: this.data.bankCardNumber,
      bankName: this.data.bankName,
      card: this.data.card,
      headImg: "",
      openId: null,
      quyu: this.data.region,
      realName: this.data.name,
      sex: this.data.sex
    }
    for(let i=0 ;i<3;i++ ){
      
      if(pData.quyu[i].indexOf("全部") != -1){
        pData.quyu[i] = ""
      }
    }
    
    pData.quyu = pData.quyu.join(" ");
    pData.quyu = pData.quyu.trim()
    console.log(pData)
    app.globalData.$post("user/userInfoController/saveUnionUserInfo", pData,{
      interfaceType: "collect"
    }).then((res) => {
      console.log(1111,res)
      if (res.code === 200) {
        this.getData().then(()=>{
          wx.navigateBack({
            delta: 1
          })
        }) 
      }
    })
  },
  name(e){
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  address(e){
    this.setData({
      address: e.detail.value
    })
  },
  bankName(e){
    this.setData({
      bankName: e.detail.value
    })
  },
  bankCardNumber(e){
    this.setData({
      bankCardNumber: e.detail.value
    })
  },
  //身份证号
  IdCard(e){
    this.setData({
      card: e.detail.value
    })
  },
  back(){
    wx.navigateBack({
      delta: 1
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