//app.js
import Ajax from '/public/public.js'
import router from '/public/router.js'

App({
  onHide() {
    this.data.webShowed = false;
  },
  data: {
    webShowed: false //标记web-view页面是否已经显示过了
  },
  onLaunch() {
      //获取登录用户的opennid
    wx.login({
      success(res) {
        if (res.code) {

          getApp().globalData.$get(`openweixin/miniapp/login?jsCode=${res.code}`).then((res) => {
            if (res.code !== 0) {
              return;
            }
            let openId = res.data;
            wx.setStorageSync("openId", openId);
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      // Tid
        let Tid = wx.getStorageSync("Tid")
        if (!Tid){
          Tid = getApp().globalData.makeUUID()
          wx.setStorageSync("Tid", Tid )
        }

        let makeMyobj = (obj)=>{
          let pages = getCurrentPages();
          let currPage = null;
          if (pages.length) {
            currPage = pages[pages.length - 1];
          }
          let url_toArr = obj.url.split('/');
          let url_fromArr = currPage.route.split("/");
          let key = obj.url.split("?")[0]
          let Myobj ={}
          if (router[key]){
            let postData = {
              id: Ajax.UUID(),
              platform: 'miniProgram',
              bs: router[key].split("&")[1],
              req_url: "/" + url_toArr[url_toArr.length - 1],
              url_from: "/" + url_fromArr[url_fromArr.length - 1],
              pid: getApp().globalData.uuid,
              url_name: router[key].split("&")[0],
              tid: Tid
            }
            Myobj = {
              url: obj.url,
              success() {
                getApp().globalData.$post(`tongji/save/reportHtmlRecord`, postData)
              }
            }
          }else{
            Myobj = {
              url: obj.url
            }
          }
          
          return Myobj
        }
        wx.navigateTo2 =(obj,e)=>{
          let Urlobj = makeMyobj(obj)
          return wx.navigateTo(Urlobj)
        } 
        wx.redirectTo2 = (obj, e) => {
          let Urlobj = makeMyobj(obj)
          return wx.redirectTo(Urlobj)
        } 
        wx.switchTab2 = (obj, e) => {
          let Urlobj = makeMyobj(obj)
          return wx.switchTab(Urlobj)
        } 
        
     
      }
    })
  },
  globalData: {
    userInfo: null,
    // ctxPath:"https://nt.guoanfamily.com/guoanjiaAppTest/#/?from=xiaochengxu",
    ctxPath: 'https://www.guoanfamily.com/guoanjiaApp/#/?from=xiaochengxu',
    $get: Ajax.$get,
    $post: Ajax.$post,
    $loginCheck: Ajax.$loginCheck,
    uuid: Ajax.UUID(),
    makeUUID: Ajax.UUID,
    turnRouter(route) {
      getApp().globalData.ctxPath = `https://www.guoanfamily.com/guoanjiaApp/${route}from=xiaochengxu`
      wx.navigateTo({
        url: '/pages/first/first'
      })
    },
    // 维修的选择结果
    RepairResult:[]
   
  }
  
})