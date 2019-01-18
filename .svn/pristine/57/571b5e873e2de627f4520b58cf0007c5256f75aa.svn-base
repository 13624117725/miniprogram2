// pages/personalCenter/Myorder/Myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList:[],
    keyNum:0,
    tabList: ["全部", "意向", "认购", "成交", "退款"],
    getN:""
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getList()
  },
  // 选择条件
  tabChouse(e){
    let keyNum = e.target.dataset.index
    this.setData({
      keyNum
    });
    let data = ""
    if (keyNum==0){
      data = "";
    } else if (keyNum == 1){
      data = "2,11";
    } else if (keyNum == 2) {
      data = "3,10";
    } else if (keyNum == 3){
      data = "7";
    } else if (keyNum == 4){
      data = "-6,-11";      
    }
    this.data.getN = data
    this.getList(data);

  },
  // 获取列表数据
  getList(n=""){
    let phone = wx.getStorageSync("phoneNum");
    getApp().globalData.$get(`palmsaleapp/api/v1/custom/initiation/queryCustOrders?phone=${phone}&orderstate=${n}`).then(res=>{
     
      if(res.status==200){
       
        if (res.data.length>0){
          res.data.forEach(its=>{
            for (var key in its){
              if (!its[key] || its[key]==="null"){
                its[key] = ""
              }
            }

            its.buildpic = `https://img.guoanfamily.com/${its.buildpic}`;
            let orderstate = its.orderstate;
            let orderContent = ""
            let laber01 = "已认购，待推荐"
            if (orderstate== "2") {
              orderContent = "已入会，付款成功";
              laber01 = "已入会，付款成功";
            } else if (orderstate == "3") {
              orderContent = "已认购,付款成功";
              laber01 = "已认购，支付成功";
            } else if (orderstate == "4") {
              orderContent = "资格审核中";
            } else if (orderstate == "5") {
              orderContent = "资格审核通过,代付款";
            } else if (orderstate == "6") {
              orderContent = "已缴齐首付";
            } else if (orderstate == "7") {
              orderContent = "签约完成";
            } else if (orderstate == "-5") {
              orderContent = "资格审核未通过";
            } else if (orderstate == "-6") {
              orderContent = "退款中";
            } else if (orderstate == "-7") {
              orderContent = "退房退款";
            } else if (orderstate == "-8") {
              orderContent = "关闭交易";
            } else if (orderstate == "-9") {
              orderContent = "待处理退款申请";
            } else if (orderstate == "-10") {
              orderContent = "取消退款";
            } else if (orderstate == "-11") {
              orderContent = "退款完成";
            } else if (orderstate == "10") {
             orderContent = "下订待支付";
              laber01 = "已认购，待推荐";
            } else if (orderstate == "11") {
              orderContent = "入会待支付";
              laber01 = "已认购，待推荐";
            }
            its.orderContent = orderContent;
            its.laber01 = laber01;
          })

          this.setData({
            showList: res.data
          })
        }else{
          this.setData({
            showList: []
          })
        }
        
        // showList: res.data
      }
    })
  },
  // 支付
  ToPay(e){
    let self = this
    console.log(11,e)
    // console.log(item);
    let item = e.target.dataset.paymonet
    let body = "下定金额";
    let orderid = item.id; //订单id
    // //    console.log(item.id);
    let id = wx.getStorageSync("openId");
    let appId = "wxc44e124ba5d0d053"; 
    let notifyUrl = item.returnUrl; //微信回调url
    // // console.log(notifyUrl);
    let totalFee = parseFloat(item.submoney) * 100;
    this.totalFees = parseFloat(item.submoney);
    getApp().globalData.$post("wxPay/payInfo", {
      "userId":"1",
      "body": "下定金额",
      "notifyURL": notifyUrl,
      "outTradeNo": orderid,
      "totalFee": totalFee,
      "appid": appId,
      "tradeType": "JSAPI",
      "openid": wx.getStorageSync("openId")
    }, "common").then(res=>{
      if (res.code === 1) {
        this.msgalert("支付失败!");
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
              self.getList(self.data.getN);
            }
          })
        },
        fail: (res) => {
          this.msgalert("支付失败");
          
        }
      })
    })

    // let callBackUrl = window.location.href;
    
  },
  msgalert(msg) {
    wx.showModal({
      title: "温馨提示：",
      content: msg,
    })
  },

})