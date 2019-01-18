// pages/personalCenter/Repair/Repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ChousedArr:[],
    list1:[],
    list2:[],
    list3:[],
    chouseData:[],
    showChous: ["选择类别", '选择物品',"选择位置"],

    imgArr:[],
    maskShow:false,
    btnShow:false,
    textValue:"",
    pageResult:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    getApp().globalData.RepairResult=[]
    this.pageInit()
  },
  // 取消
  cancal(){
    this.setData({
      maskShow:false,
      btnShow: false
    })
  },
//  初始化页面
  pageInit(){
    getApp().globalData.$post("agenthouseCutomer/RepairOrderController/getRepairItemOneLevel",{}).then(res=>{
      if (res.code === 0) {
        let arr = ["选择类别"];
        this.data.ChousedArr[0] = res.data
        res.data.forEach(item => {
          arr.push(item.oneLevleItemName)
        });
        this.setData({
          list1: arr
        })
      }
    }).then(()=>{
      getApp().globalData.$post(`agenthouseCutomer/RepairOrderController/getRepairItemArea`, {}).then(res => {
        if (res.code == 0) {
          this.data.ChousedArr[2]= res.data
          let Arr = ['选择位置']
          res.data.forEach(item => {
            Arr.push(item.repairArea)
          })
          this.setData({
            list3: Arr
          })
        }
      })
    })
  },

  //选择下拉列表
  PChange(e){
    // 选择类别
    let ArrIndex = Number(e.target.dataset.pindex) ;
    let chIndex = Number(e.detail.value) 
    this.data.chouseData[ArrIndex] = this.data.ChousedArr[ArrIndex][chIndex-1];
    if (ArrIndex==0){
      this.data.showChous[ArrIndex] = this.data.list1[chIndex]
    }
    if (ArrIndex == 1){
      this.data.showChous[ArrIndex] = this.data.list2[chIndex]
    }
    if (ArrIndex == 2) {
      this.data.showChous[ArrIndex] = this.data.list3[chIndex]
    }
    this.setData({
      showChous: this.data.showChous
    })
    if (ArrIndex==0){
      this.getnextClass()
    }
  },
  // 获取下级分类
  getnextClass() {
    let postObj = new Object()
    postObj.oneLevleItemNumber = this.data.chouseData[0].oneLevleItemNumber
    getApp().globalData.$post(`agenthouseCutomer/RepairOrderController/getRepairItemTwoLevel`, postObj).then(res => {
      if (res.code == 0) {
        let Arr = ['选择物品']
        res.data.forEach(objs => {
          Arr.push(objs.twoLevleItemName)
        })
        this.setData({
          list2: Arr
        })
        this.data.ChousedArr[1] = res.data
      }
    })
  },
  // 添加图片
  addImg(){
    this.setData({
      maskShow: true
    });
    setTimeout(()=>{
      this.setData({
        btnShow: true
      })
    },100)
  },
  // 选择图片
  chouseImg(e){
    let self = this
    let cArr = ['album', 'camera']
    if (e.target.dataset.type==0){
      cArr = ['camera']
    }else{
      cArr = ['album']
    }
    wx.chooseImage({ 
      count:1,
      sourceType: cArr,
      success(res) {
        const tempFile = res.tempFiles[0];
        const tempFilep = res.tempFilePaths[0];
        wx.uploadFile({
          url: 'https://www.guoanfamily.com/agenthouseApp/PictureManagerController/upload', // 仅为示例，非真实的接口地址
          filePath: tempFilep,
          name: 'file',
          success(res) {
            const data = JSON.parse(res.data);
            let imgUrl =""
            if (data.code==0){
              imgUrl = "https://img.guoanfamily.com/" + data.data;
              self.data.imgArr.push(imgUrl)
            }
            self.setData({
              imgArr: self.data.imgArr,
              maskShow:false,
              btnShow: false
            })
            // setTimeout(() => {
            //   self.setData({
               

            //   })
            // }, 100)
          }
        })
      }
    })
  },
  // 放大图片
  showImg(e){
    let self = this
    wx.previewImage({
      current: e.target.dataset.src, // 当前显示图片的http链接
      urls: self.data.imgArr // 需要预览的图片http链接列表
    })
  },
  textareaInput(e){
    this.data.textValue = e.detail.value
  },
  //保存订单
  saveOrder(){
    this.testpage();
    getApp().globalData.RepairResult = this.data.pageResult;
    this.data.pageResult = []
    wx.redirectTo({
      url: "/pages/personalCenter/RepairMyList/RepairMyList"
    })
  },
  addAgain(){
    this.testpage();
    this.setData({
      chouseData: [],
      showChous: ["选择类别", '选择物品', "选择位置"],

      imgArr: [],
      textValue: ""
    })
    
  },
  // 删除对应的图片
  imgClose(e){
    this.data.imgArr.splice(e.target.dataset.index,1);
    this.setData({
      imgArr: this.data.imgArr
    })


  },
  testpage(){
    let result = {}
    // 获取选择结果
    // 物品选择
    
    if (this.data.showChous[0] == '选择类别') {
      this.toast('请选择类别');
      return false
    } else {
      result.oneLevleItem = this.data.chouseData[0]
    }
    if (this.data.showChous[1] == '选择物品') {
      this.toast('请选择物品');
      return false
    } else {
      result.itemCategory = this.data.chouseData[1]
    }

    // 位置
    if (this.data.showChous[2] == '选择位置') {
      this.toast('请选择位置');
      return false
    } else {
      result.AreaData = this.data.chouseData[2]
    }
    result.ErrText = this.data.textValue;
    if (result.ErrText.length == 0) {
      this.toast('请填写具体问题');
      return false
    }

    result.imgArr = this.data.imgArr
    if (result.imgArr.length == 0) {
      this.toast('请上传照片');
      return false
    }
    this.data.pageResult.push(result)
  },

  toast(msg){
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  },
  error(e) {
    console.log(e.detail);
    
  }
})