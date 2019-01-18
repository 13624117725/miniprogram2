let pUrl = "https://www.guoanfamily.com/"
let pUrl2 = "https://www.guoanfamily.com/"
let COMMON_API_URL = "https://www.guoanfamily.com/common/"
let pUrl1 = "https://www.guoanfamily.com/"
let UUID = () => {
  return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};
// 数据统计

let reportHtmlRecord = (url) => {
  let Tid = wx.getStorageSync("Tid")
  if (!Tid) {
    Tid = getApp().globalData.uuid
    wx.setStorageSync("Tid", getApp().globalData.uuid)
  }
  let Pid = getApp().globalData.uuid;
  let postData = {
    id: UUID(),
    tid: Tid,
    platform: "miniProgram",
    req_method: url.split('?')[0]
  }
  wx.request({
    url: pUrl2 + 'tongji/save/reportHtmlRecord',
    method: "POST",
    header: {
      'content-type': 'application/json',
      "Authorization": ""
    },
    dataType: 'json',
    data: postData,
    success(res) {
    }
  })
}
export default {
  $get(url, interfaceType = "") {
    pUrl = pUrl1
    switch (interfaceType) {
      case "common":
        pUrl = COMMON_API_URL;
        break;
      case "integral":
        pUrl = pUrl2;
        break;

    }
    let Authorization = wx.getStorageSync("token");
    if (!Authorization) {
      Authorization = ""
    }
    // 统计
    reportHtmlRecord(url);
    return new Promise((resolve, reject) => {
      wx.request({
        url: pUrl + url,
        header: {
          'content-type': 'application/json',
          "Authorization": Authorization
        },
        method: 'GET',
        dataType: 'json',
        success(res) {
          if (res.code == 200 || res.status == 200 || res.Code == 200 || res.Status == 200 || res.statusCode == 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(res) {
          reject(res)
        }
      })
    }).then((res) => {
      return res.data
    })
  },
  $post(url, data = {}, interfaceType = "") {
    pUrl = pUrl1
    let Authorization = wx.getStorageSync("token");
    if (!Authorization) {
      Authorization = ""
    }
    return new Promise((resolve, reject) => {
      switch (interfaceType) {
        case "common":
          pUrl = COMMON_API_URL;
          break;
        case "integral":
          pUrl = pUrl2;
          break;
      }
      // 统计
      reportHtmlRecord(url);
      wx.request({
        url: pUrl + url,
        method: "POST",
        header: {
          'content-type': 'application/json',
          "Authorization": Authorization
        },
        dataType: 'json',
        data: data,
        success(res) {
          if (res.code == 200 || res.status == 200 || res.Code == 200 || res.Status == 200 || res.statusCode == 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(res) {
          reject(res)
        }
      })

    }).then((res) => {
      return res.data
    })
  },
  UUID() {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }


}