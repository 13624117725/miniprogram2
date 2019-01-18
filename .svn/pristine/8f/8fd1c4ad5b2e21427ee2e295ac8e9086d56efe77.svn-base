// components/searchpage/searchpage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hotWord: ["朝阳", "海淀", "西城", "通州", "呼家楼", "国贸", "林奥家园", "安和家园", "通惠家园"],
    allHotW: ['望京', "中关村", "上地", "国贸", "大望路"],
    searchHistory:[],
    search:true
  },
  ready(){
    let searchHistory = wx.getStorageSync("history")
    
    console.log(11,searchHistory);
    this.setData({
      searchHistory
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    textClick(e){
      console.log(e.target.dataset.item)

      this.triggerEvent('textClick', e.target.dataset.item)
    }
  }

})
