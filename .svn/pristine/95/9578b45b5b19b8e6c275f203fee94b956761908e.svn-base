const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 400,
    circular: true,
    housesList:[
      {
        name:"环京",
        English:'HUANJING',
        id:'0'
      },
      {
        name: "北海",
        English: 'BEIHAI',
        id: '1'
      },
      {
        name: "葫芦岛",
        English: 'HULUDAO',
        id: '2'
      },
      {
        name: "峨眉山",
        English: 'EMEISHAN',
        id:"3"
      }
    ],
    loupan_list:[],



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.imgUrls();
    this.newHouseList();
  },
  //列表点击
  housesListGo(e){
    let $id = e.currentTarget.dataset.id;
    switch ($id){
      case "0":
        this.topaster($id)
      break;
      case "1":
        this.topaster($id)
        break;
      case "2":
        this.topaster($id)
        break;
      case "3":
        this.topaster($id)
        break;
    }
  },
  // 查看楼盘
  topaster(n){
    wx.navigateTo({
      url: `/pages/new/buildposter/buildpposter?Num=${n}`,
    })
  },
  turnRouter(route) {
    app.globalData.ctxPath = `https://www.guoanfamily.com/guoanjiaApp/${route}from=xiaochengxu`
    wx.navigateTo({
      url: '/pages/first/first'
    })
  },
  imgUrls() {
    app.globalData.$get("palmsaleapp/api/v1/banner/appList?projectType=4", {
      interfaceType: "newHouse"
    }).then((res) => {
      let imgs = [];
      let resArr = res.data;
      let newhArr = resArr.filter(item=>{

        return item.systemtypename == "新房首页"
      })
      imgs = newhArr.map(item=>{
        return {
          url: 'http://img.guoanfamily.com/' + item.multimefileName,
          id: item.id
        }
      })
      this.setData({
        imgUrls: imgs
      })
      console.log(this.data.imgUrls)
    });
  },
  newHouseList(){
    app.globalData.$get("palmsaleapp/api/v1/build/buildListApp?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList=&porttype", {
      interfaceType: "newHouse"
    }).then((res) => {
      let list = res.data;
      let lists = [];
      list.map((item,index)=>{
        item.buildPictureList = item.buildPictureList.slice(0,5);
        return item;
      })
      this.setData({
        loupan_list: list
      })
    });
  },
  
  //北海
  gethouselist(e){
    let $id = e.detail;
    this.turnRouter("#building_detial?buildID=" + $id + "&");
  },
 
  // 跳转页面
  turnRouter(route) {
    app.globalData.ctxPath = `https://www.guoanfamily.com/guoanjiaApp/${route}from=xiaochengxu`;
    wx.navigateTo({
      url: '/pages/first/first'
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

    let path = `/pages/new/newIndex/newIndex`
    return {
      title: "国安家新房",
      path: path,
      imageUrl: this.data.imgUrls[0]['url'] + "?imageView2/0/w/370",
      success: function (res) {
        wx.showModal({
          title: "温馨提示：",
          content: '分享成功',
        })
      }
    }

  }
})