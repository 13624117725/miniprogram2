// components/house_list/house_list.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
      content: {            // 属性名
        type: Array,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
        value: '国安家公寓'     // 属性初始值（可选），如果未指定则会根据类型选择一个
      },
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
    gaHouseListlis(e) {
      let $id = e.currentTarget.dataset.id;
      let $producttype = e.currentTarget.dataset.producttype;
      this.triggerEvent("getHouseListli", { id: $id, producttype: $producttype})
    }
  }
})
