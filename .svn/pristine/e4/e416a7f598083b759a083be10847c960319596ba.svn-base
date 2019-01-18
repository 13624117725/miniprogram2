// pages/new/newHouseList/newhouseList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buildList:[],
    showCards:'9999',
    lowValue:0,
    heighValue:50000,
    myPrice :'',
    noData:false,
    searchData:{
      quyu:[],
      jiage:[
        {
          k: "5000以下",
          ct:0
        },
        {
          k: "5000~6000",
          ct: 0
        },
        {
          k: "6000~7000",
          ct: 0
        },
        {
          k: "7000~8000",
          ct: 0
        },
        {
          k: "8000~10000",
          ct: 0
        }, 
        {
          k: "10000~15000",
          ct: 0
        },
        {
          k: "15000~20000",
          ct: 0
        },
        {
          k: "20000以上",
          ct: 0
        }],
      huxing:[
        {
          k: "一室",
          ct: 0,
          v: '0'
        },{
          k: "两室",
          ct: 0,
          v: '1'
        }, {
          k: "三室",
          ct: 0,
          v: '2'
        }, {
          k: "四室",
          ct: 0,
          v: '3'
        }, {
          k: "五室及以上",
          ct: 0,
          v: '4'
        }
      ],
      more:{
        area: [ 
          {
            k: "60㎡以下",
            ct:0,
            v:"0"
          },
          {
            k: "60㎡-80㎡",
            ct: 0,
            v: "1"
          },
          {
            k: "80㎡-100㎡",
            ct: 0,
            v: "2"
          },
          {
            k: "100㎡以上",
            ct: 0,
            v: "3"
          }],
        
        Property: [], // 特色标签
        Typearr:[]//物业类型
      }
    },
    searchResult:{
      city:'',
      price:'',
      houseType:'',
      buildtagList:'',
      areaList:"",
      tenementtypeList:""
    },
    noDataShow:true,
    loading:true
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    setTimeout(()=>{
      
      
    },800)
    let searchData = this.data.searchData
    
    getApp().globalData.$get(`palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList=&porttype`).then(res=>{
      this.setData({
        loading:false
      })
      if(res.status==200){
        res.data.forEach(item=>{
          let i = item.firstpicture.indexOf("http");
          if(i==-1){
            item.firstpicture = `https://img.guoanfamily.com/${item.firstpicture}`;
          }
          // 区域
          let pushquyus = true
          searchData.quyu.forEach(its=>{
            if (its.city == item.city){
              pushquyus = false;
              return false
            }
          })
          if (pushquyus && item.city){
            let obj = {
              k:item.city,
              ct:0
            }
            searchData.quyu.push(obj)
          }
          // 特色标签

          item.buildtagnameList.forEach(its=>{
            let Proper = true;
            searchData.more.Property.forEach(obj=>{
              if (obj.k == its){
                Proper = false
              }
            })
            if (Proper){
              let obj = {
                k: its,
                ct: 0
              }
              searchData.more.Property.push(obj)
            }
          })
          // 物业类型
          let tenemenArr = []
          if (item.tenementtype){
            tenemenArr = item.tenementtype.split(",");
          }
           
          tenemenArr.forEach(itS=>{
            if (!itS){
              return false
            }
            let tenemen = true;

            searchData.more.Typearr.forEach(objs=>{
              if (objs.k == itS){
                tenemen = false;
                return false
              }
            })

            if (tenemen){
              searchData.more.Typearr.push({
                k: itS,
                ct:0
              })
            }
              
            
          })
          // Property
          
        })
      }
      let noData =  false
      if (res.data.length == 0) {
        noData = true
      }
      this.setData({
        buildList:res.data,
        searchData,
        noData
      })
     
    })
  },

