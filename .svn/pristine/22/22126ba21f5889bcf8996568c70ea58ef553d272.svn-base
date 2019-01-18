var util = require('../../../utils/util')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    repTime: [],
    titmeArr: [[], [" 9:00-12:00", " 13:00-17:00", " 18:00-20:00"]], 
    multiIndex: [0, 0],
    telNum: "13624117725",
    imgArr: [], //  放大的数组
    houseAddress: "",
    resolute: [{
      AreaData: {
        code: "0014002",
        repairArea: "客厅"
      },
      ErrText: 'mingbai',
      imgArr: ['https://img.guoanfamily.com/20190116093647_css.png'],
      itemCategory: {
        itemImage: "20190102162310_洗衣机.jpg",
        itemNumber: "001001",
        twoLevelItemId: "ae33b11e-ff74-11e8-979d-7cd30abea0c0",
        twoLevleItemName: "洗衣机",

      },
      oneLevleItem: {
        oneLevleItemName: "电器",
        oneLevleItemNumber: "001"
      }
    }],
    preImg: []//放大组件
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.data.resolute= getApp().globalData.RepairResult
  
    this.makeDate()
    this.getLocal()
    let userPhone = wx.getStorageSync('phoneNum')
    console.log(userPhone)
    if (userPhone) {
      this.setData({
        telNum: userPhone
      })
    }
  },
  getTelNum(e) {
    this.setData({
      telNum: e.detail.value,
    })
  },
  // 获取日期
  makeDate() {
    let mDate = Date.parse(new Date());
    // let mDate = util.formatTime2(new Date)
    console.log(mDate)
    let Arr = []
    for (let i = 0; i < 7; i++) {
      let mDateT = new Date(mDate)
      let mtoDay = util.formatTime2(mDateT)
      Arr.push(mtoDay)
      mDate += 86400000
    }
    var zArr = [Arr, [" 9:00-12:00", " 13:00-17:00", " 18:00-20:00"]]
    this.setData({
      titmeArr: zArr,
    })
    this.setData({
      repTime: [this.data.titmeArr[0][this.data.multiIndex[0]], this.data.titmeArr[1][this.data.multiIndex[1]]]
    })
  },
  //　时间选择
  bindMultiPickerChange(e) {
    this.setData({
      multiIndex: e.detail.value,
      repTime: [this.data.titmeArr[0][e.detail.value[0]], this.data.titmeArr[1][e.detail.value[1]]]

    })
    console.log(this.data.multiIndex,677)
  },
  // 获取地址
  getLocal() {
    app.globalData.$post(`agenthouseCutomer/RepairOrderController/getRepairHouseAddress`, {}, 'integral').then(res => {
      if (res.code == 0) {
        this.setData({
          houseAddress: res.data.houseAddress,
          resolute: this.data.resolute
        })
      }
    })
  },
  showImg(e) { //图片放大
    let self = this
    var idx = e.target.dataset.idx
    wx.previewImage({
      current: e.target.dataset.src, // 当前显示图片的http链接
      urls: self.data.resolute[idx].imgArr // 需要预览的图片http链接列表
    })
  },
  // 删除单项
  delItem(e) {
    if (this.data.resolute.length > 1) {
      this.data.resolute.splice(e.target.id, 1)
      this.setData({
        resolute: this.data.resolute
      })
    } else if (this.data.resolute.length = 1) {

    }
  },
  // submit
  submit() {
    let postData = {
      repairOrderItemsEntities: []
    }
    this.data.resolute.forEach(result => {
      let RepairData = {
        "faultArea": result.AreaData.code,
        "images": result.imgArr,
        "itemCategory": result.itemCategory.itemNumber,
        "oneLevelNumber": result.oneLevleItem.oneLevleItemNumber,
        "remark": result.ErrText
      }
      postData.repairOrderItemsEntities.push(RepairData);
    })
    console.log('postData: ', this.data.repTime.length);
    if (this.data.repTime.length < 2) {
      wx.showToast({
        title: '请选择上门时间!',
        duration: 2000,
        icon: 'none'
      });
      return false
    }

    let sthour = this.data.repTime[1].split("-")[0]
    let endhour = this.data.repTime[1].split("-")[1]
    let startDate = this.data.repTime[0] + sthour;
    let endDate = this.data.repTime[0] + " " + endhour;
    startDate = new Date(startDate.replace(/-/g, "/")).getTime()
    endDate = new Date(endDate.replace(/-/g, "/")).getTime()
    // endDate = dayjs(endDate.replace(/\./g, "/")).valueOf();
    // startDate = dayjs(startDate.replace(/\./g, "/")).valueOf();
    postData.repairOrderEntity = {
      "customerPhone": this.data.telNum,
      "endDate": endDate,
      "houseAddress": this.data.houseAddress,
      "startDate": startDate
    }
    console.log('postData: ', postData);
    app.globalData.$post(`agenthouseCutomer/RepairOrderController/saveRepairOrder`, postData, 'integral').then(res=>{
        if(res.code==0){
          wx.showToast({
            title: '添加成功!',
            duration: 2000,
            icon: 'none',
            success() {
              wx.navigateBack()
            }
          });
          // console.log('succ')
            // this.$store.state.RepairMyList.resolute = []
            // this.$router.go(-1)
        }
    })
  }
})