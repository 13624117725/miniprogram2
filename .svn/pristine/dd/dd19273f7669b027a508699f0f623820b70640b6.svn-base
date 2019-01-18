// pages/personalCenter/RepairDetails/RepairDetails.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId: 'WX2019111000128', //维修订单ID
    itemList: [
      {
        itemImage: '',
        furnitures: ['电器', '家具', '桌子',],
        imgList: [],
        remark: ''
      },
    ],
    houseAddress: '',
    startAEndDDate: "",
    customerPhone: '',
    btn_boxShow:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   
    console.log(options)
    if (options.orderstatuscontent !=="已提交"){
        this.setData({
          btn_boxShow:false
        })
    }
    if (options.orderId) {
      this.setData({
        orderId: options.orderId
      })
    }
    console.log(this)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getRepairInfo()
  },
  // 取消订单
  handleCancel() {
    const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
    wx.showModal({
      // 组件除show外的属性
      content: '确定删除订单?',
      success(res) {
        console.log(_this.data.orderId)
        if(res.cancel) {
          console.log('仇晓')
        } else {
          app.globalData.$post('agenthouseCutomer/RepairOrderController/deleteRepairOrderById', { "orderId": _this.data.orderId }, 'integral')
          .then((res) => {
            if (res.code == 0) {
              _this.showToast('删除成功！')
              wx.navigateTo({
                url: '/pages/personalCenter/Maintenancelist/Maintenancelist',
              })
              // wx.navigateTo2({ url: '/maintenancelist'})
// ||||||| .r31426
//               wx.navigateTo2({ url: '/maintenancelist'})
// =======
//               wx.navigateBack({
//                 url: '/pages/personalCenter/maintenancelist/maintenancelist'
//               })
//               // wx.navigateTo2({ url: '/maintenancelist'})
// >>>>>>> .r31448
              // _this.$router.push('/maintenancelist')
            } else {
              _this.showToast(res.msg + '!')
            }
          })
        }
        
      }
    });
   
  },
  // 消息弹窗
  showToast(msg) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    });
  },
  //　获取订单信息
  getRepairInfo() {
    app.globalData.$post('agenthouseCutomer/RepairOrderController/getOneRepairOrder', { orderId: this.data.orderId }, 'integral')
      .then((res) => {
        if (res && res.data) {
          let itemList = res.data
          itemList.forEach((item, i) => {
            itemList[i].itemImagePath = item.itemImagePath.split(',');
            itemList[i].itemImagePath.forEach((items, ids) => {
              if (items.indexOf('http') == -1) {
                itemList[i].itemImagePath[ids] = 'https://img.guoanfamily.com/' + items
              }
            })

            itemList[i].itemImage = item.itemImage || '20090520/1242397_100025082_2.jpg'

          })
          this.setData({
            itemList: itemList,
            houseAddress: res.data[0].houseAddress,
            startAEndDDate: res.data[0].startAEndDDate,
            customerPhone: res.data[0].customerPhone,
          })
        }
      })
  }
})