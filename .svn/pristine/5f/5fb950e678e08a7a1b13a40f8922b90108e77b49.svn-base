// pages/depositReservation/depositReservation.js
// pages/reservations/reservations.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseData: {},//房间及个人信息
    taplist: [],//标签数组,
    pdate: "2018-01-01",
    picImage: '',
    selectDate: '',
    roomId: '',
    houseId: '',
    userId:'',
    gengers: [
      { name: '1', value: '男' },
      { name: '0', value: '女' }
    ],
    loading: false,
    btnDisable: false,
    popErrorMsg: '',
    payType: [
      { typeName: '支付宝', name: '1', value: '', checked: true },
      { typeName: '微信', name: '0', value: '' }
    ],
    payMoney: 500,
    token: '',
    startTime:'',
    endTime:"",
    multiArray:[],
    year: new Date().getFullYear(),
    time: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  pickerTap() {
    var date = new Date();

    var monthDay = [];
    var hours = [];
    var minute = [];

    // 月-日
    for (var i = 0; i <= 30; i++) {
      var date1 = new Date(date);
      date1.setDate(date.getDate() + i);
      var md = (date1.getMonth() + 1) + "-" + date1.getDate();
      monthDay.push(md);
    }

    // 时
    for (var i = 0; i < 24; i++) {
      let n = i + ""
      if (i < 10) {
        n = "0" + n
      }
      hours.push(n);
    }

    // 分
    for (var i = 0; i <= 59; i++) {
      let n = i + ""
      if (i < 10) {
        n = "0" + n
      }
      minute.push(n);
    }


    var data = {
      multiArray: this.data.multiArray,
      // multiIndex: this.data.multiIndex
    };
    data.multiArray[0] = monthDay;
    data.multiArray[1] = hours;
    data.multiArray[2] = minute;
    this.setData(data);
  },
  onLoad(options) {
    console.log(new Date())
    let nowTime = new Date();
    this.setData({
      startTime: this.getstartTime(nowTime),
      endTime: this.getEndtTime(nowTime)
    })
    this.pickerTap();
    console.log(options)
    this.setData({
      roomId: options.roomId,
      houseId: options.houseId,
      token: wx.getStorageSync("token"),
      userId: options.userId
    });
    getApp().globalData.$post("agenthouseCutomer/RentContractController/makeDepositInfo", {
      roomId: this.data.roomId,
      houseId: this.data.houseId
      // roomId: "BJGAJZF1504150327584",
      // houseId: "BJGAJFY1504148446304"
    }).then((res) => {
      console.log(res)
      this.setData({
        houseData: res.data,
        picImage: "https://img.guoanfamily.com/" + res.data.picImage 
      })
    });
  },
  getstartTime(nowTime){
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth() + 1 < 10 ? "0" + (nowTime.getMonth()+1) : nowTime.getMonth()+1;
    let day = nowTime.getDate() < "10" ? "0" + nowTime.getDate() : nowTime.getDate()
    return year + "-" + month + "-" + day;
  },
  getEndtTime(nowTime) {
    var date1 = nowTime;
    var date2 = new Date(date1);
    date2.setDate(date1.getDate() + 30);
    let year = date2.getFullYear();
    let month = date2.getMonth() + 1 < 10 ? "0" + (date2.getMonth()+1) : date2.getMonth() + 1;
    let day = date2.getDate() < "10" ? "0" + date2.getDate() : date2.getDate()
    return year + "-" + month + "-" + day;
  },
  goLook(){
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let nameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    if (this.data.houseData.renterPhone == "") {
      console.log(this.data.phone)
      wx.showModal({
        content: '请输入手机号',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    if (this.data.houseData.renterName == "") {
      wx.showModal({
        content: '请输入姓名',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    if (this.data.selectDate==""){
      wx.showModal({
        content: '请选择约看时间',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    if (!myreg.test(this.data.houseData.renterPhone)) {
      let that = this;
      wx.showModal({
        content: '请输入有效手机号',
        success(res) {
          if (res.confirm) {
            that.setData({
              phone: ""
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    if (!nameReg.test(this.data.houseData.renterName)) {
      console.log("1")
      let that = this;
      wx.showModal({
        content: '请重新输入您的姓名',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    getApp().globalData.$post("agenthouseCutomer/CAppointController/saveCAppoint", {
      id: '',//id
      sourceCode:"0020004",
      houseId: this.data.houseId,//房源id
      roomId: this.data.roomId,//房间id
      appointTime: new Date(this.data.selectDate),//
      remark: this.data.houseData.remark,//留言
      userName: this.data.houseData.renterName,//姓名
      phone: this.data.houseData.renterPhone,//电话
      sex: this.data.houseData.renterSex,//性别0男1女
      userId: this.data.userId//用户id
    }).then((res) => {
      console.log(res)
      if(res.code==0){
        wx.showModal({
          content: '您预约成功！',
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/rent/rentIndex/rentIndex',
              })
            } else if (res.cancel) {
              wx.switchTab({
                url: '/pages/rent/rentIndex/rentIndex',
              })
            }
          }
        })
      }
      // this.setData({
      //   houseData: res.data,
      //   picImage: "https://img.guoanfamily.com/" + res.data.picImage + "?imageView2/0/w/143/h/110"
      // })
    });
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

  },
  bindDateChange(e) {
    console.log(e)
    let timeArr = [];
    console.log(this.data.multiArray)
    timeArr.push(this.data.multiArray[0][e.detail.value[0]], this.data.multiArray[1][e.detail.value[1]], this.data.multiArray[2][e.detail.value[2]])
    let newTime = new Date();
    if (this.data.multiArray[0][e.detail.value[0]].split("-")[0] < newTime.getMonth() + 1) {
      let years = newTime.getFullYear() + 1;
      this.setData({
        year: years,
      })
    }

    console.log(this.data.year)
    // this.data.postData.scantime = timeArr;

    this.setData({
      // postData: this.data.postData,
      time: this.data.multiArray[0][e.detail.value[0]] + " " + this.data.multiArray[1][e.detail.value[1]] + ":" + this.data.multiArray[2][e.detail.value[2]]
    })
    console.log(this.data.multiArray[0][e.detail.value[0]] + " " + this.data.multiArray[1][e.detail.value[1]] + ":" + this.data.multiArray[2][e.detail.value[2]])
    this.setData({
      selectDate: this.data.year + "-" + this.data.time
    });
    console.log(this.data.selectDate)
    // this.data.postData.scantime = this.data.year + " " + this.data.time;
  },
  // bindDateChange: function (e) {
  //   let dates = e.detail.value.replace(/-/g, '/');
  //   this.data.contentDates = new Date(this.contentDate);
  //   this.setData({
  //     selectDate: dates
  //   });
  // },
  radioChange: function (e) {
    this.setData({
      'houseData.renterSex': e.detail.value
    });
    console.log(this.data.houseData.renterSex)
  },
  bindPhoneInput: function (e) {
    this.setData({
      'houseData.renterPhone': e.detail.value
    });
  },
  bindUserNameInput: function (e) {
    this.setData({
      'houseData.renterName': e.detail.value
    });
  },
  bindTextTap: function (e) {
    this.setData({
      'houseData.remark': e.detail.value
    });
  },
  saveDepositReservation: function (e) {
    let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!this.data.houseData.renterPhone) {
      this.msgalert("请输入您的手机号！");
      return false;
    }
    if (!phoneReg.test(this.data.houseData.renterPhone)) {
      this.msgalert("请输入有效手机号码！");
      return false;
    }
    if (!this.data.houseData.renterName) {
      this.msgalert("请输入用户名！");
      return false;
    }
    if (!this.data.selectDate) {
      this.msgalert("请选择看房时间");
      return false;
    }
    if (!this.data.payMoney) {
      this.msgalert("请选择正确的金额！");
      return false;
    }
    if (parseInt(this.data.payMoney) < 500) {
      this.msgalert("定金不能少于500！");
      return false;
    }
    this.setData({
      loading: !this.data.loading,
      btnDisable: !this.data.btnDisable
    });


    getApp().globalData.$post("agenthouseCutomer/PayController/depositPayOrder", {
      houseId: this.data.houseData.houseId,//房源id
      roomId: this.data.houseData.roomId,//房间id
      amount: this.data.payMoney,//支付金额
      signDate: new Date(this.data.selectDate.replace(/-/g, '/')),//看房时间
      remark: this.data.houseData.remark,//留言
      productId: this.data.houseData.productId,//产品类型id
      versionId: this.data.houseData.versionId,//产品类型版本
      renterSex: this.data.houseData.renterSex,//性别1男0女
      renterName: this.data.houseData.renterName,//姓名
      phone: this.data.houseData.renterPhone,//电话
      receiptSubjectCode: '0057001',//收款主体(国安家)
      receiptWayCode: '0058009',//收款渠道
      sourceCode: '0020005',//客户来源，微信小程序
      payWay: "0053003"//支付方式-微信
    }).then((res) => {
      if (res.code == '10039') {
        this.msgalert("该房源已被预订");
        this.setData({
          loading: !this.data.loading,
          btnDisable: !this.data.btnDisable
        });
        return false;
      }
      let notifyURL = "http://act.guoanfamily.com/common/wxPay/wxOrderNotify/8884";
      let nameGoods = this.data.houseData.houseName;
      let tradeNo = res.data.depositId; //订单id
      let appId = "wxc44e124ba5d0d053";
      let userId = res.data.userId; //用户id
      let payMoney = res.data.amount; //支付金额

      return getApp().globalData.$post("wxPay/payInfo", {
        "userId": userId,
        "body": nameGoods,
        "notifyURL": notifyURL,
        "outTradeNo": tradeNo,
        "totalFee": payMoney * 100,
        "appid": appId,
        "tradeType": "JSAPI",
        "openid": wx.getStorageSync("openId")
      }, "common")

    }).then(res => {
      if (res.code === 1) {
        this.msgalert("支付失败啊啊");
        return;
      }

      let { timeStamp, nonceStr, paySign } = res.data;

      wx.requestPayment({
        timeStamp: timeStamp,
        nonceStr: nonceStr,
        package: res.data.package,
        signType: "MD5",
        paySign: paySign,
        success: (res) => {
          wx.showToast({
            title: '支付成功',
            mask: true,
            success: () => {
              wx.redirectTo({
                url: "../first/first"
              });
            }
          })
        },
        fail: (res) => {
          this.msgalert("支付失败");
          this.setData({
            loading: !this.data.loading,
            btnDisable: !this.data.btnDisable
          });
        }
      })
    });
  },
  msgalert(msg) {
    wx.showModal({
      title: "温馨提示：",
      content: msg,
    })
  },
  //增加支付金额
  addMoney() {
    this.checkAndSetMoney(this.data.payMoney + 100)
  },

  //减少支付金额
  reduceMoney() {
    this.checkAndSetMoney(this.data.payMoney - 100)
  },

  //改变支付金额
  changeRant(event) {
    this.checkAndSetMoney(event.detail.value)
  },

  //校验金额是否正确
  checkAndSetMoney(money) {
    let payMoney = "";
    let maxLimit = this.data.receiptPlanPlanRent;

    if (money) {
      if (money < 0) {
        payMoney = 0;
      } else if (money > maxLimit) {
        payMoney = maxLimit;
      } else {
        payMoney = money;
      }
    } else if (money === 0) {
      payMoney = money;
    }

    this.setData({
      payMoney: payMoney
    })
  }
});
