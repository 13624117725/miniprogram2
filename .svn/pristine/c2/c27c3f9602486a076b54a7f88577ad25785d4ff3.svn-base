Page({
  /**
   * 页面的初始数据
   */
  data: {
    bigPicture:false,//图片放大
    savehouse:{},//收藏列表
    isSaved:false,
    hertImage:"https://img.guoanfamily.com/miniProgram/shoucang01.png",//心形图片
    indicatorDots: true,
    Istab:false,//是否是主动切换
    autoplay: true,
    interval: 5000,
    duration: 400,
    currentNum:0,//轮播初始化的索引值
    newCurrent:0,//轮播切换后的索引
    buildinfo:{},
    imgUrls:[],
    Bid:"",
    bottomShow:true,
    swiperArr:[],//轮播图
    buileType:{
      YangbanImg :0,//样板间
      ShijingImg: 0,//实景
      GuihuaImg: 0,//规划
      EffectImg: 0 //效果图
    },
    // 弹幕
    barList: [
      {
        text: "品牌开发商很有实力，值得信赖。",
        settime: 5,
        num: 5,
        dame: "1"
      },
      {
        text: "楼盘所在的位置很有发展潜力，我觉得可以来一套。",
        settime: 6,
        num: 6,
        dame: "2"
      },
      {
        text: "户型还不错，使用率挺高的！",
        settime: 9,
        num: 6,
        dame: "3"
      },
      {
        text: "项目绿化率挺高，满眼都是绿色。",
        settime: 4,
        num: 2,
        dame: "5"
      }
    ],
    allDanmu: [
      "品牌开发商很有实力，值得信赖",
      "楼盘所在的位置很有发展潜力，我觉得可以来一套",
      "户型还不错，使用率挺高的",
      "项目绿化率挺高，满眼都是绿色",
      "看介绍还不错，有时间准备去现场看看",
      "采光还挺好，楼间距也挺宽",
      "项目周边配套还有待完善，但我相信会越来越好",
      "应该买一套旅居的房产，度假用",
      "有时间带家人去看看，我很喜欢这个楼盘",
      "我觉得平时不住，投资也可以啊，做个民宿也不错"
    ],
    loading:true
  },
  // 查看更多
  showMore(){
    
    this.setData({
      bottomShow: !this.data.bottomShow
    });
  },
  // 轮播切换事件
  SwiperChange(e){
  
    this.setData({
      newCurrent:e.detail.current
    })
  },

  SwiperChange2(e){
    this.setData({
      currentNum: e.detail.current
    })
  },
  swiperClick(e){
      console.log(e)
      this.setData({
        bigPicture:true
      })
  },
  bigPicture(e){
    this.setData({
      bigPicture: false
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDanmu();
    this.setData({
      Bid: options.buildId
    });
  },
  // 收藏
  Toresave(){
    let token = wx.getStorageSync("token")
    if (!token){
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return false
    }
    
    if (!this.data.isSaved){
      let postData = {
        collectTitle: this.data.buildinfo.buildname, //楼盘名
        collectResume: this.data.buildinfo.averageprice, //价格
        collectContent: this.data.buildinfo.address, //地址
        adjunctContent: this.data.buildinfo.buildingarea, //建筑面积
        imageName: this.data.swiperArr[0]['src'], //图片名称
        collectUrl: `#/building_detial?buildID=${this.data.Bid}`, //当前url
        type: "1" //收藏的类型,楼盘为1,户型为2
      };
      getApp().globalData.$post(`user/CollectController/saveCollectInfo`, postData).then(res => {
        this.setData({
          hertImage: "https://img.guoanfamily.com/miniProgram/shoucang02.png",
          isSaved: true
        })
        this.data.savehouse.collectList.push(postData.collectUrl)
        this.setSave()
        wx.showToast({
          title: '收藏成功',
          icon: 'none',
          duration: 2000
        })
      })
    }else{
      let postData = {
        collectUrl: `#/building_detial?buildID=${this.data.Bid}`
      }
      getApp().globalData.$post(`user/CollectController/delCollectInfo`, postData).then(res => {
        this.setData({
          hertImage: "https://img.guoanfamily.com/miniProgram/shoucang01.png",
          isSaved: false
        })
        let index = this.data.savehouse.collectList.indexOf(postData.collectUrl)
        this.data.savehouse.collectList.splice(index,1)
        this.setSave()    
        wx.showToast({
          title: '取消收藏',
          icon: 'none',
          duration: 2000
        })
      })
    } 
  },
  // 分享
  onShareAppMessage(options) {
    let path = `/pages/new/newHouseDetail/newHouseDetail?buildId=${this.data.Bid}`
    return {
      title:this.data.buildinfo.buildname,
      path: path,
      imageUrl: this.data.swiperArr[0]['src'] +"?imageView2/0/w/370",
      success: function (res) {
        wx.showModal({
          title: "温馨提示：",
          content: '分享成功',
        })
      }
    }
  },
 
// 初始化数据
  getData(id){
    getApp().globalData.$get(`palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=${id}`).then(res=>{
      if (res.status==200){
        this.setData({
          loading:false
        })
        console.log(res)
        let showArr = []
        let ImgArray = res.data.buildPictureList;
        let YangbanImg = 0;//样板间
        let ShijingImg = 0;//实景
        let GuihuaImg = 0;//规划
        let EffectImg = 0;//效果图
        
        ImgArray.forEach((item,index)=>{
          item.picturename = "https://img.guoanfamily.com/" +item.picturename;
          if (item.picturetype==2){
            YangbanImg++;
            let obj = {
              src: item.picturename,
              picturetype:"2"
            }
            showArr.push(obj)
          }
          if (item.picturetype == 3){
            ShijingImg++;
            let obj = {
              src: item.picturename,
              picturetype: "3"
            }
            showArr.push(obj)
          }
          if (item.picturetype == 6) {
            GuihuaImg++;
            let obj = {
              src: item.picturename,
              picturetype:'1'
            }
            showArr.push(obj)
          }
          if (item.picturetype == '0') {
            EffectImg++;
            let obj = {
              src: item.picturename,
              picturetype: item.picturetype
            }
            showArr.push(obj)
          }
        })
      //  插入排序
        function selectSort(arr) {
          for (var i = 0; i < arr.length; i++) {
            //设置当前范围最小值和索引
            var min = arr[i];
            var minIndex = i;
            //在该范围选出最小值
            for (var j = i + 1; j < arr.length; j++) {
              if (min['picturetype'] > arr[j]['picturetype']) {
                min = arr[j];
                minIndex = j;
              }
            }
            //将最小值插入,并将原来位置的最小值删除
            arr.splice(i, 0, min);
            arr.splice(minIndex + 1, 1);
          }
        }
        selectSort(showArr);

        // 楼盘基本
        
        // 户型图
      
        res.data.buildTypeList.forEach(its=>{
          console.log(its)
          if (its.housetypefilename.indexOf(",")>-1){
            its.housetypefilename = "https://img.guoanfamily.com/" + its.housetypefilename.split(",")[0] + "?imageView2/0/w/235/h/160"
          }else{
            its.housetypefilename = "https://img.guoanfamily.com/" + its.housetypefilename + "?imageView2/0/w/235/h/160"
          }
          
        })
        this.setData({
          buildinfo:res.data,
          buileType: {
            YangbanImg,//样板间
            ShijingImg,//实景
            GuihuaImg,//规划
            EffectImg //效果图
          },
          swiperArr: showArr
          
        })   
      }
    }).then(()=>{
      let self = this
      let savehouse ={}
      wx.getStorage({
        key: 'userInfo',
        success(res) {
          savehouse = res.data      
          res.data.collectList.forEach(item=>{
            if (`#/building_detial?buildID=${self.data.Bid}` == item){
              self.setData({
                isSaved:true,
                hertImage: "https://img.guoanfamily.com/miniProgram/shoucang02.png"
              })
            }
          })
          self.setData({
            savehouse
          })
        }
      });
      
    })
  },
  
  // 设置缓存
  setSave(){
    wx.setStorage({
      key: 'userInfo',
      data: this.data.savehouse
    })
  },
 
  // 快速跳转swiper
  SwiperMove(e){
    this.setData({
      Istab: true,
      duration: 0
    });
    setTimeout(()=>{
      let keyType = e.currentTarget.dataset.type;
      let bool = true;
      this.data.swiperArr.forEach((item, index) => {
        if (bool) {
          if (item.picturetype == keyType) {
            this.setData({
              currentNum: index
            })
            bool = false;
            return bool
          }
        }
      },10)
    })
  },
  // 轮播切换完成
  SwiperFinished(){
    if (this.data.Istab){
      this.setData({
        Istab:false,
        duration: 400
      })
    }
  },
  // 制作弹幕
  getDanmu() {
    let len = 10;
    for (var i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * len);
      this.data.barList[i].text = this.data.allDanmu[num];
      this.data.allDanmu.splice(num,1)
      len--;
    }
    this.setData({
      barList: this.data.barList
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let bid =this.data.Bid
    this.getData(bid)
    this.setData({
      imgUrls: ["https://media.guoanfamily.com/rent/static/HomePage/dt.png"]
    })

  },
  showHouseInLine() {
    this.showToast("暂无房源信息")
  },  
  // 提示
  showToast(msg) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
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
  Call(){
    wx.makePhoneCall({
      phoneNumber: '400-900-2225' //仅为示例，并非真实的电话号码
    })
  },
  // 查看户型详情
  showType(e) {
    console.log(e)
    let typeid = e.currentTarget.dataset.id
    let buildid = e.currentTarget.dataset.buildid
    wx.navigateTo({
      url: `/pages/new/houseType/houseType?typeid=${typeid}&buildid=${buildid}`,
    })
  },
  // 预定
  Predetermine(){
    let token = wx.getStorageSync("token");
    if (!token){
      wx.navigateTo({
        url: '/pages/login/login',
      });
      return false
    }else{
      wx.navigateTo({
        url: `/pages/new/predetermine/predetermine?id=${this.data.Bid}`,
      })
    }
  }
})
