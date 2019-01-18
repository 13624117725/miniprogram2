// pages/new/predetermine/predetermine.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buildData:{},
    pdate:"2018-01-01",
    multiArray: [],
    postData:{
      custname:"",
      phonenum:"",
      custphone:"",
      scancount:"",
      buildid:"",
      scantime:"",
      myappointmentUrl:"",
      buildname:"",
      channeltype:"",
      phone:''
    },
    year:new Date().getFullYear(),
    time:"",
    getName:'',
    loading:true
  },
  pickerTap() {
    var date = new Date();

    var monthDay = [];
    var hours = [];
    var minute = [];
   
    // 月-日
    for (var i = 0; i <= 30; i++) {
      var date1 = new Date(date);
      date1.setDate(date.getDate() + i);
      var md = (date1.getMonth() + 1) + "-" + date1.getDate();
      monthDay.push(md);
    }

    // 时
    for (var i = 0; i < 24; i++) {
      let n = i+""
      if(i<10){
        n = "0"+n
      }
      hours.push(n);
    }

    // 分
    for (var i = 0; i <= 59; i++) {
      let n = i + ""
      if (i < 10) {
        n = "0" + n
      }
      minute.push(n);
    }
    

    var data = {
      multiArray: this.data.multiArray,
      // multiIndex: this.data.multiIndex
    };
    data.multiArray[0] = monthDay;
    data.multiArray[1] = hours;
    data.multiArray[2] = minute;
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.data.postData.buildid = options.id;
    this.data.postData.myappointmentUrl = `https://www.guoanfamily.com/guoanjiaApp/#/reservationPages?buildID=ff808081637317170163af0e95e9016f`
    this.getBuildData(options.id);
    this.pickerTap()
    this.setData({
      phone:wx.getStorageSync("phoneNum"),
      getName: wx.getStorageSync("realName")
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  getBuildData(id){
    getApp().globalData.$get(`palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=${id}`).then(res => {
      if (res.status==200){
        this.setData({
          loading:false
        })
        if (res.data.buildPictureList[0]['picturename'] && res.data.buildPictureList[0]['picturename'].indexOf('img.guoanfamily.com')!=-1){
          console.log(11,res.data.buildPictureList[0]['picturename'])
          res.data.firsturl = `${res.data.buildPictureList[0]['picturename']}?imageView2/0/w/280/h/210`
          
        } else{
          res.data.firsturl = `https://img.guoanfamily.com/${res.data.buildPictureList[0]['picturename']}?imageView2/0/w/280/h/210`
          
        }
        this.setData({
          buildData: res.data
        })
        console.log(123, this.data.buildData);
      }
    })
  },
  getName(e){
    this.data.postData.custname = e.detail.value
  },
  setPhone(e){
    this.data.postData.phonenum = e.detail.value
    
  },
  setScancount(e){
    this.data.postData.scancount = e.detail.value
  },
  
  bindDateChange(e){
    console.log(e)
    let timeArr = [];
    console.log(this.data.multiArray)
    timeArr.push(this.data.multiArray[0][e.detail.value[0]], this.data.multiArray[1][e.detail.value[1]], this.data.multiArray[2][e.detail.value[2]])
    let newTime = new Date();
    if (this.data.multiArray[0][e.detail.value[0]].split("-")[0] < newTime.getMonth()+1){
      let years = newTime.getFullYear()+1;
      this.setData({
        year: years,
      })
    }
    
    console.log(this.data.year)
   this.data.postData.scantime = timeArr;

    this.setData({
      postData: this.data.postData,
      time:this.data.multiArray[0][e.detail.value[0]]+" "+ this.data.multiArray[1][e.detail.value[1]] + ":"+this.data.multiArray[2][e.detail.value[2]]
    })
    this.data.postData.scantime = this.data.year+" "+this.data.time;
  },
  // 提交约看
  postPredete(){
 
    
    if (!this.data.postData.custname){
      this.showToast("请输入姓名");
      return false;
      
    }
    if (!this.data.postData.phonenum) {
      this.showToast("请输入电话");
      return false;

    }
    if (this.data.postData.phonenum.length!=11){
      this.showToast("请输入正确电话号码");
      return false;
    }
   
    if (!this.data.postData.scancount) {
      this.showToast("请输入人数");
      return false;

    }
    if (!this.data.postData.scantime) {
      this.showToast("请选择日期");
      return false;
    }

    this.data.postData.custphone = wx.getStorageSync("phoneNum");
    this.data.postData.buildname = this.data.buildData.buildname;
    this.data.postData.channeltype = "国安家app-微信";
    this.data.postData.scantime = this.data.year + "-" + this.data.time+":00"
    getApp().globalData.$post('palmsaleapp/api/v1/build/collectsave', this.data.postData).then(response => {
      if (response.status == 200) {
        this.showToast("约看成功");
        wx.navigateBack({
          delta: 1
        })
      } else {
        this.showToast(response.msg);
      };
    }, response => {
      this.showToast(response.msg);
    });
  },
  showToast(msg){
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    
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

  },
  
})