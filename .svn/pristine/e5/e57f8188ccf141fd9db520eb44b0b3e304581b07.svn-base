// pages/personalCenter/onLineEntrust/onLineEntrust.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMan:true,
    renterSex:1,
    plotName:'',
    searchHouseName:"",
    isShowResult:false,
    searchHouseList:[],
    phone:"",
    name:'',
    message:"",
    customerSourceCode:'',
    focus:false,
    textareaShowHide:true,
    isText:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchman() {
    this.setData({
      isMan:true,
      renterSex:1
    })
   
  },
  switchwoman() {
    this.setData({
      isMan: false,
      renterSex: 0
    })
  },
  poppingOnOff(){
    console.log("1")
    this.setData({
      searchHouseName: this.data.plotName,
      isShowResult:true,
      searchHouseList:[],
      isWechat:true,
      focus:false,
      textareaShowHide:false
    })
  },
  cancelSearch(){
    this.setData({
      isShowResult:false,
      textareaShowHide:true
      
    })
  },
  getSearchHouse(e){
    console.log(e)
    app.globalData.$post("agenthouseCutomer/CommunityController/findCommunityList", {
      'communityName': e.detail.value
    }).then((res) => {
      console.log(res)
      if(res.code == 0){
        if(res.data.length>0){
            this.setData({
              searchHouseList: res.data
            })
        } else {
          this.setData({
            searchHouseList:res.data
          })
          wx.showToast({
            title: "没有该房源,请重新搜索.",
            icon: 'none',
            duration: 2000
          })
        }
        
         
          
      } else if (res.code == 10040){
          console.log(1)
        this.setData({
          searchHouseList:[]
        })
          wx.showToast({
            title: "请输入小区名称",
            icon: 'none',
            duration: 2000
          })
      }
      
    });
  },
  confirmResult(e){
    console.log(e)
    this.setData({
      plotid: e.currentTarget.dataset.id,
      plotName: e.currentTarget.dataset.name,
      isShowResult:false,
      textareaShowHide:true,
      isText:false
    })
  },
  getPhone(e){
      console.log(e)
      this.setData({
        phone: e.detail.value
      })
  },
  getName(e) {
    console.log(e)
    this.setData({
      name: e.detail.value
    })
  },
  getMessage(){
    console.log(e)
    this.setData({
      message: e.detail.value
    })
  },
  submitInfo(){
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let nameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    if(this.data.phone == ""){
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
    if (this.data.name == "") {
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
    if (this.data.plotName == "") {
      wx.showModal({
        content: '请重新选择小区',
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
    if (!myreg.test(this.data.phone)) {
      let that = this;
      wx.showModal({
        content: '请输入有效手机号',
        success(res) {
          if (res.confirm) {
            that.setData({
              phone:""
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    if (!nameReg.test(this.data.name)) {
        console.log("1")
      let that = this;
      wx.showModal({
        content: '请重新输入您的姓名',
        success(res) {
          if (res.confirm) {
            that.setData({
              name: ""
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    app.globalData.$post('agenthouseCutomer/CEntrusController/saveCEntrus', {
      'id': '',
      'userName': this.data.name,
      'phone': this.data.phone,
      'communityId': this.data.plotid,
      'remark': this.data.message,
      'customerSourceCode': this.data.customerSourceCode,
      'sex': this.data.renterSex
    }).then((res) => {
      if (res.code == 0) {
        let _this = this;
        wx.showModal({
          content: '信息保存成功',
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "/pages/personalCenter/personalCenterIndex/personalCenterIndex",
              })
            } else if (res.cancel) {
              wx.navigateTo({
                url: '/pages/personalCenter/personalCenterIndex/personalCenterIndex',
              })
            }
          }
        })

      } else {
        wx.showModal({
          content: res.msg,
          success(res) {
            if (res.confirm) { 
            } else if (res.cancel) {
            }
          }
        })
      }
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

  }
})