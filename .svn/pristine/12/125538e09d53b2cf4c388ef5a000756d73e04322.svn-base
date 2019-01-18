// pages/new/buildposter/buildpposter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityArr: [
      "",
      "",
      "",
      '环京',
      '北海',
      '葫芦岛',
      "峨眉山",
      "",
      "",
      ""
      ],
    cityTitle:[
      {
        city:'环京',
        Ename: "HUANJING CITY",
        desc: "浪漫的城市，带来浪漫的生活"
      },
      {
        city: '北海',
        Ename: "BEIHAI CITY",
        desc: "一线海景房与大海说早安"
      },
      {
        city: '葫芦岛',
        Ename: "HULUDAO CITY",
        desc: "国家AAAA级旅游景区"
      },
      {
        city: '峨眉山',
        Ename: "EMEISHAN CITY",
        desc: "置身江南的小镇红砖黛瓦潺流涓溪"
      }],
     
    current:0,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 400,
    circular: true,
    current2:0,
    showBuildList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(openTions){
    console.log(openTions)

    getApp().globalData.$get(`palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList=&porttype`).then(res=>{
      if (res.status==200){
        let arr = [],
          arr1 = [],
          arr2 = [],
          arr3 = [];
        res.data.forEach(item=>{
          if (item.firstpicture && item.firstpicture.indexOf('img.guoanfamily.com')==-1){
            item.firstpicture = `https://img.guoanfamily.com/${item.firstpicture}`
            console.log(item.buildnamepy)
            
          }
          let province = item.province
          if (item.isAroundBeijing == '1') {
            arr.push(item);
          }
          if (province) {
            if (province.indexOf("广西壮族") != -1) {
              arr1.push(item);
            } else if (province.indexOf("辽宁省") != -1) {
              arr2.push(item);
            } else if (province.indexOf("四川") != -1) {
              arr3.push(item);
            }
          }
        })
        let current = 0;
        if (openTions.Num){
          current = Number(openTions.Num)
        }


        this.setData({
          showBuildList: [arr, arr1, arr2, arr3],
          current
        })

      }
    })
  },

  schange(e){
    this.data.current = e.detail.current
    this.setData({
      current: this.data.current,
      current2: 0
    })

  },
  swiperClick(e){
    let wards = e.currentTarget.dataset.item;
    if (wards){
      let n = this.data.cityArr.indexOf(wards)-3
      this.setData({
        current:n,
        current2:0
      })
    }

  },
  buildClick(e){
     let $id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/new/newHouseDetail/newHouseDetail?buildId=${$id}`,
    })
  }


})