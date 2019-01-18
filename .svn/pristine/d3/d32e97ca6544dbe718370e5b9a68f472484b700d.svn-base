// pages/personalCenter/Mycard/Mycard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showData:[],
    maskShow:false,
    cardData:{},
    Cid:"",
    showMsg:false,
    imgurl:"https://img.guoanfamily.com/miniProgram/188.png",
    cardname:"抵扣券",
    myCardShow:true
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getCcrdData()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getCcrdData(){
    getApp().globalData.$get("user/cash/getCash").then(res=>{
      if (res.code==200){
        if(res.data.length>0){
            wx.hideLoading()
          res.data.forEach(item => {
            if (item.cardType == 1) {
              //  现金
              item.cardInfo = 50;
              item.cardName = '现金卡';
              item.cardFrom = '-新房';
              item.explain = ''
            }
            if (item.cardType == 2) {
              item.cardInfo = 188;
              item.cardName = '抵扣券';
              item.cardFrom = '-租房';
              item.explain = '业主和租客都可以享用的优惠'
            }
            if (item.cardType == 3) {
              item.cardInfo = '8折';
              item.cardName = '服务费';
              item.cardFrom = '-租房';
              item.explain = '首次入住国安家用券服务费八折优惠'
            }
          })
          this.setData({
            showData: res.data,
            myCardShow:true
          })
        } else if (res.data.length==0){
          this.setData({
            myCardShow: false
          })
        }
      }
    })
  },
  // 提现
  getMoney(e){
    let Cid = e.currentTarget.dataset.cid;
    wx.showLoading({ title: '加载中' })
    this.getCardMoney(Cid)
  }, 
  
  getCardMoney(Cid){
    this.data.Cid = Cid
    getApp().globalData.$get("user/cash/appUpdateTypeApp?type=" + "2" + "&id=" + Cid).then(res => {
      if (res.code == 200) {
        this.getCcrdData()
      } else {
        wx.hideLoading()
        this.setData({
          maskShow: true
        })

      }
    })
  },
  formSubmit(e){
    this.data.cardData = e.detail.value;
    if (!this.data.cardData.bankName){
      wx.showToast({
        icon:'none',
        title: '请输入正确的开户行名称',
        duration: 2000
      })
      return false;
    }
    if (!this.data.cardData.bankCardNumber){
      wx.showToast({
        icon: 'none',
        title: '请输入正确的银行卡号',
        duration: 2000
      })
      return false;
    }

    getApp().globalData.$post("user/userInfoController/saveUnionUserInfo", this.data.cardData).then(res => {
      if (res.code == 200) {
        this.setData({
          maskShow:false
        })
        
      }
    });
  },
  formReset(e){
    this.setData({
      maskShow: false
    })

  },

  showMSG(e){
    let cardname = e.currentTarget.dataset.cardname;
    console.log(cardname)
    let imgurl = "https://img.guoanfamily.com/miniProgram/188.png";
    if (cardname =="抵扣券"){
      imgurl = 'https://img.guoanfamily.com/miniProgram/188.png'
    }
    if (cardname == "现金卡"){
      imgurl = 'https://img.guoanfamily.com/miniProgram/Cashstatement.png'
    }
    if (cardname == "服务费") {
      imgurl = 'https://img.guoanfamily.com/miniProgram/8zhe.png'
    }
    this.setData({
      showMsg:true,
      imgurl,
      cardname
    })
  },
  // 关闭
  closedImg(){
    console.log(32)
    this.setData({
      showMsg: false
    })
  },
})