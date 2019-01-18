// components/suggesScall/suggesScall.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    showArr:[],
    currentPageNo:1,
    canScroll:true,//允许下拉刷新
    loading:true,
    noData:false
  },
  methods:{
    getData(n){
      if (!this.data.canScroll){
        return false;
      }
      let DataP = { "currentPageNo": n, "sourceCode": "0056001" }
      getApp().globalData.$post('agenthouseCutomer/CComplaintController/getComplaint', DataP).then(res => {
        this.setData({
          loading: false
        })
        console.log(res)
        if (res) {
            let arr = this.data.showArr;
         
           res.content.forEach(item=>{
            arr.push(item)
          })
          // 没有数据了
          if (arr && arr.length == 0) {
            this.data.canScroll = false;
            this.setData({
              noData: true
            })
          }
          this.setData({
            showArr: arr,
        

          })
        }
      })
    },
    bindDownLoad(){
      this.data.currentPageNo++;
      this.getData(this.data.currentPageNo+"")
    }
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  attached:function() {
    this.getData("1")
  }
})