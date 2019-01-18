// components/new_title/new_tltle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    city: {
      type: String,
      value: '北海市'
    },
    loupan: {
      type: String,
      value: "北海第一城"
    },
    price: {
      type: String,
      value: ''
    },
    new_house_list_li:{
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gethouselist(e) {
      let $id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/new/newHouseDetail/newHouseDetail?buildId=${$id}`,
      })
    }
  }
})
