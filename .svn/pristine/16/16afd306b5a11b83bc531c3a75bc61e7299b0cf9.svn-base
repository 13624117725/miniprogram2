// pages/personalCenter/MyCollection/MyCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CheckIndex:"1",
    showData: [],
    newShow:true,
    BinfoShow: true,
    rentShow: true,
    noData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },
  // 切换
  chouse(e){
    this.setData({
      CheckIndex: e.currentTarget.dataset.idex
    });
    this.getHouse(this.data.CheckIndex)
  },
  
  getHouse(n){
    this.setData({
      showData: []
    })
    getApp().globalData.$get(`user/CollectController/getAllByUid?size=100&type=${n}`).then(res=>{
      console.log(res)
      let noData = false
      if (res.code == 200 && res.data){
        if (res.data.collectList.length>0){
          res.data.collectList.forEach(item => {
            if (item.imageName && item.imageName.indexOf("img.guoanfamily") == -1) {
              item.imageName = 'https://img.guoanfamily.com/' + item.imageName
            }
          })
          this.setData({
            showData: res.data.collectList
          }) 
         
        }else{
          noData=true
        }
        
          
        
      }else{
        noData = true
      }
      this.setData({
        noData
      })

    })
  },  
  /**
   * 生命周期函数--监听页面显示
   */
  //跳转到新房详情
  goNewHouseDetail(e){
    console.log(e)
    let $id = e.currentTarget.dataset.buildid.split("=")[1];

    wx.navigateTo({
      url: `/pages/new/newHouseDetail/newHouseDetail?buildId=${$id}`
    })
  },
  //跳转租房详情
  gaHouseListlis(e){
    console.log(e.currentTarget.dataset.producttype.split("="))
    let $id = e.currentTarget.dataset.producttype.split("=")[1].split("&")[0];
    let $producttype = e.currentTarget.dataset.producttype.split("=")[2];
    console.log($producttype)
    console.log(e)
    wx.navigateTo({
      url: '/pages/rent/rentDetails/rentDetails?id=' + $id + '&productType=' + $producttype,
    })
  },
  // 查看户型详情
  showType(e) {
    let collecturl = e.currentTarget.dataset.collecturl;
    console.log(collecturl.split("="))
    console.log(e)
    let typeid = collecturl.split("=")[1].split("&")[0];
    let buildid = collecturl.split("=")[3];
    // let typeid = e.currentTarget.dataset.id
    // let buildid = e.currentTarget.dataset.buildid
    wx.navigateTo({
      url: `/pages/new/houseType/houseType?typeid=${typeid}&buildid=${buildid}`,
    })
  },
  onShow() {
    this.getHouse('1')
  },
// 取消收藏
  editHear(e){

    let data = {
      collectUrl: e.currentTarget.dataset.collecturl
    }
    let dataType = Number(e.currentTarget.dataset.type)
    getApp().globalData.$post('user/CollectController/delCollectInfo', data).then(res=>{
      console.log(res)
      if (res.code == 200) {
        // this.msgalert("取消收藏成功");
        
        this.getHouse(dataType);
        let a = wx.getStorageSync("userInfo");
        console.log(a)
        let arr = a.collectList;
        let hrefs = data.collectUrl;
        arr.splice(arr.indexOf(hrefs), 1);
        a.collectList = arr;
        console.log(arr)
        wx.setStorageSync("userInfo", a)
      }
    });
  },

})