var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
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
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {} 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    makertap: function (e) {
      var that = this;
      var id = e.markerId;
      that.showSearchInfo(wxMarkerData, id);
      that.changeMarkerColor(wxMarkerData, id);
    }, 
    showSearchInfo: function (data, i) {
      var that = this;
      that.setData({
        rgcData: {
          address: '地址：' + data[i].address + '\n',
          desc: '描述：' + data[i].desc + '\n',
          business: '商圈：' + data[i].business
        }
      });
    } ,
    
    changeMarkerColor: function (data, i) {
      var that = this;
      var markers = [];
      for (var j = 0; j < data.length; j++) {
        if (j == i) {
          // 此处需要在相应路径放置图片文件 
          // data[j].iconPath = "../../img/marker_yellow.png";
        } else {
          // 此处需要在相应路径放置图片文件 
          // data[j].iconPath = "../../img/marker_red.png";
        }
        markers[j](data[j]);
      }
      that.setData({
        markers: markers
      });
    } 
  },
  ready(){
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'Gphfc3FkrQXVOXSwYnaRcdxR'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData,
        latitude: 39.964346,
        longitude: 116.305689,
        iconTapPath:"",
      });
    }
    // 发起POI检索请求 
    BMap.regeocoding({
      
      fail: fail,
      success: success,

      // 此处需要在相应路径放置图片文件 
      // iconPath: '../../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      // iconTapPath: '../../img/marker_red.png'
    }); 
  }
})

