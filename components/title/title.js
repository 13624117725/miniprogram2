// components/title/title.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
      titleName: {            // 属性名
        type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
        value: '国安家公寓'     // 属性初始值（可选），如果未指定则会根据类型选择一个
      },
      isShow:{
        type: Boolean,
        value: true
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    titleClick(){
      this.triggerEvent("titleClick")
    }
  }
})
