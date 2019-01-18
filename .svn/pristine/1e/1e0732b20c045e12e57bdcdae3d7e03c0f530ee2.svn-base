// pages/rent/rentDetails/rentDetails.js

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    productType:'',
    hertImage: "https://img.guoanfamily.com/miniProgram/shoucang01.png",//心形图片
    hertImageChecked: "/img/icon/starSolid.png",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 400,
    circular: true,
    imgUrls:[],
    //轮播图数据
   // demo01_list: this.imgUrl,//轮播图图片列表
    demo02_index: 0,//轮播图下标
    bottomShows: false,//底部文字
    previewerIndex: '',//previewer的下标
    imgUrl: [],//从轮播图数组中拼接房间img
    imgLength: 0,//imgUrl数组的长度
    everyName: [],//每个房间的名字
    previewerList: [],//缩略图img的src
    everyNamelength: 0,
    isHaveDraw: false,//是否有客厅
    collectUrl: '',//

    id: '',//该房间|房源的id
    productType: '',
    images: '',//收藏的图片入参
    type: '',//收藏传入的参数
    isthisHouse: '',//是否为本房间
    islookroom: false,//查看其它放房间

    collectNo: 'color:#535353',
    collectYes: 'color:#ff5f31',
    isCollect: false,//是否收藏
    Price: '',//租金
    advantageTagsArr: [],//房源、房间标签
    communityName: '',//小区名字
    houseName: '',//房源名字
    roomName: '',//房间名字
    roomNumber: '',//房间序号
    Orientation: '',//朝向
    Area: '',//面积
    buildFloor: '',//层数
    roomNo: '',//几室
    livingNo: '',//几厅
    afterRoom: '',//优化后几厅
    afterLiving: '',//优化后几厅
    advantageEnvironment: '',//房源介绍
    isHaveEnvironment: true,//是否有房源介绍
    recommend: '',//小区介绍
    isHaveRecommend: true,//是否有小区介绍
    isHaveCommunityImages: true,//是否有小区图片

    surrounding: '',//周边
    isHaveSurrounding: true,//是否有周边信息
    circumjacentTraffic: '',//交通
    ishaveTraffic: true,
    roomId: '',//当前房间id
    houseId: '',//当前房源id
    roomItems: [],//房屋配套
    roomList: [],//房屋室友信息
    isHaveroomList: true,//是否有室友房间信息
    communityList: [],//小区
    communityLength: '',//小区图片的长度
    recommendList: [],//推荐
    recommendLength: '',//推荐的长度
    address: '11',
    facilityItemFirst: {
      "0": "facilityItemFirst"
    },
    facilityItemName: "0014001",
    colledtName: '',//房间显示的名字和收藏的名字
    areaName: '',//区域名字
    isRoomOrHouse: '',//是合租还是整租
    depositImg: '',
    hasDepositContract: '',
    roomArr: [],//推荐数组
    isHaveGaj: true,
    isAppointment: false,
    isRent: false,
    shareName: '',
    longitude: "",
    latitude: "",
    userId: '',//当前登录者的userId
    hasAppoint: false,//当前登陆者是否约看该房间
    newCollectUrl: '',//收藏路径后半部分
    isLoding: true,//loding页面是否显示
    advantageTagsCollect: '',//收藏房间标签
    loading:true,
    androidOrIos: true,
    market: false,
    shareAlert: false,
    UserPhoneNum: '',
    lookUrl: "",
    collectHashUrl: "",	//3-16.收藏改成传入hash值给后台
    supernatantTel: "",//接收的电话号
    active418: false,
    roomFloor: '',
    barList: [
      {
        text: "房屋装修精致 周边环境优雅",
        settime: 5,
        num: 5,
        dame: '1'
      },
      {
        text: "国安家的房子很不错",
        settime: 6,
        num: 6,
        dame: '2'
      },
      {
        text: "越来越好！",
        settime: 9,
        num: 6,
        dame: '3'
      },
      {
        text: "很喜欢这里的环境，真的很不错！",
        settime: 3,
        num: 4,
        dame: ''
      }
    ],
    allDanmu: [
      "采光好，阳光满满",
      "随意装扮都是轻奢范儿",
      "芥绿色的墙，能提高工作效率",
      "卧室装配巧妙温馨",
      "墙面颜色很雅致",
      "房间远离马路，安静舒适",
      "落地窗真是明亮清爽呀",
      "木色家居，淡雅如菊",
      "喜欢卧室的大衣柜",
      "衣柜空间大又格局好",
      "每天都有阳光拥抱我",
      "国安家的房子很不错",
      "很喜欢房子的装修",
      "恬淡安神，慵懒舒适",
      "房间永远干干净净",
      "家具实用精致有品质",
      "功能的空间划分合理",
      "懒人床桌太实用了",
      "室友超Nice~",
      "国安家真是物美价廉"
    ],
    borderBottom:0,
    item_list: [{
      url: '/img/icon/bed.png',
      name: '双人床'
    },
      {
        url: '/img/icon/chuangdian.png',
        name: '双人床垫'
      },
      {
        url: '/img/icon/threedoor.png',
        name: '三门衣柜'
      },
      {
        url: '/img/icon/guizi.png',
        name: '床头柜'
      },
      {
        url: '/img/icon/desk.png',
        name: '写字桌'
      },
      {
        url: '/img/icon/yizi.png',
        name: '写字椅'
      },
      {
        url: '/img/icon/wifi.png',
        name: 'WIFI'
      },
      {
        url: '/img/icon/kongtiao.png',
        name: '空调'
      },
      {
        url: '/img/icon/lock.png',
        name: '智能锁'
      },
      {
        url: '/img/icon/chazuo.png',
        name: '智能插座'
      },],
     icon_boy:'/img/icon/boy.png',
	   icon_girl:'/img/icon/girl.png',
     icon_none:'/img/icon/unkonw.png',
     quarterlyPay:'',
     halfAYearPay:"",
     yearPy:'',
    markers: [{
      iconPath: "/img/icon/ditu2.gif",
      id: 0,
      latitude:"" ,
      longitude:"",
      width:30,
      height:30
    }],
    polyline: [{
      points: [{
        longitude:"",
        latitude:""
      }, {
        longitude:"",
        latitude:""
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 0,
      iconPath: '/img/icon/block.png',
      position: {
        left: 10,
        top:10,
        width: 20,
        height: 20
      },
      clickable: true
    }],
    houseLongitude:'',
    houseLatitude:'',
    Bid:"",
    CollectionShowHide:'',
    Collection:false,
    isDownPay:false,
    downPayTitle:'该房源已被预订',
    bigPicture:false,
    roomitemname:'',
    height:"",
    current:0,//swiper1的索引
    tmpCurent:0
  },

  swiperClick(e){//轮播图点击事件
  console.log(e)
  this.setData({
    bigPicture:true,
    tmpCurent: this.data.tmpCurent
  })
  
  },
  bigPicture(){
    this.setData({
      bigPicture: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      productType: options.productType,
      collectHashUrl: "#/HouseList/houseDetail?id=" + options.id + "&productType=" + options.productType,
    });
    this.getHouseDetaile(options);
    this.getRecommendHouse(options)
    this.getDanmu();
    this.setData({
      Bid: options.id
    });
    let that = this;
    wx.getSystemInfo({

      success: function (res) {

        that.setData({

          height: res.windowHeight - (res.windowWidth / 750) * 94  +'px'

        })
        console.log(that.data.height)
      }

    })
   // 判断是否有token，有则执行getUserInfo获得userid，再获取房源详情
    let token = wx.getStorageSync("token");
    let phone = wx.getStorageSync("phoneNum");
    if (token && phone) {
      app.globalData.$post('agenthouseCutomer/common/getUserInfo', {//调取获取个人信息接口
      }).then((res) => {
        this.setData({
          loading: false
        })
        if (res.code == 0) {
         
          this.data.userId = res.data.userId;
          this.getHouseDetaile(options);
        }
      });
    } else {
      this.getHouseDetaile(options);
    }
    //判断该房间是否被收藏
    let user = wx.getStorageSync("userInfo");
    let hashArr = user.collectList;
    let hashUrl = this.data.collectHashUrl
    for (let i = 0; i < hashArr.length; i++) {
      if (hashUrl == hashArr[i]) {
        this.setData({
          isCollect: true//收藏按钮变红
        })
        return;
      }
    }
    },
  move(){
    console.log('stop user scroll it!');
    return;
  },
  // 制作弹幕
  getDanmu() {
    let len = 10;
    for (var i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * len);
      this.data.barList[i].text = this.data.allDanmu[num];
      this.data.allDanmu.splice(num, 1)
      len--;
    }
    this.setData({
      barList: this.data.barList
    })
  },
  //swiper1
  bindchangeOne(e){
    

    this.data.tmpCurent = e.detail.current
  },
  bindchange2(e){
    this.setData({
      current: e.detail.current
    })
  },
  // 收藏
 
  getHouseDetaile(options){
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseDetail", {
      id: options.id,
      productType: options.productType,
      userId: this.data.userId
    }, {
    }).then((res) => {
        this.setData({
          markers: [{
            latitude: res.data.latitude,
            longitude: res.data.longitude,
            iconPath: '/img/icon/ditu2.gif',//图片
            width: 30,
            height: 30,
          }],
          latitude: res.data.latitude,
          longitude: res.data.longitude,
          loading:false
         
        })
        
      if (this.data.productType == "0019001" || this.data.productType == "0019003") {//判断是整租-合租
        this.setData({
          roomFloor:res.data.roomFloor,
          colledtName:res.data.roomName,
          Price:res.data.price,
          Orientation:res.data.roomOrientation,
          Area:res.data.usedArea,
          roomId:res.data.roomId,
          isRoomOrHouseL:true,
          quarterlyPay: Math.round(res.data.price*12*0.08),
          halfAYearPay: Math.round(res.data.price*12*0.07),
          yearPay: Math.round(res.data.price*12*0.06),
        })
        
        if (res.data.houseName == '东大桥店') {
          this.setData({
            shareName: res.data.houseName + res.data.roomFloor + res.data.roomNumber
          })
        } else {
          this.setData({
            shareName: res.data.houseName + res.data.roomName + res.data.roomNumber
          })
        }

        switch (res.data.intakeState) {
          case "0015001"://已预约
            this.setData({
              isAppointment:true
            })
            break;
          case "0015004"://已出租
            this.setData({
              isRent: true
            })
            break;
          default:
            this.setData({
              isAppointment:false,
              isRent:false
            })
            break;
        }
        if (res.data.assessmentRoom) {//房间描述
          this.setData({
            advantageEnvironment: res.data.assessmentRoom
          })
        } else {
          this.setData({
            isHaveEnvironment: false
          })
        }
        if (res.data.roomAdvantageTags) {//房间标签
          this.setData({
            advantageTagsCollect: res.data.roomAdvantageTags,
            advantageTagsArr: res.data.roomAdvantageTags.split(",", 6)
          })
        }

      } else if (this.data.productType == "0019002") {
        this.setData({
          colledtName: res.data.houseName,
          shareName: res.data.houseName,
          Price: res.data.rentPrice,
          Orientation: res.data.orientation,
          Area: res.data.coveredArea,
          roomId:'',
          isRoomOrHouse:false,
          quarterlyPay: Math.round(res.data.rentPrice * 12 * 0.08),
          halfAYearPay: Math.round(res.data.rentPrice * 12 * 0.07),
          yearPay: Math.round(res.data.rentPrice * 12 * 0.06)
        })
        switch (res.data.rentStatusCode) {
          case "0026002"://已预约
          this.setData({
            isAppointment: true
          })
            break;
          case "0026004"://已出租
            this.setData({
              isRent: true
            })
            break;
          default:
            this.setData({
              isAppointment: false,
              isRent: false
            })
            break;
        }
        if (res.data.advantageEnvironment) {//房源描述
          this.setData({
            advantageEnvironment: res.data.advantageEnvironment
          })
        } else {
          this.setData({
            isHaveEnvironment: false
          })
        }
        if (res.data.advantageTags) {//房源标签
        this.setData({
          advantageTagsCollect: res.data.advantageTags,
          advantageTagsArr: res.data.advantageTags.split(",", 6)
        })
        }
      }
      this.setData({
        hasDepositContract: res.data.hasDepositContract,//房间是否被预定
        images: res.data.roomBanners[0].roomFirst,
        houseId: res.data.houseId,
        address: res.data.buildAddress,
        communityName: res.data.communityName,
        houseName: res.data.houseName,
        roomName: res.data.roomName,
        areaName: res.data.areaName,
        afterRoom: res.data.changeRoomNo,
        afterLiving: res.data.changeLivingNo,
        buildFloor: res.data.buildFloor,
        // roomNo: res.data.roomNo,
        // livingNo: res.data.livingNo,
        hasAppoint: res.data.hasAppoint,//当前登陆者是否约看该房间
        roomNumber: res.data.roomNumber
      })
      if (res.data.recommend) {//是否有小区介绍
        this.setData({
          recommend: res.data.recommend
        })
      } else {
        this.setData({
          isHaveRecommend: false
        })
      }

      if (res.data.surrounding == null || res.data.surrounding == "") {
        this.setData({
          isHaveSurrounding:false
        })
        //console.log(this.isHaveSurrounding)
      } else {
        this.setData({
          surrounding: res.data.surrounding
        })
      }


      if (res.data.circumjacentTraffic == null || res.data.circumjacentTraffic == "") {
        this.setData({
          ishaveTraffic:false
        })
      } else {
        this.setData({
          circumjacentTraffic: res.data.circumjacentTraffic
        })
      }	
      /**********轮播图数据开始************/
      let imgOne = [];
      let imgTwo = [];
      for (let i = 0; i < res.data.roomBanners.length; i++) {
        if (res.data.roomBanners[i].roomFirst == null || res.data.roomBanners[i].roomFirst == "") {
          //如果没有图片，用暂无图片代替
         let itemOne = {};
          itemOne.img = 'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg';
          imgOne.push(itemOne)//所有房间的第一张照片
          this.setData({
            imgUrls: imgOne
          })
        } else {
          let itemTwo = {};
          itemTwo.img = "http://img.guoanfamily.com/" + res.data.roomBanners[i].roomFirst;
          imgTwo.push(itemTwo)//所有房间的第一张照片
          this.setData({
            imgUrls: imgTwo
          })
        }
      }
      let datas = this.data.imgUrls; 
      console.log(datas)
     if (res.data.roomBanners[0].roomSecond == null || res.data.roomBanners[0].roomSecond == "") {
         //如果没有图片，用暂无图片代替
            datas.splice(1, 0, { img: 'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg' })
        this.setData({
          imgUrls:datas
        })
      } else {
       datas.splice(1, 0, { img: "http://img.guoanfamily.com/" +  res.data.roomBanners[0].roomSecond })
          this.setData({
            imgUrls: datas//卧室第1张
          })
      }
      // //卧室第三张
      if (res.data.roomBanners[0].roomThird == null || res.data.roomBanners[0].roomThird == "") {
         //如果没有图片，用暂无图片代替
        datas.splice(2, 0, { img: 'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg' })
         this.setData({
           imgUrls: datas
         })
      } else {
        datas.splice(2, 0, { img: "http://img.guoanfamily.com/" +  res.data.roomBanners[0].roomThird })
        this.setData({
          imgUrls: datas//卧室第2张
         })
      }
      //房间物品配套信息
      console.log(res.data.roomItems)
      this.setData({
        roomItems:res.data.roomItems
      })
      //其他房间室友入住信息
      if (res.data.roomList) {
        this.setData({
          roomList: res.data.roomList.map((item, index) => {
            if (item.intakeStateCode == "0015004") {
              //已入住
              item.isIntakeState = true;
              switch (item.ownerSex) {
                case "1":
                  item.icon = this.data.icon_boy;
                  item.sexChinese = "男";
                  break;
                case "0":
                  item.icon = this.data.icon_girl;
                  item.sexChinese = "女";
                  break;
                case null:
                  item.icon = this.data.icon_none;
                  item.sexChinese = "未知";
                  break;
              }
            } else {
              item.isIntakeState = false;
              if (this.data.roomId == item.roomId) {
                item.isthisHouse = true
              } else {
                item.isthisHouse = false
              }

            }
            if (item.job === "无") {
              item.job = "保密";
            }
            return item;
          })
        })
      } else {
        this.isHaveroomList = false
      }

      //小区图片展示
      if (res.data.communityImages) {
        let communityImages = [];
        res.data.communityImages.split(",", 4).map((item,index) => {
          let items = {}
          items.url = !item || "http://img.guoanfamily.com/" + item;
          communityImages.push(items)
          return communityImages;
        })
        this.setData({
          communityList: communityImages
        })
      } else {
        this.data.isHaveCommunityImages = false;
      }

    })
  },
  clickFacility(e){
      this.setData({
        borderBottom: e.currentTarget.dataset.index,
        roomitemname: e.currentTarget.dataset.roomitemname
      })
    switch (this.data.borderBottom){
          case 0:
            this.setData({
              item_list:[
                {
                  url:'/img/icon/bed.png',
                  name:'双人床'
                },
                {
                  url: '/img/icon/chuangdian.png',
                  name: '双人床垫'
                },
                {
                  url: '/img/icon/threedoor.png',
                  name: '三门衣柜'
                },
                {
                  url: '/img/icon/guizi.png',
                  name: '床头柜'
                },
                {
                  url: '/img/icon/desk.png',
                  name: '写字桌'
                },
                {
                  url: '/img/icon/yizi.png',
                  name: '写字椅'
                },
                {
                  url: '/img/icon/wifi.png',
                  name: 'WIFI'
                },
                {
                  url: '/img/kongtiao.png',
                  name: '空调'
                },
                {
                  url: '/img/icon/lock.png',
                  name: '智能锁'
                },
                {
                  url: '/img/icon/chazuo.png',
                  name: '智能插座'
                },
                ]
            })
          break;
          case 1:
          if (this.data.roomitemname == "公共厨房"){
            this.setData({
              item_list: [
                {
                  url: '/img/icon/bingxiang.png',
                  name: '冰箱'
                },
                {
                  url: '/img/icon/youyanji.png',
                  name: '抽油烟机'
                },
                {
                  url: '/img/icon/weibolu.png',
                  name: '微波炉'
                },
                {
                  url: '/img/icon/ranqizao.png',
                  name: '燃气灶'
                },
              ]
            })
          
          }else{
            this.setData({
              item_list: [
                {
                  url: '/img/icon/luyou.png',
                  name: '路由器'
                },
              ]
            })
          }
           
          break;
        case 2:
        console.log("2")
        if (this.data.roomitemname == "公共卫生间") {
          this.setData({
            item_list: [
              {
                url: '/img/icon/xiyiji.png',
                name: '洗衣机'
              },
              {
                url: '/img/icon/hotwater.png',
                name: '热水器'
              },
            ]
          })
        }else{
          this.setData({
            item_list: [
              {
                url: '/img/icon/bingxiang.png',
                name: '冰箱'
              },
              {
                url: '/img/icon/youyanji.png',
                name: '抽油烟机'
              },
              {
                url: '/img/icon/weibolu.png',
                name: '微波炉'
              },
              {
                url: '/img/icon/ranqizao.png',
                name: '燃气灶'
              },
            ]
          })
        }
          
          break;
        case 3:
          this.setData({
            item_list: [
              {
                url: '/img/icon/xiyiji.png',
                name: '洗衣机'
              },
              {
                url: '/img/icon/hotwater.png',
                name: '热水器'
              },
            ]
          })
          break;
        case 4:
          this.setData({
            item_list: [
              {
                url: '/img/icon/xiyiji.png',
                name: '暂无'
              },
              {
                url: '/img/icon/xiyiji.png',
                name: '暂无'
              },
              
            ]
          })
          break;
      }
  },
  //获取推荐房源房间
  getRecommendHouse(options) {
    app.globalData.$post("agenthouseCutomer/HouseInfoController/recommendHouse", {
      "productType": options.productType,
      "id": options.id
    }).then((res) => {
      if (res.data.length == 0) {
        this.setData({
          isHaveGaj:false
        })
      } else {
        let recommendListArr = [];
        recommendListArr = res.data.map((item) => {
        
          if (item.image == null || item.image == "") {
            item.image = 'https://img.guoanfamily.com/rent/static/HomePage/noneImg1.jpg';
          } else {
            item.image = !item.image || "http://img.guoanfamily.com/" + item.image;
          }
          return item;
        })
        this.setData({
          recommendList: recommendListArr
        })
      }
    });
   
  },
 

  // 推荐房源跳转页面
  recommendDetali(e){
    let $id = e.currentTarget.dataset.id;
    let $producttype = e.currentTarget.dataset.producttype;
    wx.navigateTo({
      url: '/pages/rent/rentDetails/rentDetails?id=' + $id + '&productType=' + $producttype
    })  
  },
  // 查看房间
  toOthersRoom(e){
    let $id = e.currentTarget.dataset.id;
    let $producttype = e.currentTarget.dataset.producttype;
    wx.navigateTo({
      url: '/pages/rent/rentDetails/rentDetails?id=' + $id + '&productType=' + $producttype
    }) 
  },
  // 验证值是否为空，undefined 或者为字符串空值
  notEmpty(value) {
    if (value === null || value === undefined || value === "null" || value === "undefined" || value === "") {
      return true;
    } else {
      return false;
    }

  },
  //收藏房间
  collectFunc() {
    let token = wx.getStorageSync("token");
    let phone = wx.getStorageSync("phoneNum")
    if (token && phone) {
      this.collect();
    } else {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },
  collect(){

    switch (this.data.productType) {
      case "0019001":
        this.setData({
          type:3
        })
        break;
      case "0019003":
        this.setData({
          type:3
        })
        break;
      case "0019002":
        this.setData({
          type:3
        })
        break;
    }
    if (!this.data.isCollect) {
      app.globalData.$post("user/CollectController/saveCollectInfo", {
        "collectTitle": this.data.shareName,//名称
        "collectResume": this.data.Price,//价格
        "collectContent": this.data.address,//地址
        "imageName": this.data.images,//如123.png
        "collectUrl": this.data.collectHashUrl,//当前url
        "type": this.data.type,//收藏类型
        "adjunctContent": this.data.Area,//面积
        "afterRoom": this.data.afterRoom + "室",//几室
        "afterLiving": this.data.afterLiving + "厅",//几厅
        "productType": this.data.productType,
        "productId": this.data.id,
        "advantageTagsArr": this.data.advantageTagsCollect,//标签
        "buildFloor": this.data.buildFloor + "层",//楼层
        "source": '1'
      }, {
          interfaceType: "collect"
        }).then((res) => {
          //console.log('收藏参数中拼接的id和type为',this.newCollectUrl);
          if (res.code === 200) {
            // this.msgalert("收藏成功");
            this.setData({
              isCollect:true,
              // CollectionShowHide:"收藏成功",
              Collection:true
            })
            wx.showToast({
              title: '收藏成功',
              icon: 'none',
              duration: 2000
            })
            setInterval(()=>{
              this.setData({
                Collection: false
              })
            }, 2000)
            let user = wx.getStorageSync("userInfo");
            // let user = this.getStorage(this.KEYS.USER_INFO_MAP);//获取localstorage
            user.collectList.push(this.data.collectHashUrl);//将当前页面的hash值存到数组
            wx.setStorageSync("userInfo", user);//设置localstorge
          } else if (res.code === 10033) {
            //that.msgalert("您已收藏过该房间");
            this.setData({
              CollectionShowHide: "您已收藏过该房间",
              Collection: true
            })
            // wx.showToast({
            //   title: '收藏成功',
            //   icon: 'none',
            //   duration: 2000
            // })
            setTimeout(() => {
              this.setData({
                Collection: false
              })
            }, 2000)
            return false;
          }
        });
    } else {//取消收藏
      //确定执行
      app.globalData.$post("user/CollectController/delCollectInfo", {
        "collectUrl": this.data.collectHashUrl,//当前url的后半部分
      }, {
          interfaceType: "collect"
        }).then((res) => {
          // that.msgalert("取消收藏成功");
          // that.isCollect = false;
          this.setData({
            isCollect: false,
            // CollectionShowHide: "取消收藏",
            Collection:true
          })
          wx.showToast({
            title: '取消收藏',
            icon: 'none',
            duration: 2000
          })
          setTimeout(()=>{
            this.setData({
               Collection:false
            })
          },2000)
          //遍历本地localStorage收藏数组
          var deleteUser = wx.getStorageSync('userInfo');
          let deleteUserArr = deleteUser.collectList;
          let href = this.data.collectHashUrl;
          for (let i = 0; i < deleteUserArr.length; i++) {
            if (href == deleteUserArr[i]) {
              deleteUserArr.splice(i, 1);
              wx.setStorageSync("userInfo", deleteUser);
              return;
            }
          }
        })
      return false;

    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  controltap(e){
    this.mapCtx.moveToLocation()
  },
  onReady: function () {
    this.mapCtx = wx.createMapContext('map')
  },
  // 立即下定
  downPay(){
    let token = wx.getStorageSync("token");
    if (token){
        if (this.data.hasDepositContract){
            this.setData({
              isDownPay:true,
              downPayTitle:'该房源已被预订'
            })
        }else{
          wx.navigateTo({
            url: '/pages/depositReservation/depositReservation?roomId=' + this.data.roomId + '&houseId=' + this.data.houseId + "&token=" + token
          })  
        }
        
    }else{
        wx.navigateTo({
          url: '/pages/login/login'
        }) 
    }
  },
  reservations(){
    let token = wx.getStorageSync("token")
    if (token) {
      if (this.data.hasDepositContract) {
        this.setData({
          isDownPay: true,
          downPayTitle: '该房源已被预订'
        })
        return false;
      } else if (this.data.hasAppoint) {//hasAppoint为false，当前登陆者没有约看过该房间
        this.setData({
          isDownPay: true,
          downPayTitle: '您已约看过了该房间哦！再看看其他房间吧~~'
        })  
        return false;
      }  else {
        wx.navigateTo({
          url: '/pages/rent/Reservations/Reservations?roomId=' + this.data.roomId + '&houseId=' + this.data.houseId + "&shareName=" + this.data.shareName + "&userId=" + this.data.userId
        })
      }

    } else {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let bid = this.data.Bid;
    this.setData({
      imgUrls: ["https://media.guoanfamily.com/rent/static/HomePage/dt.png"],
      loading:false
    })


  },
  // 分享
  onShareAppMessage(options) {
    console.log(this.data.imgUrls[0])
    let id = this.data.id;
    let productType = this.data.productType;
    let path = `/pages/rent/rentDetails/rentDetails?id=${id}&productType=${productType}`
    return {
      title: this.data.houseName,
      path: path,
      imageUrl: this.data.imgUrls[0]['img'] + "?imageView2/0/w/300",
      success: function (res) {
        wx.showModal({
          title: "温馨提示：",
          content: '分享成功',
        })
      }
    }
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
  // onShareAppMessage: function () {

  // }
})