const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    regionLefIndex:"",
    regionLefName:'',
    metroLeftIndex: "",
    metroLeftId: "",
    regionLeftBuXian:false,
    regionRightBuXian:false,
    metroLefttBuXian:false,
    metroRightBuXian:false,
    cearchListShow:false,
    titleListOne:"",
      searchHistoryArr:[],
      searchHistory:"",
      minValue:"500",
      maxValue:'10000',
      Iptvalue:"",
      titleList:[
        {
          name: "区域",
          img: "/img/icon/stop1.png",
          id:"0"
        },
        {
          name: "地铁",
          img: "/img/icon/stop1.png",
          id: "1"
        },
        {
          name: "价格",
          img: "/img/icon/stop1.png",
          id: "2"
        },
        {
          name: "筛选",
          img: "/img/icon/stop1.png",
          id: "3"
        },
      ],
    Type:"",//房型
    roomNoType:'',//卧室数量
    orientationType:'',//朝向
    userAreaType:'',//面积大小
    genderType:'',//室友性别
    constellationType:'',//星座
    featureType:"",//更多
    regionLeft:[],
    redColorShowHide:false,
    regionRight:[],
    screenShowHide: false,/* 区域显示隐藏 */
    rentHouseList:[],
    rentHouseListShowHide:false,
    screenOneShowHide: false,/*地铁显示隐藏  */
    metroLeft:[],
    metroRight:[],
    totalNum:[],
    bottomShow:false,//底部信息

    subwayLineId:'',

    leftMin: 500, //左边滑块最小值
    leftMax: 5000, //左边滑块最大值
    rightMin: 5000, //右边滑块的最小值
    rightMax: 10000, //右边滑块最大值
    leftValue: 500, //左边滑块默认值
    rightValue: 10000, //右边滑块默认值
    lowValue: 0,//最小价格
    heighValue:0,//最大价格
    leftWidth: '50', //左边滑块可滑动长度：百分比
    rightWidth: '50', //右边滑块可滑动长度：百分比
    productTypes: [
        { id: '0019001', type: "合租", fangxing:true},
      { id: '0019002', type: "整租", fangxing: false},
      { id: '0019003', type: "国安家Home", fangxing: false}
      ],
    roomNos: [
         { id: '1', type: "一居", },
         { id: '2', type: "二居" },
         { id: '3', type: "三居" },
         { id: '4', type: "四居" },
         { id: '5', type: "五居" }
      ],
    size: [
        {id:"0",type:"不限"},
        { id: '1', type: "10㎡以下", },
        { id: '2', type: "10-12㎡" },
        { id: '3', type: "12-15㎡" },
        { id: '4', type: "15-20㎡" }, 
        { id: '5', type: "20㎡以上" }
      ],
    orientationList: [
        { code: "0011005", type: "东", },
        { code: "0011002", type: "南" },
        { code: "0011004", type: "西" },
        { code: "0011006", type: "北", },
        { code: "0011001", type: "南北" },
        { code: "0011003", type: "东南", }
      ],
    // orientationList:["东","南","西","北","暗","南北","东南"],
    feature: [
      // { flat: false, type: "3D实景" },
       { flat: false, type: "独立卫生间",ct:0, }, 
       { flat: false, type: "独立阳台", ct:0, },
      ],
    genderList: [
      {    //下拉
        value: '1',
        label: '都是帅哥'
      }, {    //下拉
        value: '0',
        label: '都是美女'
      }, {    //下拉
        value: '2',
        label: '异性空间'
      },
    ],
    constellationList: [{
      flat: false,
      type: '水瓶'
    }, {    //下拉
      flat: false,
      type: '双鱼'
    }, {
      flat: false,
      type: '白羊'
    }, {    //下拉
      flat: false,
      type: '金牛'
    }, {
      flat: false,
      type: '双子'
    }, {    //下拉
      flat: false,
      type: '巨蟹'
    }, {
      flat: false,
      type: '狮子'
    }, {    //下拉
      flat: false,
      type: '处女'
    }, {
      flat: false,
      type: '天秤'
    }, {    //下拉
      flat: false,
      type: '天蝎'
    }, {
      flat: false,
      type: '射手'
    }, {    //下拉
      flat: false,
      type: '魔蝎'
    },],
    // productType:"",//房型
    // roomNo:'',//户型
    // orientation:'',//朝向
    // userAreaMax:'',//面积
    // roommateSex:'',//室友性别
    // roommateConstellation:'',//星座
