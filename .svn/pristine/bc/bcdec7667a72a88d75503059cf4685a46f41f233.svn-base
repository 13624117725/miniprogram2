// pages/membership/membership.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    initiationinfo:"1",//存储楼盘信息的变量
    arrInfo:[],
    shuoming:[],
    unitPrice: "",
    subMoneys:"",
    username:"",//用户姓名
    userID:"",//用户的IDcard
    phone:"",//电话
    contactaddress:"",//通讯地址
    buttonflag:false,//是否可以点击
    userPhone:"",
    buildId:"",
    orderid:"",
    openid:"",
    src:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    
    if (options.userPhone) {
      
      this.setData({
        userPhone: options.userPhone,
        buildId: options.buildId,
        src: options.src
      })
      wx.setStorageSync("userPhone", this.userPhone);
    }
    // openid
    wx.login({
      success (res) {
        if (res.code) {
          console.log(res.code)
          //发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
          // getApp().globalData.$get(``).then(resp=>{

          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    this.onMemberLoad()
  },
  userNameInput(e){
    this.setData({
      username: e.detail.value
    })
  },
  userIDInput(e){
    this.setData({
      userID: e.detail.value
    })
  },
  userphoneInput(e){
    this.setData({
      phone: e.detail.value
    })
  },
  contactaddressInput(e){
    this.setData({
      contactaddress: e.detail.value
    })
  },
  onMemberLoad() {
    // let post = this.buildId;
    let post = '2c90ab265dedc19f015deeced6760001';
    getApp().globalData.$get(
      "palmsaleapp/api/v1/custom/initiation/searchInfoByBuildId?id=" + post
    ).then(
      response => {
        if (response.status == 200) {
          this.setData({
              initiationinfo: response.data.initiationinfo
            })
          if (this.initiationinfo){
            this.setData({
              arrInfo: this.initiationinfo.probationrange.split("。"),
              shuoming: this.initiationinfo.instructions.split("。"),
              unitPrice: this.initiationinfo.money,
              subMoneys: this.initiationinfo.money
            })
          }
        }
      },
      response => {
        this.showalert(response.msg);
      }
    );
  },
  submit() {

   
    this.setData({
      buttonflag: true
    })
    if (!this.data.phone) {
      this.msgalert("请输入电话");
      this.setData({
        buttonflag: false
      })
      return false;
    }
    if (!this.data.username) {
      this.msgalert("请输入姓名");
      this.setData({
        buttonflag: false
      })
      return false;
    }
    if (!this.data.contactaddress) {
      this.msgalert("请输入通讯地址");
      this.setData({
        buttonflag: false
      })
      return false;
    }
    
    let post_data = {
      custphonenumber: this.userPhone, //电话
      custname: this.username, //abstract	客户姓名
      custphone: this.phone, //电话
      submoney: this.initiationinfo.money, //入会金额
      signtotalmoney: this.subMoneys, //总金额
      buildid: this.buildid, //楼盘id
      promotioncount: 1, //入会人数
      orderstate: "11", //入会待支付状态
      contactaddress: this.contactaddress,
      idcard: this.userID
    };
    // console.log(post_data);
    // return false;
    this.post(
      "palmsaleapp/api/v1/custom/initiation/saveInitCust",
      post_data
      
    ).then(
      response => {
        if (response.status == 200) {
          this.buttonflag = false;
          // return false;
          this.setData({
            orderid: response.data.orderid
          })// 订单ids
          // this.openid = localStorage.getItem('openid'); //自己的openid
          // this.notifyUrl = response.data.returnUrl;     //微信回调url
          // this.totalFee = response.data.totalFee; //支付总额
          // 微信支付




          // let post_data = {
          //   urlId: "8903", //回调接口id
          //   outTradeNo: this.orderid, //订单id
          //   totalAmount: this.totalFee, //总金额
          //   subject: "登岛金额支付" //订单名称
          // };

          // wx.requestPayment({
          //   timeStamp,
          //   nonceStr,
          //   package,
          //   signType,
          //   paySign,
          //   success(){

          //   },

          // })



          getApp().globalData.ctxPath = `https://nt.guoanfamily.com/guoanjiaAppTest/#/MemberIfream?src=${this.src}&from=xiaochengxu`
          wx.navigateTo({
            url: '/pages/first/first'
          })
          

          // if (!this.$store.state.showWxTitle) {
          //   this.AliPayFn();
          // }
        }
      },
      response => {
        this.showalert(response.msg);
      }
    );
  },
  msgalert(msg){
    wx.showModal({
      title: "温馨提示：",
      content: msg,
    })
  },


})