// 选择特色标签
  chouseTag(e){
    let searchData = this.data.searchData
    let i = e.currentTarget.dataset.index
    let Tag = e.currentTarget.dataset.property;

    if (Tag.ct==0){
      searchData.more.Property[i].ct=1
    }else{
      searchData.more.Property[i].ct = 0
    }
    this.setData({
      searchData
    });
  },
  // 选择城市
  chouseCity(e){
    let searchData = this.data.searchData
    let vals = e.currentTarget.dataset.city;
    let i = e.currentTarget.dataset.index
    if (vals.ct==0){
      searchData.quyu[i].ct= 1
    }else{
      searchData.quyu[i].ct = 0
    }
   
    this.setData({
      searchData
    });
    
  },
  // 选择价格
  chousePrice(e){
    let searchData = this.data.searchData
    let vals = e.currentTarget.dataset.price;
    let i = e.currentTarget.dataset.index
    if (vals.ct== 0) {
      searchData.jiage[i].ct = 1
    } else {
      searchData.jiage[i].ct = 0
    }
    this.setData({
      searchData
    });

  },
  // 选择户型
  chouseHType(e){
    let searchData = this.data.searchData
    let vals = e.currentTarget.dataset.housetype;
    let i = e.currentTarget.dataset.index
    if (vals.ct == 0) {
      searchData.huxing[i].ct = 1
    } else {
      searchData.huxing[i].ct = 0
    }
    this.setData({
      searchData
    });
  },
  // 面积选择
  chouseArea(e){
    let searchData = this.data.searchData;
    console.log(searchData)
    let vals = e.currentTarget.dataset.area;
    console.log(vals)
    let i = e.currentTarget.dataset.index
    if (vals.ct == 0) {
      searchData.more.area[i].ct = 1
    } else {
      searchData.more.area[i].ct = 0
    }
    this.setData({
      searchData
    });
  },
  // 选择物业类型
  chouseType(e){
    let searchData = this.data.searchData
    let vals = e.currentTarget.dataset.type;
    let i = e.currentTarget.dataset.index
    
    if (vals.ct == 0) {
      searchData.more.Typearr[i].ct = 1
    } else {
      searchData.more.Typearr[i].ct = 0
    }
    this.setData({
      searchData
    });
  },
  changeIndex(e){
    
    let n = e.currentTarget.dataset.index;
    if (this.data.showCards == n){
      n = "9999"
    }
    if(n==2){
      this.selectComponent("#myslider2").show()
    }else{
      this.selectComponent("#myslider2").hide()
    }
    this.setData({
      showCards:n
    })
    
  },
  // 查找
  getBuild(obj){

    getApp().globalData.$get(`palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=${obj.price}&city=${obj.city}&typeList=${obj.houseType}&areaList=${obj.areaList}&tenementtypeList=${obj.tenementtypeList}&buildtagList=${obj.buildtagList}&hardcoverstandardList=&porttype`).then(res => {
      if (res.status == 200) {
        res.data.forEach(item => {
          let i = item.firstpicture.indexOf("http");
          if (i == -1) {
            item.firstpicture = `https://img.guoanfamily.com/${item.firstpicture}`;
          }
        })
      }
      this.setData({
        buildList: res.data,
        showCards: '9999'
      })
    })
  },

  // 确定
  makeSure(){
    this.selectComponent("#myslider2").hide()
    let searchData = this.data.searchData;
    let quyu = [];
    // 区域
    searchData.quyu.map(item=>{
     if(item.ct==1){
       quyu.push(item.k)
     }
    })
    
    this.data.searchResult.city= quyu.join(",");
    // 价格
    let price = [];
    searchData.jiage.map(item => {
      if (item.ct == 1) {
        price.push(item.k)
      }
    })
    if (this.data.myPrice) {
      price.push(this.data.myPrice)
    }

    this.data.searchResult.price = price.join(",");
    // 户型
    let huxing = [];
    searchData.huxing.map(item => {
      if (item.ct == 1) {
        huxing.push(item.v)
      }
    })
    this.data.searchResult.houseType = huxing.join(",");
    // 特色标签
    let buildtagList = [];
    console.log(searchData)
    searchData.more.Property.map(item => {
      if (item.ct == 1) {
        buildtagList.push(item.k)
      }
    });
    this.data.searchResult.buildtagList = buildtagList.join(",");
    // 面积
    let areaList = [];
    searchData.more.area.map(item => {
      if (item.ct == 1) {
        areaList.push(item.v)
      }
    });
    this.data.searchResult.areaList = areaList.join(",");
    // 物业类型
    let tenementtypeList = [];
    searchData.more.Typearr.map(item => {
      if (item.ct == 1) {
        tenementtypeList.push(item.k)
      }
    });
    this.data.searchResult.tenementtypeList = tenementtypeList.join(",");
    // tenementtypeList
    this.setData({
      searchResult: this.data.searchResult
    })
    this.getBuild(this.data.searchResult)
  },
  // 重置
  ToreSize(){
    let searchData = this.data.searchData
    console.log(this.data.showCards);
    // 区域情况
    if (this.data.showCards == 1){
      searchData.quyu.forEach(item=>{
        item.ct = 0
      })
      this.setData({
        searchData
      })
    }
    if (this.data.showCards == 2) {
      searchData.jiage.forEach(item => {
        item.ct = 0
      })
      this.setData({
        searchData
      })
    }
    
    // 户型
    if (this.data.showCards == 3) {
      searchData.huxing.forEach(item => {
        item.ct = 0
      })
      this.setData({
        searchData
      })
    }
    // 更多
    if (this.data.showCards == 4) {
      searchData.more.Property.forEach(item => {
        item.ct = 0
      })
      searchData.more.area.forEach(item => {
        item.ct = 0
      })
      searchData.more.Typearr.forEach(item => {
        item.ct = 0
      })

      this.setData({
        searchData
      })
    }
  },
  lowValueChangeAction(e){
    console.log(1, e)
    this.data.lowValue = e.detail.lowValue;
   
    this.data.myPrice = `${this.data.lowValue}-${this.data.heighValue}`
    
  },
  goHouseList(e) {
    // let str = `#/building_detial?buildID=${e.currentTarget.dataset['id']}&productType=${e.currentTarget.dataset['producttype']}&`
    // this.turnRouter(str);
    let $id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/new/newHouseDetail/newHouseDetail?buildId=${$id}`,
    })
  },
  heighValueChangeAction(e){
     console.log(2,e)
    this.data.heighValue = e.detail.heighValue;
    this.data.myPrice = `${this.data.lowValue}-${this.data.heighValue}`

  }
})