//size = PAGE_SIZE;   //页码
      textSearch: "",     //按照小区区域等文字搜索
      districtId: "",     //城区id
      regionId: "",      //国安家区域id
      subwayLineId: "",        //地铁线路id
      stationsId: "",    //站点id
      priceMax: "",        //价格上限
      priceMin: "",     //价格下限
      productType: "",        //房源产品类型
      roomNo: "",     //卧室数量
      userAreaMin: "",        //最小使用面积
      userAreaMax: "",        //最大使用面积
      lookUrl: "",            //是否有3D链接
      orientation: "", //房源、房屋朝向code
      hasIndieRestRoom: "",   //是否独立卫生间
      hasVeranda:"",     //是否独立阳台
      roommateSex:"",     //室友性别
      roommateConstellation:"",     //室友星座
      fangxing:false,
      loading:true,
      quyus:'',

  },
  // 左边滑块滑动的值
  leftChange: function (e) {
    console.log('左边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      leftValue: e.detail.value //设置左边当前值
    })
  },
  // 右边滑块滑动的值
  rightChange: function (e) {
    console.log('右边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      rightValue: e.detail.value,
    })
  },

  titleList(e){
      let that = this;
      let $index = e.currentTarget.dataset.index.toString();
      switch ($index){
        case "0":
        // this.setData({
        //   regionLefName: ""
        // })
        if (!this.data.screenShowHide){
          this.setData({
            screenShowHide: true,
            screenOneShowHide: false,
            screenTwoShowHide: false,
            screenThreeShowHide: false,
           
          })
          this.selectComponent("#myslider1").hide()
          that.getAreaList()
        }else{
          this.setData({
            screenShowHide: false
          })
        }
       
        break;
        case "1":
          if (!this.data.screenOneShowHide) {
            this.setData({
              screenOneShowHide: true,
              screenShowHide: false,
              screenTwoShowHide: false,
              screenThreeShowHide: false
            })
            this.selectComponent("#myslider1").hide()
            that.getSubwayLine()
          } else {
            this.setData({
              screenOneShowHide: false
            })
          }
        break;
        case "2":
          if (!this.data.screenTwoShowHide) {
            this.setData({
              screenTwoShowHide: true,
              screenShowHide: false,
              screenOneShowHide: false,
              screenThreeShowHide: false
            })
            this.selectComponent("#myslider1").show()
          } else {
            this.selectComponent("#myslider1").hide()
            this.setData({
              screenTwoShowHide: false
            })
            
          }
        break;
        case "3":
          if (!this.data.screenThreeShowHide) {
            this.setData({
              screenThreeShowHide: true,
              screenShowHide: false,
              screenOneShowHide: false,
              screenTwoShowHide: false
            })
            this.selectComponent("#myslider1").hide()
          } else {
            this.setData({
              screenThreeShowHide: false
            })
          }
        break;
      }
  },
  regionLeftList(e){
    console.log(e)
    let that = this;
    let $name = e.currentTarget.dataset.name;
    let $index = e.currentTarget.dataset.index;
    let regionLeft = this.data.regionLeft;
     regionLeft.map(item=>{
      item.ct = 0
    })
    regionLeft[$index].ct=1;
    this.setData({
      regionLeft,
      regionLeftBuXian:false,
      regionLefIndex: $index,
      regionLefName:$name
    })
    let ids = regionLeft[$index].id;
    console.log(ids)
    this.getRegionList(ids)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getAreaList(){
    // if (this.data.regionLeft.lenght>0){
    //   return false
    // }
    app.globalData.$post("agenthouseCutomer/common/getAreaList", {
    }).then((res) => {
      console.log(this.data.regionLefName)
      console.log(this.data.regionLefIndex)
      let $index = this.data.regionLefIndex;
     
      console.log(res);
      if (res.code==0){
        // res.data[this.data.regionLefIndex].ct = 1;
        if (res.data){
          console.log(123, res.data)
          res.data.map((its,index) => {
           
            its.ct=0
            if (its.name == this.data.titleList[0].name){
              its.ct = 1;
            }
            if (index === $index){
              console.log("1")
              its.ct = 1;
            }
            
          })
          this.setData({
            regionLeft: res.data
          })

          console.log(this.data.regionLeft)
        }
        
      }
     
    });
  },
  getRegionList(id){
    app.globalData.$post("agenthouseCutomer/common/getRegionList", {
      areaId:id
    }).then((res) => {
      console.log(res);
      if (res.code == 0) {
        if (res.data) {
          res.data.map(its => {
            console.log(its)
            its.ct = 0
            
          })
          this.setData({
            regionRight: res.data
          })

          console.log(this.data.regionRight)
        }

      }

    });
  },
 regionRightList(e){
   console.log(e)
 
   console.log(this.data.regionLeft)
   this.data.titleList[0].name = e.currentTarget.dataset.name;
   this.setData({
     titleList:this.data.titleList,
     titleListOne:'0'
   })
   console.log(this.data.titleList)
  //  let  that = this;
  //  let regionLeft = this.data.regionLeft;
   let regionLefIndex = this.data.regionLefIndex;
   this.setData({
     loading:true,
     regionRightBuXian:false
   })
   let that = this;
   let $index = e.currentTarget.dataset.index;
   let regionRight = this.data.regionRight;
   regionRight.map(item => {
     item.ct = 0
   })
   regionRight[$index].ct = 1;

   this.setData({
     regionRight,

   })
   let ids = regionRight[$index].id;
   this.setData({
     screenShowHide:false
   })
   console.log(ids)
   this.setData({
     regionId: ids
   })
   this.getHouseList(ids)
 },
  getHouseList(ids){
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: this.data.districtId,
      hasIndieRestRoom: this.data.hasIndieRestRoom,
      hasVeranda: this.data.hasVeranda,
        lookUrl:false,
        orientation: this.data.orientation,
        priceMax: this.data.priceMax,
        priceMin: this.data.priceMin,
        productType: this.data.productType,
        regionId: this.data.regionId,
        roomNo: this.data.roomNo,
        roommateConstellation: this.data.roommateConstellation,
        roommateSex: this.data.roommateSex,
        size:10,
        stationsId: this.data.stationsId,
        subwayLineId: this.data.subwayLineId,
        textSearch: this.data.textSearch,
        timeStamp:0,
        userAreaMax: this.data.userAreaMax,
        userAreaMin: this.data.userAreaMin
    }).then((res) => {
      console.log(res);
      this.setData({
        loading: false
      })
      let rentHouseList = res.data;
      rentHouseList.map(item=>{
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      }else{
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })
    
      console.log(this.data.rentHouseListShowHide)

    });
  },

  // 地铁
  getSubwayLine(){
    let $index1 = this.data.metroLeftIndex;
    app.globalData.$post("agenthouseCutomer/common/getSubwayLine", {
    }).then((res) => {
      console.log(res);
      if (res.code == 0) {
        if (res.data) {
          res.data.map((its,index) => {
            console.log(its)
            its.ct = 0;
            // its.totalNum = totalNum[its.id].totalNum;
            if (index === $index1){
              its.ct = 1;
            }
          })
          this.data.metroLeft = res.data
          // this.setData({
          //   metroLeft: res.data
          // })
          // console.log(this.data.metroLeft)
        }
      }
    }).then((res)=>{
      app.globalData.$post("agenthouseCutomer/pc/HouseInfoController/getEachSubwayLineHouseCount", {
      }).then((res) => {
        if(res.code==0){
            this.data.metroLeft.forEach(item => {
              if (res.data[item.id]){
                item.totalNum = res.data[item.id].totalNum
              }else{
                item.totalNum =  0;
              }
            })
          this.setData({
            metroLeft:this.data.metroLeft
          })
        } 
        console.log(1234,this.data.metroLeft);
      });
    })
  },
  // 地铁线点击
  metroLeftList(e){
    console.log(e)
    let that = this;
    let $index = e.currentTarget.dataset.index;
    let $id = e.currentTarget.dataset.id;
    this.data.metroLeftIndex = $index;
    this.data.metroLeftId= $id ;
    let metroLeft = this.data.metroLeft;
    metroLeft.map(item => {
      item.ct = 0
    })
    metroLeft[$index].ct = 1;
    this.setData({
      metroLeft,
      metroLeftBuXian:false
     
    })
    let ids = metroLeft[$index].id;
    console.log(ids)
    this.setData({
      subwayLineId: ids
    })
    this.getStationLine(ids)
  },
  getStationLine(ids){
    app.globalData.$post("agenthouseCutomer/common/getStationLine", {
      subwayId: ids
    }).then((res) => {
      console.log(res);
      if (res.code == 0) {
        if (res.data) {
          res.data.map(its => {
            console.log(its)
            its.ct = 0
          })
          this.data.metroRight = res.data;
        }
      }

    }).then((res)=>{
      app.globalData.$post("agenthouseCutomer/pc/HouseInfoController/getSubwayLineHouseCount", {
        subwayLineId: ids
      }).then((res) => {
        let that = this;
        if (res.code == 0) {
          
          //   res.data.forEach(its=>{
          //     console.log(its.stationsOne)
          //     that.data.metroRight.forEach(item=>{
          //       console.log(item.id)
          //       if (its.stationsOne == item.id){
                  
          //       }
          //     })
             
          // })

          res.data.map((item)=>{
            that.data.metroRight.map((val)=>{
              // val.totalNum = "0";
              if (val.id == item.stationsOne){
                val.totalNum = item.totalNum;
                console.log(item.stationsOne,item.totalNum)
              }
              return val;
            })
            return item;
          })
          console.log(that.data.metroRight)
        }
        this.setData({
          metroRight: this.data.metroRight
        })
        // console.log(this.data.metroRight)
     })

    })
  },
  metroRightList(e){
    console.log(this.data.metroLeftIndex)
    this.setData({
      screenOneShowHide: false,
      loading:true,
      titleListOne: '1',
      metroRightBuXian: false
    })
  
    this.data.titleList[1].name = e.currentTarget.dataset.name;
    this.setData({
      titleList: this.data.titleList
    })
    let metroLeftIndex=this.data.metroLeftIndex;
    let $index = e.currentTarget.dataset.index;
    let metroRight = this.data.metroRight;
    let metroLeft = this.data.metroLeft;
    metroRight.map(item => {
      item.ct = 0
    })
    metroRight[$index].ct = 1;
    metroLeft[metroLeftIndex].ct = 1;
    this.setData({
      metroRight,
      metroLeft
    })
    console.log(this.data.metroLeft)
    let id = e.currentTarget.dataset.id;
    this.setData({
      stationsId: id
    })
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: this.data.districtId,
      hasIndieRestRoom: this.data.hasIndieRestRoom,
      hasVeranda: this.data.hasVeranda,
      lookUrl: false,
      orientation: this.data.orientation,
      priceMax: this.data.priceMax,
      priceMin: this.data.priceMin,
      productType: this.data.productType,
      regionId: this.data.regionId,
      roomNo: this.data.roomNo,
      roommateConstellation: this.data.roomNo,
      roommateSex: this.data.roommateSex,
      size: 10,
      stationsId: this.data.stationsId,
      subwayLineId: this.data.subwayLineId,
      textSearch: this.data.textSearch,
      timeStamp: 0,
      userAreaMax: this.data.userAreaMax,
      userAreaMin: this.data.userAreaMin
    }).then((res) => {
      console.log(res);
      this.setData({
        loading:false
      })
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)

    });
  },
  //房型点击
  allMoreTypeClick(e){
      console.log(e)
    let Type = e.currentTarget.dataset.type;
    let productType = e.currentTarget.dataset.id;
    console.log(Type)
    
        this.setData({
          Type,
          productType
        })
    console.log(this.data.productType)
  },
  allHouseholdTypeClick(e){
    let roomNoType = e.currentTarget.dataset.type;
    let roomNoId = e.currentTarget.dataset.id;
    this.setData({
      roomNoType,
      roomNo: roomNoId
    })
    console.log(this.data.roomNo, this.data.roomNoType)
  },
  allOrientationClick(e){
    let orientationType = e.currentTarget.dataset.type;
    let OrientationId = e.currentTarget.dataset.code;
    this.setData({
      orientationType,
      orientation:OrientationId
    })
    console.log(this.data.orientationType, this.data.orientation)
  },
  allAreaClick(e){
    let userAreaType = e.currentTarget.dataset.type;
    let userAreaId = e.currentTarget.dataset.id;
    let userAreaIndex = e.currentTarget.dataset.index;
    if (userAreaType=="不限"){
      this.data.userAreaMin="";
      this.data.userAreaMax = "";
    } else if (userAreaType == "10㎡以下"){
      this.data.userAreaMin = "10";
      this.data.userAreaMax = "";
    } else if (userAreaType == "10-12㎡") {
      this.data.userAreaMin = "10";
      this.data.userAreaMax = "12";
    } else if (userAreaType == "12-15㎡") {
      this.data.userAreaMin = "12";
      this.data.userAreaMax = "15";
    } else if (userAreaType == "15-20㎡") {
      this.data.userAreaMin = "15";
      this.data.userAreaMax = "20";
    } else if (userAreaType == "20㎡以上") {
      this.data.userAreaMin = "20";
      this.data.userAreaMax = "";
    }

    this.setData({
      userAreaType,
    })
    console.log(this.data.userAreaMin,this.data.userAreaMax)
  },
  genderClick(e){//室友性别点击
  console.log(e)
    let genderType = e.currentTarget.dataset.label;
    let roommateSex = e.currentTarget.dataset.id;
    this.setData({
      genderType,
      roommateSex
    })
    console.log(this.data.roommateSex)
  },
  constellationClick(e){//星座点击
    let constellationType = e.currentTarget.dataset.type;
    this.setData({
      constellationType,
      roommateConstellation: constellationType
    })
    console.log(this.data.constellationType, this.data.roommateConstellation)
  },
  featureClick(e){//更多的点击
    let feature = this.data.feature;
    let featureType = e.currentTarget.dataset.type;
    let vals = e.currentTarget.dataset.item;
    console.log(vals)
    let i = e.currentTarget.dataset.index;
    if (vals.ct == 0) {
      feature[i].ct = 1
    } else {
      feature.ct = 0
    }
    if (vals.ct == 1) {
      feature[i].ct = 0
    } else {
      feature.ct = 1
    }
    this.setData({
      feature
    });
    // if (featureType == "独立卫生间") {
    //   this.data.hasIndieRestRoom = true;
    //   this.data.hasVeranda = false;
    // }
    // if (featureType == "独立阳台") {
    //   this.data.hasVeranda = true;
    //   this.data.hasIndieRestRoom=false
    // }
    // this.setData({
      
    //   featureType,
    // })
    
    console.log(this.data.hasIndieRestRoom,this.data.hasVeranda)
  },
  subMit(){
    this.setData({
      loading:true,
      titleListOne: '3'
    })
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: "",
      hasIndieRestRoom: this.data.hasIndieRestRoom,
      hasVeranda: this.data.hasIndieRestRoom,
      lookUrl: false,
      orientation: this.data.orientation,
      priceMax: this.data.priceMax,
      priceMin: this.data.priceMin,
      productType: this.data.productType,
      regionId: this.data.regionId,
      roomNo: this.data.roomNo,
      roommateConstellation: this.data.roommateConstellation,
      roommateSex: this.data.roommateConstellation,
      size: 10,
      stationsId: this.data.stationsId,
      subwayLineId: this.data.subwayLineId,
      textSearch: this.data.textSearch,
      timeStamp: 0,
      userAreaMax: this.data.userAreaMax,
      userAreaMin: this.data.userAreaMin
    }).then((res) => {
     console.log(res)
     console.log("fdsafs")
     this.setData({
       screenThreeShowHide: false,
       loading:false
     })
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)

    });
  },
  exit(){
    console.log("1")
      this.setData({
        roomNo: "",     //卧室数量
        userAreaMin: "",        //最小使用面积
        userAreaMax: "",        //最大使用面积
        orientation: "", //房源、房屋朝向code
        hasIndieRestRoom: "",   //是否独立卫生间
        hasVeranda: "",     //是否独立阳台
        roommateSex: "",     //室友性别
        roommateConstellation: "",     //室友星座
        Type: "",//房型
        roomNoType: '',//卧室数量
        orientationType: '',//朝向
        userAreaType: '',//面积大小
        genderType: '',//室友性别
        constellationType: '',//星座
      })
  },

  // 取最小值
  lowValueChangeAction(e){

    this.data.lowValue = e.detail.lowValue
    this.setData({
      priceMin: this.data.lowValue
    })
  },
    // 取最大值
  heighValueChangeAction(e){

    this.data.heighValue = e.detail.heighValue;
    this.setData({
      priceMax: this.data.heighValue
    })
    
  },
  lower(e){
      console.log(e)
      app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: this.data.districtId,
      hasIndieRestRoom: this.data.hasIndieRestRoom,
      hasVeranda: this.data.hasVeranda,
        lookUrl:false,
        orientation: this.data.orientation,
        priceMax: this.data.priceMax,
        priceMin: this.data.priceMin,
        productType: this.data.productType,
        regionId: this.data.regionId,
        roomNo: this.data.roomNo,
        roommateConstellation: this.data.roommateConstellation,
        roommateSex: this.data.roommateSex,
        size:10,
        stationsId: this.data.stationsId,
        subwayLineId: this.data.subwayLineId,
        textSearch: this.data.textSearch,
        timeStamp: this.data.rentHouseList[this.data.rentHouseList.length - 1].publishTime,
        userAreaMax: this.data.userAreaMax,
        userAreaMin: this.data.userAreaMin
    }).then((res) => {
      console.log(res);
      this.setData({
        loading: false
      })
      
      let rentHouseList = res.data;
      let rentHouseLists = [];
      console.log(rentHouseList)
      for (let i = 0; i < res.data.length;i++){
        this.data.rentHouseList.push(rentHouseList[i])
      }
      rentHouseLists = this.data.rentHouseList;
      console.log(rentHouseLists)
      rentHouseLists.map(item=>{
        if (item.tags.indexOf(",")==-1){
          let arr = [];
          arr.push(item.tags)
          item.tags = arr;
        }else{
          item.tags = item.tags.split(",")
        }
        
      })
      console.log(rentHouseList.length)
      if (rentHouseLists.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      }else{
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseLists
      })
    
      console.log(this.data.rentHouseListShowHide)

    });
  
  },
  priceSearch(){
    console.log("!")
   this.setData({
     loading: true,
     titleListOne: '2'
   })
  
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: "",
      hasIndieRestRoom: this.data.hasIndieRestRoom,
      hasVeranda: this.data.hasIndieRestRoom,
      lookUrl: false,
      orientation: this.data.orientation,
      priceMax: this.data.priceMax,
      priceMin: this.data.priceMin,
      productType: this.data.productType,
      regionId: this.data.regionId,
      roomNo: this.data.roomNo,
      roommateConstellation: this.data.roommateConstellation,
      roommateSex: this.data.roommateConstellation,
      size: 10,
      stationsId: this.data.stationsId,
      subwayLineId: this.data.subwayLineId,
      textSearch: this.data.textSearch,
      timeStamp: 0,
      userAreaMax: this.data.userAreaMax,
      userAreaMin: this.data.userAreaMin
    }).then((res) => {
      console.log(res)
      this.setData({
        screenTwoShowHide: false,
        loading:false
      })
      this.selectComponent("#myslider1").hide()
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)
    });
  },
  clearPrice(){
    // console.log("1")
    //     this.setData({
    //       lowValue: 500,//最小价格
    //       heighValue:10000,//最大价格
    //     })
  },
  inputSearch(e){
    console.log(e)
    let value = e.detail.value;
    this.setData({
      searchHistory: value
    })
  },
  inputFocus(e){
    this.setData({
      cearchListShow:true
    })
  },
  searchs(){
    console.log("1")
    if (this.data.searchHistory!==""){
      let IND = this.data.searchHistoryArr.indexOf(this.data.searchHistory)
      if (IND==-1){
        this.data.searchHistoryArr.push(this.data.searchHistory);
        
      }
      
      wx.setStorageSync("history", this.data.searchHistoryArr);
      app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
        districtId: "",
        hasIndieRestRoom:"",
        hasVeranda:"",
        lookUrl: false,
        orientation:"",
        priceMax:"",
        priceMin:"",
        productType:"",
        regionId:"",
        roomNo:"",
        roommateConstellation:"",
        roommateSex:"",
        size: 10,
        stationsId:"",
        subwayLineId:"",
        textSearch: this.data.searchHistory,
        timeStamp: 0,
        userAreaMax:"",
        userAreaMin:""
      }).then((res) => {
        this.setData({
          cearchListShow:false
        })
        console.log(res)
        this.data.screenThreeShowHide=false;
        let rentHouseList = res.data;
        rentHouseList.map(item => {
          item.tags = item.tags.split(",")
        })
        console.log(rentHouseList.length)
        if (rentHouseList.length > 0) {
          this.setData({
            rentHouseListShowHide: true
          })
        } else {
          this.setData({
            rentHouseListShowHide: false
          })
        }
        this.setData({
          rentHouseList: rentHouseList
        })

        console.log(this.data.rentHouseListShowHide)
      })
    }
  },
  onLoad: function (options) {

   console.log(options)
    switch (options.quyu){
        case "顺义":
        this.data.titleList[0].name = "顺义";
          this.setData({
            districtId:"110113",
            titleList: this.data.titleList,
            titleListOne: '0'
          })
        break;
        case "海淀":
        this.data.titleList[0].name = "海淀";
          this.setData({
            districtId: "110108",
            titleList: this.data.titleList,
            titleListOne: '0'
          })
          break;
        case "朝阳":
        this.data.titleList[0].name = "朝阳";
            this.setData({
              districtId: "110105",
              titleList: this.data.titleList,
              titleListOne: '0'
              })
          break;
    }
    this.quyuHouseList(options)
  },
  quyuHouseList(options){
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: this.data.districtId,
      hasIndieRestRoom: "",
      hasVeranda: "",
      lookUrl: false,
      orientation: "",
      priceMax: "",
      priceMin: "",
      productType: "",
      regionId: "",
      roomNo: "",
      roommateConstellation: "",
      roommateSex: "",
      size: 10,
      stationsId: "",
      subwayLineId: "",
      textSearch: "",
      timeStamp: 0,
      userAreaMax: "",
      userAreaMin: ""
    }).then((res) => {
      console.log(res)
      this.setData({
        loading: false
      })
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)
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
    // this.showgetHouseList()
  },
  // showgetHouseList(){
  //   app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
  //     districtId: "",
  //     hasIndieRestRoom: "",
  //     hasVeranda: "",
  //     lookUrl: false,
  //     orientation: "",
  //     priceMax: "",
  //     priceMin: "",
  //     productType: "",
  //     regionId: "",
  //     roomNo: "",
  //     roommateConstellation: "",
  //     roommateSex: "",
  //     size: 10,
  //     stationsId: "",
  //     subwayLineId: "",
  //     textSearch:"",
  //     timeStamp: 0,
  //     userAreaMax: "",
  //     userAreaMin: ""
  //   }).then((res) => {
  //    console.log(res)
  //    this.setData({
  //      loading:false
  //    })
  //     let rentHouseList = res.data;
  //     rentHouseList.map(item => {
  //       item.tags = item.tags.split(",")
  //     })
  //     console.log(rentHouseList.length)
  //     if (rentHouseList.length > 0) {
  //       this.setData({
  //         rentHouseListShowHide: true
  //       })
  //     } else {
  //       this.setData({
  //         rentHouseListShowHide: false
  //       })
  //     }
  //     this.setData({
  //       rentHouseList: rentHouseList
  //     })

  //     console.log(this.data.rentHouseListShowHide)
  //   })
  // },
  goRentDetails(e){
      console.log(e)
    let $id = e.currentTarget.dataset.id;
    let $producttype = e.currentTarget.dataset.producttype;
    wx.navigateTo({
      url: '/pages/rent/rentDetails/rentDetails?id=' + $id + '&productType=' + $producttype
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
    console.log("1")
  },
  regionLeftBuXian(e){
    console.log("!")
    let regionLeft = this.data.regionLeft;
    this.data.titleList[0].name = "区域";
    this.data.regionLefIndex = "";
    this.setData({
      regionLeftBuXian:true,
      regionLeft,
      regionRight:[],
      screenShowHide: false,
      regionLefName:"",
      titleList: this.data.titleList,
      titleListOne :""
    })
    regionLeft.map(item => {
      item.ct = 0
    })
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId:"",
      hasIndieRestRoom: "",
      hasVeranda: "",
      lookUrl: false,
      orientation: "",
      priceMax: "",
      priceMin: "",
      productType: "",
      regionId: "",
      roomNo: "",
      roommateConstellation: "",
      roommateSex: "",
      size: 10,
      stationsId: "",
      subwayLineId: "",
      textSearch: "",
      timeStamp: 0,
      userAreaMax: "",
      userAreaMin: ""
    }).then((res) => {
      console.log(res)
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false,
         
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)
    })
  },
  regionRightBuXian(){
    let regionRight = this.data.regionRight;
    this.setData({
      screenShowHide:false
    })
    console.log(this.data.regionLefName)
    let districtId = ""
    switch (this.data.regionLefName){
        case "东城":
        districtId = "110101"
        break;
      case "西城":
        districtId = "110102"
        break;
      case "朝阳":
        districtId = "110105"
        break;
      case "丰台":
        districtId = "110106"
        break;
      case "石景山":
        districtId = "110107"
        break;
      case "海淀":
        districtId = "110108"
        break;
      case "门头沟":
        districtId = "110109"
        break;
      case "房山":
        districtId = "110111"
        break;
      case "通州":
        districtId = "110112"
        break;
      case "顺义":
        districtId = "110113"
        break;
      case "	昌平":
        districtId = "110114"
        break;
      case "	大兴":
        districtId = "110115"
        break;
      case "怀柔":
        districtId = "110116"
        break;
      case "平谷":
        districtId = "110117"
        break;
      case "密云":
        districtId = "110118"
        break;
      case "延庆":
        districtId = "110119"
        break;

    }
    regionRight.map(item => {
      item.ct = 0;
    })
    this.setData({
      regionRightBuXian: true,
      regionRight,
    })
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: districtId,
      hasIndieRestRoom: "",
      hasVeranda: "",
      lookUrl: false,
      orientation: "",
      priceMax: "",
      priceMin: "",
      productType: "",
      regionId: "",
      roomNo: "",
      roommateConstellation: "",
      roommateSex: "",
      size: 10,
      stationsId: "",
      subwayLineId: "",
      textSearch: "",
      timeStamp: 0,
      userAreaMax: "",
      userAreaMin: ""
    }).then((res) => {
      console.log(res)
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)
    })
  },
  metroRightBuXian(){
    
    let metroRight = this.data.metroRight;
    let metroLeft = this.data.metroLeft;
    this.data.titleList[1].name = metroLeft[this.data.metroLeftIndex].name;
    let $id = this.data.metroLeftId;
    metroRight.map(its=>{
      its.ct = 0;
    })
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId:"",
      hasIndieRestRoom:"",
      hasVeranda:"",
      lookUrl: false,
      orientation:"",
      priceMax:"",
      priceMin:"",
      productType:"",
      regionId:"",
      roomNo: "",
      roommateConstellation:"",
      roommateSex: "",
      size: 10,
      stationsId: "",
      subwayLineId: $id,
      textSearch:"",
      timeStamp: 0,
      userAreaMax:"",
      userAreaMin:""
    }).then((res) => {
      console.log(res);
      this.setData({
        loading: false
      })
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)

    });
    this.setData({
      metroRightBuXian: true,
      metroRight,
      titleList: this.data.titleList,
      screenOneShowHide: false,
      titleListOne:"1"
    })
  },
  metroLeftBuXian(){
    let metroLeft = this.data.metroLeft;
    this.data.titleList[1].name = "地铁";
    this.data.metroLeftIndex = "";
    metroLeft.map(its => {
      its.ct =0;
    })
    
    this.setData({
      metroRight:[],
      metroLeftBuXian:true,
      metroLeft,
      titleList: this.data.titleList,
      screenOneShowHide: false,
      titleListOne:''
    })
    app.globalData.$post("agenthouseCutomer/HouseInfoController/getHouseList", {
      districtId: "",
      hasIndieRestRoom: "",
      hasVeranda: "",
      lookUrl: false,
      orientation: "",
      priceMax: "",
      priceMin: "",
      productType: "",
      regionId: "",
      roomNo: "",
      roommateConstellation: "",
      roommateSex: "",
      size: 10,
      stationsId: "",
      subwayLineId: "",
      textSearch: "",
      timeStamp: 0,
      userAreaMax: "",
      userAreaMin: ""
    }).then((res) => {
      console.log(res);
      this.setData({
        loading: false
      })
      let rentHouseList = res.data;
      rentHouseList.map(item => {
        item.tags = item.tags.split(",")
      })
      console.log(rentHouseList.length)
      if (rentHouseList.length > 0) {
        this.setData({
          rentHouseListShowHide: true
        })
      } else {
        this.setData({
          rentHouseListShowHide: false
        })
      }
      this.setData({
        rentHouseList: rentHouseList
      })

      console.log(this.data.rentHouseListShowHide)

    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  textClick(e){
  
    
    this.setData({
      searchHistory: e.detail,
      Iptvalue: e.detail
    })
    this.searchs()
  }
})