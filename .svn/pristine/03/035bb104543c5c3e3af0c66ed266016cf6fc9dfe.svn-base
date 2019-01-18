// pages/new/houseType/houseType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cansave:true,//收藏是否可以点击
    options:{},
    swiperIndex:1,
    userInfo:{

    },
    buildtypeData:{},
    hertImage:"https://img.guoanfamily.com/miniProgram/shoucang01.png",
    isSaved: false,
    indicatorDots: true,
    Istab: false,//是否是主动切换
    autoplay: true,
    interval: 5000,
    duration: 400,
    swiperArr: [],//轮播图
    Bid:"",
    bigImage:"",
    bigImageShowHide:false
  },
  // 获取数据
  houseTyeonLoad(typeid) {
    let swiperArr = [];
    let buildtypeData = {}
    getApp().globalData.$get('palmsaleapp/api/v1/buildtype/findTypeinfoId?typeid=' + typeid).then(response => {
      console.log(response)
      buildtypeData = response.data[0];
      buildtypeData.salearea = buildtypeData.salearea.split("㎡")[0]
      if (!buildtypeData.housetypedetail || buildtypeData.housetypedetail==null){
        buildtypeData.housetypedetail = ""
      }
      let imgUrl = buildtypeData.housetypefilename;
      let imgSrc = "";
      if (imgUrl.indexOf(",")>-1){
        imgSrc = imgUrl.split(",")[0];
      }else{
        imgSrc = imgUrl;
      }
      // buildtypeData['buildTypePictureList'].forEach(item=>{
        let obj = {
          src: `https://img.guoanfamily.com/${imgSrc}`
        }
        swiperArr.push(obj);

      // })
      this.setData({
        swiperArr,
        buildtypeData
      })
      
    }, response => {
      
    });
  },
  // 房贷计算器
  ToComputed(){
    getApp().globalData.turnRouter("#/Calculator?")
  },
  SwiperChange(e){
    this.setData({
      swiperIndex:( e.detail.current+1)
    })
    
  },
  bigImage(e){
    let img = e.currentTarget.dataset.img;
    this.setData({
      bigImage: img,
      bigImageShowHide:true
    })

  },
  closeBigImage(){
    this.setData({
      bigImageShowHide: false
    })
  },
  closeBig(){

  },
  // 收藏
  Toresave(){
    if(this.data.cansave){
      // this.setData(
      //   {cansave:false}
      // )
      this.data.cansave=false
      if (this.data.hertImage.indexOf('shoucang01') != -1) {
        // 主动收藏
        let postData = {
          "collectTitle": this.data.buildtypeData.housetypecode,//户型
          "collectResume": this.data.buildtypeData.salearea,//大小
          "collectContent": this.data.buildtypeData.housetypedescribe,//厅室卫
          "adjunctContent": this.data.buildtypeData.towards,//朝向
          "imageName": this.data.swiperArr[0]['src'],//图片名称
          "collectUrl": `#/houseType?typeid=${this.data.options.typeid}&buildid=${this.data.options.buildid}`,//当前url
          "type": '2',//收藏的类型,楼盘为1,户型为2
        }
        
        getApp().globalData.$post('user/CollectController/saveCollectInfo', postData).then(res => {
          this.setData({
            hertImage: "https://img.guoanfamily.com/miniProgram/shoucang02.png"
          })
          // wx.showModal({
          //   title: "温馨提示：",
          //   content: '收藏成功',
          // })
          wx.showToast({
            title: '收藏成功',
            icon: 'none',
            duration: 2000
          })
          this.data.userInfo.collectList.push(postData.collectUrl)
          wx.setStorageSync('userInfo', this.data.userInfo)
          this.data.cansave = true;

        })
      } else {
        // 取消收藏
        let postData = {
          collectUrl: `#/houseType?typeid=${this.data.options.typeid}&buildid=${this.data.options.buildid}`,
        }
        // wx.showModal({
        //   title: "温馨提示：",
        //   content: '取消收藏',
        // })
        wx.showToast({
          title: '取消收藏',
          icon: 'none',
          duration: 2000
        })
        getApp().globalData.$post('user/CollectController/delCollectInfo', postData).then(res => {
          this.setData({
            hertImage: "https://img.guoanfamily.com/miniProgram/shoucang01.png"
          })
          let n = this.data.userInfo.collectList.indexOf(postData.collectUrl)
          this.data.userInfo.collectList.splice(n,1)
          wx.setStorageSync('userInfo', this.data.userInfo)
          this.data.cansave = true;
        })
        
      }
    }
      
  },
  Predetermine() {
    let token = wx.getStorageSync("token");
    if (!token) {
      wx.navigateTo({
        url: '/pages/login/login',
      });
      return false
    } else {
      wx.navigateTo({
        url: `/pages/new/predetermine/predetermine?id=${this.data.Bid}`,
      })
    }
  },
  showHouseInLine() {

    wx.showToast({
      title: "暂无房源信息",
      icon: 'none',
      duration: 2000
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    this.setData({
      options,
      userInfo: wx.getStorageSync('userInfo'),
      Bid: options.buildid
    })
    if (this.data.userInfo.collectList){
      this.data.userInfo.collectList.forEach(item => {
        if (item.indexOf(options.typeid) != -1) {
          this.setData({
            hertImage: "https://img.guoanfamily.com/miniProgram/shoucang02.png"
          })
        }
      })
    }
      
    this.houseTyeonLoad(options.typeid)
    
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